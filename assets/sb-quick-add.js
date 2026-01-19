if (!customElements.get('quick-view-custom')) {
  class QuickViewCustom extends HTMLElement {
    constructor() {
      super();
      this.openQvDrawer = this.openQvDrawer.bind(this);
      this.handleVariantFormRadio = this.handleVariantFormRadio.bind(this);
      this.handleVariantFormSelect = this.handleVariantFormSelect.bind(this);
      this.handleVariantFormSubmit = this.handleVariantFormSubmit.bind(this);
      this.handleDrawerClick = this.handleDrawerClick.bind(this);
      this.closeDrawer = this.closeDrawer.bind(this);
      this.updateGiftBadge = this.updateGiftBadge.bind(this);
    }

    connectedCallback() {
      this.qvBtn = this.querySelector('.button');
      if (this.qvBtn) {
        this.qvBtn.addEventListener('click', this.openQvDrawer);
      }

      // Set up drawer handlers (only once)
      if (!QuickViewCustom.drawerInitialized) {
        this.drawer = document.querySelector('.sb-quick-add');
        if (this.drawer) {
          this.drawer.addEventListener('click', this.handleDrawerClick);
        }

        const closeBtn = document.querySelector('.sb-quick-add__close');
        if (closeBtn) {
          closeBtn.addEventListener('click', this.closeDrawer);
        }

        QuickViewCustom.drawerInitialized = true;
        QuickViewCustom.drawerInstance = this;
      } else {
        this.drawer = document.querySelector('.sb-quick-add');
      }
    }

    openQvDrawer(e) {
      e.preventDefault();
      let buttonEl = e.currentTarget;
      this.fetchQvProductDetails(buttonEl.dataset.productHandle);
    }

    fetchQvProductDetails(handle) {
      const quickViewUrl = `/products/${handle}?view=quick-add`;
      fetch(quickViewUrl, { credentials: 'include' })
        .then((response) => {
          if (!response.ok) throw new Error('Network response was not ok');
          return response.text();
        })
        .then((html) => {
          const drawer = this.drawer || document.querySelector('.sb-quick-add');
          if (!drawer) return;

          const content = drawer.querySelector('.sb-quick-add__content');
          if (content) {
            content.innerHTML = html;
          }
          drawer.classList.add('sb-quick-add--active');
          this.addQuickViewEvents();
        })
        .catch((err) => {
          console.error('Failed to fetch quick view:', err);
        });
    }

    handleDrawerClick(event) {
      const drawer = this.drawer || document.querySelector('.sb-quick-add');
      if (!drawer || !drawer.classList.contains('sb-quick-add--active')) return;

      const content = drawer.querySelector('.sb-quick-add__content');
      if (!content) return;

      const products = content.querySelectorAll('.sb-quick-add__product');
      const clickedInsideProduct = Array.from(products).some((product) => product.contains(event.target));

      if (!clickedInsideProduct) {
        const instance = QuickViewCustom.drawerInstance || this;
        instance.closeDrawer();
      }
    }

    closeDrawer() {
      const drawer = this.drawer || document.querySelector('.sb-quick-add');
      if (drawer) {
        drawer.classList.remove('sb-quick-add--active');
        const content = drawer.querySelector('.sb-quick-add__content');
        if (content) {
          content.querySelectorAll('.sb-quick-add__product').forEach((product) => (product.style.display = 'none'));
        }
      }
    }

    addQuickViewEvents() {
      const drawer = this.drawer || document.querySelector('.sb-quick-add');
      if (!drawer) return;

      const content = drawer.querySelector('.sb-quick-add__content');
      if (!content) return;

      // Add listeners to variant forms within the drawer content
      // Note: No need to clean up old listeners because content.innerHTML = html removes all old DOM nodes
      content.querySelectorAll('.sb-quick-add__form').forEach((form) => {
        const productId = form.dataset.productId;
        const variantDataElement = content.querySelector(`#product-variants-${productId}`);
        if (!variantDataElement) return;
        const variants = JSON.parse(variantDataElement.textContent);

        // Listen for option changes on radios
        form.querySelectorAll('.sb-quick-add__option-radio').forEach((input) => {
          input.addEventListener('change', (ev) => this.handleVariantFormRadio(ev, form, variants));
        });

        // Listen for option changes on selects
        form.querySelectorAll('.sb-quick-add__option-dropdown').forEach((input) => {
          input.addEventListener('change', (ev) => this.handleVariantFormSelect(ev, form, variants));
        });

        // Set initial state for selects
        form.querySelectorAll('.sb-quick-add__option-dropdown').forEach((input) => {
          this.handleVariantFormSelect(null, form, variants);
        });

        // Form submit
        form.addEventListener('submit', (ev) => this.handleVariantFormSubmit(ev, form));

        // Handle frequency radio changes to update gift badge
        form.querySelectorAll('.sb-quick-add__frequency-radio').forEach((radio) => {
          radio.addEventListener('change', () => {
            this.updateGiftBadge(form);
          });
        });

        // Set initial gift badge state
        this.updateGiftBadge(form);
      });
    }

    updateGiftBadge(form) {
      const planFreq = form.querySelector("[name='plan-freq']:checked")?.value;
      const giftContainer = form.querySelector('.sb-quick-add__free-gift');
      if (!giftContainer) return;

      const badgeBefore = giftContainer.querySelector('.sb-quick-add__free-gift-badge--before');
      const badgeAfter = giftContainer.querySelector('.sb-quick-add__free-gift-badge--after');

      if (planFreq === 'subscription') {
        if (badgeBefore) badgeBefore.style.display = 'none';
        if (badgeAfter) badgeAfter.style.display = 'flex';
      } else {
        if (badgeBefore) badgeBefore.style.display = 'flex';
        if (badgeAfter) badgeAfter.style.display = 'none';
      }
    }

    updateGiftVariant(form, matchedVariant) {
      if (!matchedVariant) return;

      // Get gift kit variants data
      const giftKitDataElement = form.querySelector('[data-gift-kit-variants]');
      if (!giftKitDataElement) return;

      const giftVariants = JSON.parse(giftKitDataElement.textContent);
      if (!giftVariants || giftVariants.length === 0) return;

      // Find matching gift variant based on product variant title (matching PDP logic)
      let giftVariant = null;
      if (giftVariants.length === 1) {
        giftVariant = giftVariants[0];
      } else {
        // Match by variant title
        giftVariant = giftVariants.find((gv) => gv.title === matchedVariant.title);
      }

      // Update the data-free-subscription-gift script tag
      const giftScriptElement = form.querySelector('[data-free-subscription-gift]');
      if (giftScriptElement && giftVariant) {
        giftScriptElement.textContent = JSON.stringify({
          gift: giftVariant,
        });
      }
    }

    // Handles option radio change
    handleVariantFormRadio(event, form, variants) {
      // Remove 'active' from all labels
      form
        .querySelectorAll('.sb-quick-add__size')
        .forEach((label) => label.classList.remove('sb-quick-add__size--active'));
      if (event && event.target.checked) {
        event.target.closest('.sb-quick-add__size').classList.add('sb-quick-add__size--active');
      }
      this.updateDropdownAvailability(form, variants);
      this.updateVariantId(form, variants);
    }

    // Handles option select change
    handleVariantFormSelect(event, form, variants) {
      this.updateVariantId(form, variants);
    }

    updateDropdownAvailability(form, variants) {
      let selectedOptions = [];
      // Get dropdown selected values
      form.querySelectorAll('.sb-quick-add__option-dropdown').forEach((select) => {
        selectedOptions[select.dataset.optionIndex] = select.value;
      });
      // Get checked radios
      form.querySelectorAll('.sb-quick-add__option-radio:checked').forEach((radio) => {
        selectedOptions[radio.dataset.optionIndex] = radio.value;
      });

      let availableOptions = {};

      form.querySelectorAll('.sb-quick-add__option-dropdown').forEach((select) => {
        let optionIndex = select.dataset.optionIndex;
        let availableValues = [
          ...new Set(
            variants
              .filter((v) => v.options.slice(0, optionIndex).every((opt, idx) => selectedOptions[idx] === opt))
              .map((v) => v.options[optionIndex])
          ),
        ];
        availableOptions[optionIndex] = availableValues;
        let firstAvailableOption = null;
        select.querySelectorAll('option').forEach((option) => {
          if (availableValues.includes(option.value)) {
            option.disabled = false;
            option.style.display = 'block';
            if (!firstAvailableOption) firstAvailableOption = option;
          } else {
            option.disabled = true;
            option.style.display = 'none';
            option.removeAttribute('selected');
          }
        });
        if (firstAvailableOption) {
          select.value = firstAvailableOption.value;
          firstAvailableOption.setAttribute('selected', 'selected');
        }
      });
    }

    // Handles variant updates (name unchanged)
    updateVariantId(form, variants) {
      let selectedOptions = [];
      form.querySelectorAll('.sb-quick-add__option-dropdown').forEach((select) => {
        selectedOptions[select.dataset.optionIndex] = select.value;
      });
      form.querySelectorAll('.sb-quick-add__option-radio:checked').forEach((radio) => {
        selectedOptions[radio.dataset.optionIndex] = radio.value;
      });
      let matchedVariant = variants.find((v) => {
        return v.options.every((opt, idx) => opt === selectedOptions[idx]);
      });

      if (matchedVariant && matchedVariant.featured_image && matchedVariant.featured_image.product_id) {
        const drawer = this.drawer || document.querySelector('.sb-quick-add');
        if (drawer) {
          const content = drawer.querySelector('.sb-quick-add__content');
          if (content) {
            const variantDrawer = content.querySelector(`#variant-drawer-${matchedVariant.featured_image.product_id}`);
            if (variantDrawer) {
              const images = variantDrawer.querySelectorAll('.sb-quick-add__image img');
              if (images.length > 1) {
                images.forEach((img) => {
                  if (img.dataset.variantId == matchedVariant.id) {
                    img.style.display = 'block';
                  } else {
                    img.style.display = 'none';
                  }
                });
              }
            }
          }
        }
      }
      const variantIdInput = form.querySelector('.sb-quick-add__variant-id');
      if (matchedVariant && variantIdInput) {
        variantIdInput.value = matchedVariant.id;
      }

      // Update gift variant based on selected product variant (matching PDP behavior)
      this.updateGiftVariant(form, matchedVariant);

      const priceField = form.querySelector('.sb-quick-add__product-price');
      const compareAtPriceField = form.querySelector('.sb-quick-add__compare-price');
      const oneTimePriceField = form.querySelector('.sb-quick-add__one-time-price');
      if (matchedVariant) {
        const sellingPlan = matchedVariant.selling_plan_allocations && matchedVariant.selling_plan_allocations[0];
        if (sellingPlan) {
          const price = sellingPlan.price / 100;
          const compareAtPrice = sellingPlan.compare_at_price ? sellingPlan.compare_at_price / 100 : null;
          const oneTimePrice = matchedVariant.price / 100;
          if (oneTimePriceField) oneTimePriceField.innerText = `$${oneTimePrice.toFixed(2)}`;
          if (priceField) priceField.innerText = `$${price.toFixed(2)}`;
          if (compareAtPriceField) {
            if (compareAtPrice) {
              compareAtPriceField.innerText = `$${compareAtPrice.toFixed(2)}`;
              compareAtPriceField.style.display = 'block';
            } else {
              compareAtPriceField.style.display = 'none';
            }
          }
        } else {
          const price = matchedVariant.price / 100;
          const compareAtPrice = matchedVariant.compare_at_price ? matchedVariant.compare_at_price / 100 : null;
          if (priceField) priceField.innerText = `$${price.toFixed(2)}`;
          if (compareAtPriceField) {
            if (compareAtPrice) {
              compareAtPriceField.innerText = `$${compareAtPrice.toFixed(2)}`;
              compareAtPriceField.style.display = 'block';
            } else {
              compareAtPriceField.style.display = 'none';
            }
          }
        }
      }
    }

    // Handles form submit event
    handleVariantFormSubmit(event, form) {
      event.preventDefault();
      const variantId = form.querySelector('.sb-quick-add__variant-id')?.value;
      if (!variantId) {
        return;
      }

      const addToCartButton = form.querySelector("button[type='submit']");
      if (addToCartButton) {
        addToCartButton.setAttribute('aria-disabled', true);
        addToCartButton.classList.add('loading');
        // Show loading spinner (matching sb-product-form.js)
        form.querySelectorAll('.loading__spinner').forEach((loading) => loading.classList.remove('hidden'));
      }

      // Get cart drawer element
      const cartDrawer = document.querySelector('cart-drawer') || document.querySelector('cart-notification');

      // Build the item object (matching sb-product-form.js pattern)
      const baseItem = {
        id: variantId,
        quantity: 1,
      };

      const planFreq = form.querySelector("[name='plan-freq']:checked")?.value;
      if (planFreq === 'subscription') {
        const sellingPlanSelect = form.querySelector("[name='selling_plan']");
        if (sellingPlanSelect && sellingPlanSelect.value) {
          baseItem.selling_plan = sellingPlanSelect.value;
        }
      }

      // Handle free gift for subscriptions (matching sb-product-form.js)
      if (baseItem.selling_plan) {
        const drawer = this.drawer || document.querySelector('.sb-quick-add');
        if (drawer) {
          const content = drawer.querySelector('.sb-quick-add__content');
          const freeGiftItem =
            content?.querySelector('[data-free-subscription-gift]') ||
            document.querySelector('[data-free-subscription-gift]');
          if (freeGiftItem) {
            const gift = JSON.parse(freeGiftItem.textContent);
            baseItem.id = gift.gift.id;
          }
        }
      }

      const items = [baseItem];
      const data = { items };

      // Request sections if cart drawer exists (matching sb-product-form.js)
      if (cartDrawer) {
        data.sections = cartDrawer.getSectionsToRender().map((section) => section.id);
        data.sections_url = window.location.pathname;
        cartDrawer.setActiveElement(document.activeElement);
      }

      // Use fetchConfig and routes.cart_add_url (matching sb-product-form.js)
      const config = fetchConfig('json');
      config.body = JSON.stringify(data);

      fetch(`${routes.cart_add_url}`, config)
        .then((response) => response.json())
        .then((response) => {
          // Handle errors
          if (response.status) {
            console.log(response.description || response.errors || 'There was an error adding the item to your cart.');
            if (addToCartButton) {
              addToCartButton.removeAttribute('aria-disabled');
              addToCartButton.classList.remove('loading');
              form.querySelectorAll('.loading__spinner').forEach((loading) => loading.classList.add('hidden'));
            }
            return;
          }

          // Close the quick-add drawer and wait for transition to complete
          this.closeDrawer();

          // If no cart drawer, redirect to cart page
          if (!cartDrawer) {
            window.location = window.routes?.cart_url || '/cart';
            return;
          }

          // Wait for drawer close transition (0.3s) before opening cart drawer
          setTimeout(() => {
            // Use cart drawer's renderContents method (matching sb-product-form.js)
            // This properly updates all sections and opens the drawer
            cartDrawer.renderContents(response);
          }, 300);
        })
        .catch((error) => {
          console.error('Error adding to cart:', error);
        })
        .finally(() => {
          if (addToCartButton) {
            addToCartButton.classList.remove('loading');
            if (
              !addToCartButton.hasAttribute('aria-disabled') ||
              addToCartButton.getAttribute('aria-disabled') !== 'true'
            ) {
              addToCartButton.removeAttribute('aria-disabled');
            }
            // Hide loading spinner (matching sb-product-form.js)
            form.querySelectorAll('.loading__spinner').forEach((loading) => loading.classList.add('hidden'));
          }
        });
    }

    disconnectedCallback() {
      if (this.qvBtn) {
        this.qvBtn.removeEventListener('click', this.openQvDrawer);
      }
      if (this.drawer) {
        this.drawer.removeEventListener('click', this.handleDrawerClick);
        const closeBtn = this.drawer.querySelector('.sb-quick-add__close');
        if (closeBtn) {
          closeBtn.removeEventListener('click', this.closeDrawer);
        }
      }
    }
  }
  customElements.define('quick-view-custom', QuickViewCustom);
}
