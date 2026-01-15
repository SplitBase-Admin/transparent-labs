if (!customElements.get('product-form')) {
  customElements.define(
    'product-form',
    class ProductForm extends HTMLElement {
      constructor() {
        super();

        this.form = this.querySelector('form');
        this.variantIdInput.disabled = false;
        this.form.addEventListener('submit', this.onSubmitHandler.bind(this));
        this.cart = document.querySelector('cart-notification') || document.querySelector('cart-drawer');
        this.submitButton = this.querySelector('[type="submit"]');
        this.submitButtonText = this.submitButton ? this.submitButton.querySelector('span') : null;

        if (document.querySelector('cart-drawer') && this.submitButton) {
          this.submitButton.setAttribute('aria-haspopup', 'dialog');
        }

        this.hideErrors = this.dataset.hideErrors === 'true';
      }

      /**
       * Update the submit button label to include the variant price when the selected variant
       * has no selling plan allocations (i.e. one-time purchase only products).
       *
       * This is intentionally a no-op for subscription products (when the product has selling plans),
       * so Skio/other subscription UI can own the button text.
       *
       * @param {object|null} variant - Shopify variant JSON object
       */
      updateSubmitButtonPriceLabel(variant) {
        try {
          if (!this.submitButtonText || !variant) return;

          // Respect disabled state text (sold out / unavailable)
          if (this.submitButton?.hasAttribute('disabled')) return;

          const productHasSellingPlans = this.dataset.hasSellingPlans === 'true';
          if (productHasSellingPlans) return;

          const allocations = Array.isArray(variant.selling_plan_allocations) ? variant.selling_plan_allocations : [];
          if (allocations.length) return;

          const addToCartLabel =
            window?.variantStrings?.addToCart || window?.strings?.product?.add_to_cart || 'Add to cart';

          const moneyFormat = this.dataset.moneyFormat || window?.Shopify?.money_format;
          const stripTrailingZeros = (formattedMoney) => {
            if (typeof formattedMoney !== 'string') return formattedMoney;
            // Removes trailing ".00" or ",00" while leaving other decimals intact (e.g. 59.50 stays).
            return formattedMoney.replace(/([.,])00(?=[^\d]|$)/, '');
          };
          const formatMoney = (cents) => {
            if (window?.Shopify?.formatMoney) {
              return stripTrailingZeros(window.Shopify.formatMoney(cents, moneyFormat));
            }
            // Fallback: basic dollars formatting if Shopify.formatMoney isn't present
            return stripTrailingZeros(`$${(Number(cents || 0) / 100).toFixed(2)}`);
          };

          const originalCents = Number(variant.price ?? 0);
          const discountPercentageRaw = window?.globalSettings?.discount_percentage;
          const discountPercentage = Number(discountPercentageRaw) || 0;

          if (discountPercentage > 0) {
            const discountedCents = Math.max(0, Math.round(originalCents * (1 - discountPercentage / 100)));
            const originalPriceStr = formatMoney(originalCents);
            const discountedPriceStr = formatMoney(discountedCents);
            this.submitButtonText.innerHTML =
              `${addToCartLabel} | ` +
              `<span class="td-atc-price__original"><s>${originalPriceStr}</s></span>` +
              `<span class="td-atc-price__discounted">${discountedPriceStr}</span>`;
          } else {
            this.submitButtonText.innerHTML = `${addToCartLabel} | ${formatMoney(originalCents)}`;
          }
        } catch (error) {
          console.error('ProductForm:updateSubmitButtonPriceLabel failed', error);
        }
      }

      onSubmitHandler(evt) {
        evt.preventDefault();
        if (!this.submitButton) return;
        if (this.submitButton.getAttribute('aria-disabled') === 'true') return;

        this.handleErrorMessage();

        this.submitButton.setAttribute('aria-disabled', true);
        this.submitButton.classList.add('loading');
        this.querySelectorAll('.loading__spinner').forEach((loading) => loading.classList.remove('hidden'));

        const config = fetchConfig('json');
        // config.headers['X-Requested-With'] = 'XMLHttpRequest';
        // delete config.headers['Content-Type'];

        const data = {};
        const formData = new FormData(this.form);
        const items = [];
        const baseItem = {};

        formData.forEach((value, key) => {
          if (key === 'id') {
            baseItem['id'] = value;
          } else if (key === 'selling_plan') {
            baseItem['selling_plan'] = value;
          } else if (key === 'quantity') {
            baseItem['quantity'] = value;
          }
        });
        if (!baseItem.quantity) {
          baseItem['quantity'] = 1;
        }
        if (baseItem.selling_plan) {
          const freeGiftItem = document.querySelector('[data-free-subscription-gift]');
          if (freeGiftItem) {
            // NOTE it looks like in production they are just assigning the same selling plan to the gift variant
            const gift = JSON.parse(freeGiftItem.textContent);
            baseItem['id'] = gift.gift.id;
          }
        }
        items.push(baseItem);
        data['items'] = items;
        if (this.cart) {
          data['sections'] = this.cart.getSectionsToRender().map((section) => section.id);
          data['sections_url'] = window.location.pathname;
          this.cart.setActiveElement(document.activeElement);
        }
        config.body = JSON.stringify(data);
        fetch(`${routes.cart_add_url}`, config)
          .then((response) => response.json())
          .then((response) => {
            if (response.status) {
              publish(PUB_SUB_EVENTS.cartError, {
                source: 'product-form',
                productVariantId: formData.get('id'),
                errors: response.errors || response.description,
                message: response.message,
              });
              this.handleErrorMessage(response.description);

              const soldOutMessage = this.submitButton.querySelector('.sold-out-message');
              if (!soldOutMessage) return;
              this.submitButton.setAttribute('aria-disabled', true);
              this.submitButtonText.classList.add('hidden');
              soldOutMessage.classList.remove('hidden');
              this.error = true;
              return;
            } else if (!this.cart) {
              window.location = window.routes.cart_url;
              return;
            }

            const startMarker = CartPerformance.createStartingMarker('add:wait-for-subscribers');
            if (!this.error)
              publish(PUB_SUB_EVENTS.cartUpdate, {
                source: 'product-form',
                productVariantId: formData.get('id'),
                cartData: response,
              }).then(() => {
                CartPerformance.measureFromMarker('add:wait-for-subscribers', startMarker);
              });
            this.error = false;
            const quickAddModal = this.closest('quick-add-modal');
            if (quickAddModal) {
              document.body.addEventListener(
                'modalClosed',
                () => {
                  setTimeout(() => {
                    CartPerformance.measure('add:paint-updated-sections', () => {
                      this.cart.renderContents(response);
                    });
                  });
                },
                { once: true }
              );
              quickAddModal.hide(true);
            } else {
              CartPerformance.measure('add:paint-updated-sections', () => {
                this.cart.renderContents(response);
              });
            }
          })
          .catch((e) => {
            console.error(e);
          })
          .finally(() => {
            this.submitButton.classList.remove('loading');
            if (this.cart && this.cart.classList.contains('is-empty')) this.cart.classList.remove('is-empty');
            if (!this.error) this.submitButton.removeAttribute('aria-disabled');
            this.querySelectorAll('.loading__spinner').forEach((loading) => loading.classList.add('hidden'));

            CartPerformance.measureFromEvent('add:user-action', evt);
          });
      }

      handleErrorMessage(errorMessage = false) {
        if (this.hideErrors) return;

        this.errorMessageWrapper =
          this.errorMessageWrapper || this.querySelector('.product-form__error-message-wrapper');
        if (!this.errorMessageWrapper) return;
        this.errorMessage = this.errorMessage || this.errorMessageWrapper.querySelector('.product-form__error-message');

        this.errorMessageWrapper.toggleAttribute('hidden', !errorMessage);

        if (errorMessage) {
          this.errorMessage.textContent = errorMessage;
        }
      }

      toggleSubmitButton(disable = true, text) {
        // Klaviyo BIS / other apps can remove/replace the submit button when sold out.
        // In that case, treat this as a no-op to avoid breaking PDP updates.
        if (!this.submitButton) return;

        if (disable) {
          this.submitButton.setAttribute('disabled', 'disabled');
          if (text && this.submitButtonText) this.submitButtonText.textContent = text;
        } else {
          this.submitButton.removeAttribute('disabled');
          if (this.submitButtonText) this.submitButtonText.textContent = window.variantStrings.addToCart;
        }
      }

      get variantIdInput() {
        return this.form.querySelector('[name=id]');
      }
    }
  );
}
