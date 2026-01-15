if (!customElements.get('product-info')) {
  customElements.define(
    'product-info',
    class ProductInfo extends HTMLElement {
      quantityInput = undefined;
      quantityForm = undefined;
      onVariantChangeUnsubscriber = undefined;
      cartUpdateUnsubscriber = undefined;
      abortController = undefined;
      pendingRequestUrl = null;
      preProcessHtmlCallbacks = [];
      postProcessHtmlCallbacks = [];
      displayedMediaIds = new Set();
      responseCache = new Map();
      prefetchCache = new Set();
      prefetchTimeout = null;

      constructor() {
        super();

        this.quantityInput = this.querySelector('.quantity__input');
        this.currentRequestUrl = null;
        this.isRequestInFlight = false;
      }

      connectedCallback() {
        this.initializeProductSwapUtility();

        // Initialize displayed media IDs with current variant's featured media
        const currentMediaItems = this.querySelectorAll('[data-media-id]');
        currentMediaItems.forEach((item) => {
          const mediaId = item.dataset.mediaId;
          if (mediaId) {
            this.displayedMediaIds.add(mediaId);
          }
        });

        this.onVariantChangeUnsubscriber = subscribe(
          PUB_SUB_EVENTS.optionValueSelectionChange,
          this.handleOptionValueChange.bind(this)
        );
        this.addEventListener('skio::update-selling-plan', (event) => {
          this.handleSkioUpdateSellingPlan(event);
        });

        this.initQuantityHandlers();
        this.initializeImagePrefetch();
        this.dispatchEvent(new CustomEvent('product-info:loaded', { bubbles: true }));
      }

      addPreProcessCallback(callback) {
        this.preProcessHtmlCallbacks.push(callback);
      }

      initQuantityHandlers() {
        if (!this.quantityInput) return;

        this.quantityForm = this.querySelector('.product-form__quantity');
        if (!this.quantityForm) return;

        this.setQuantityBoundries();
        if (!this.dataset.originalSection) {
          this.cartUpdateUnsubscriber = subscribe(PUB_SUB_EVENTS.cartUpdate, this.fetchQuantityRules.bind(this));
        }
      }

      disconnectedCallback() {
        this.onVariantChangeUnsubscriber();
        this.cartUpdateUnsubscriber?.();
        this.cleanupImagePrefetch();
      }

      initializeProductSwapUtility() {
        this.preProcessHtmlCallbacks.push((html) =>
          html.querySelectorAll('.scroll-trigger').forEach((element) => element.classList.add('scroll-trigger--cancel'))
        );
        this.postProcessHtmlCallbacks.push((newNode) => {
          // Only reinitialize PaymentButton if payment buttons exist in the new HTML
          if (newNode.querySelector('[data-shopify="payment-button"]') && window?.Shopify?.PaymentButton) {
            window.Shopify.PaymentButton.init();
          }
          // Only call loadShopifyXR if 3D models are present
          if (newNode.querySelector('product-model, [id^="ProductJSON-"]') && window?.ProductModel) {
            window.ProductModel.loadShopifyXR();
          }
        });
      }

      handleOptionValueChange({ data: { event, target, selectedOptionValues } }) {
        if (!this.contains(event.target)) return;

        this.resetProductFormState();

        const productUrl = target.dataset.productUrl || this.pendingRequestUrl || this.dataset.url;
        this.pendingRequestUrl = productUrl;
        const shouldSwapProduct = this.dataset.url !== productUrl;
        const shouldFetchFullPage = this.dataset.updateUrl === 'true' && shouldSwapProduct;
        this.renderProductInfo({
          requestUrl: this.buildRequestUrlWithParams(productUrl, selectedOptionValues, shouldFetchFullPage),
          targetId: target.id,
          callback: shouldSwapProduct
            ? this.handleSwapProduct(productUrl, shouldFetchFullPage)
            : this.handleUpdateProductInfo(productUrl),
        });
      }

      handleSkioUpdateSellingPlan(event) {
        if (event.detail.sellingPlan?.id) {
          this.sellingPlan = event.detail.sellingPlan.id;
        } else {
          this.sellingPlan = null;
        }

        const selectedOptionValues = this.variantSelectors?.selectedOptionValues || [];

        const productUrl = this.pendingRequestUrl || this.dataset.url;
        this.pendingRequestUrl = productUrl;
        const shouldSwapProduct = this.dataset.url !== productUrl;
        const shouldFetchFullPage = this.dataset.updateUrl === 'true' && shouldSwapProduct;
        this.renderProductInfo({
          requestUrl: this.buildRequestUrlWithParams(productUrl, selectedOptionValues, shouldFetchFullPage),
          targetId: null,
          callback: shouldSwapProduct
            ? this.handleSwapProduct(productUrl, shouldFetchFullPage)
            : this.handleUpdateProductInfo(productUrl),
        });
      }

      resetProductFormState() {
        const productForm = this.productForm;
        productForm?.toggleSubmitButton(true);
        productForm?.handleErrorMessage();
      }

      handleSwapProduct(productUrl, updateFullPage) {
        return (html) => {
          this.productModal?.remove();

          const selector = updateFullPage ? "product-info[id^='MainProduct']" : 'product-info';
          const variant = this.getSelectedVariant(html.querySelector(selector));
          this.updateURL(productUrl, variant?.id);

          // No transition delay for image changes - instant update
          if (updateFullPage) {
            document.querySelector('head title').innerHTML = html.querySelector('head title').innerHTML;

            HTMLUpdateUtility.viewTransition(
              document.querySelector('main'),
              html.querySelector('main'),
              this.preProcessHtmlCallbacks,
              this.postProcessHtmlCallbacks,
              0
            );
          } else {
            HTMLUpdateUtility.viewTransition(
              this,
              html.querySelector('product-info'),
              this.preProcessHtmlCallbacks,
              this.postProcessHtmlCallbacks,
              0
            );
          }
        };
      }

      renderProductInfo({ requestUrl, targetId, callback }) {
        // Dedupe: prevent duplicate fetches when multiple identical change events fire
        if (this.isRequestInFlight && this.currentRequestUrl === requestUrl) return;
        this.currentRequestUrl = requestUrl;

        // Check cache first
        if (this.responseCache.has(requestUrl)) {
          const cachedResponse = this.responseCache.get(requestUrl);
          this.pendingRequestUrl = null;
          const html = new DOMParser().parseFromString(cachedResponse, 'text/html');
          callback(html);
          if (targetId) {
            document.querySelector(`#${targetId}`)?.focus();
          }
          this.isRequestInFlight = false;
          return;
        }

        this.isRequestInFlight = true;
        this.abortController?.abort();
        this.abortController = new AbortController();

        fetch(requestUrl, { signal: this.abortController.signal })
          .then((response) => response.text())
          .then((responseText) => {
            this.pendingRequestUrl = null;
            // Cache the response
            this.responseCache.set(requestUrl, responseText);
            const html = new DOMParser().parseFromString(responseText, 'text/html');
            callback(html);
          })
          .then(() => {
            if (targetId) {
              // set focus to last clicked option value
              document.querySelector(`#${targetId}`)?.focus();
            }
          })
          .catch((error) => {
            if (error.name === 'AbortError') {
              //console.log('Fetch aborted by user');
            } else {
              console.error(error);
            }
          })
          .finally(() => {
            if (this.currentRequestUrl === requestUrl) {
              this.isRequestInFlight = false;
            }
          });
      }

      getSelectedVariant(productInfoNode) {
        const selectedVariant = productInfoNode.querySelector('variant-selects [data-selected-variant]')?.innerHTML;
        return !!selectedVariant ? JSON.parse(selectedVariant) : null;
      }

      buildRequestUrlWithParams(url, optionValues, shouldFetchFullPage = false) {
        const params = [];

        !shouldFetchFullPage && params.push(`section_id=${this.sectionId}`);

        if (optionValues.length) {
          params.push(`option_values=${optionValues.join(',')}`);
        }

        if (this.sellingPlan) {
          params.push(`selling_plan=${this.sellingPlan}`);
        }
        return `${url}?${params.join('&')}`;
      }

      updateOptionValues(html) {
        const variantSelects = html.querySelector('variant-selects');
        if (variantSelects) {
          // No transition delay for variant selector updates
          HTMLUpdateUtility.viewTransition(this.variantSelectors, variantSelects, this.preProcessHtmlCallbacks, [], 0);
        }
      }

      updateOption1Availability(selectedOptions) {
        const variantsScript = this.querySelector('[data-product-variants]');
        const optionsScript = this.querySelector('[data-product-options]');

        if (variantsScript) {
          this.variants = JSON.parse(variantsScript.textContent);
        }

        if (optionsScript) {
          this.productOptions = JSON.parse(optionsScript.textContent);
        }

        if (
          !this.variants ||
          !this.productOptions ||
          this.productOptions.length == 1 ||
          this.productOptions[0]?.name === 'Flavor'
        )
          return;

        const options1 = this.productOptions[0].values;
        options1.forEach((option1Value) => {
          const option1El = this.querySelector(`input[value="${option1Value}"]`);
          if (!option1El) return;
          const variantExist = this.variants.some((variant) => {
            if (variant.options[0] !== option1Value) {
              return false;
            }
            for (let i = 1; i <= selectedOptions.length; i++) {
              const variantOptionValue = variant.options[i];
              const selectedOptionValue = selectedOptions[i];
              if (selectedOptionValue !== undefined) {
                if (variantOptionValue !== selectedOptionValue) {
                  return false;
                }
              }
            }
            return true;
          });
          option1El.disabled = !variantExist;
        });
      }

      handleUpdateProductInfo(productUrl) {
        return (html) => {
          const variant = this.getSelectedVariant(html);

          // Cache frequently accessed values
          const sectionId = this.sectionId;
          const section = this.dataset.section;

          this.pickupAvailability?.update(variant);
          this.updateOptionValues(html);
          this.updateURL(productUrl, variant?.id);
          this.updateVariantInputs(variant?.id);
          this.updateOption1Availability(variant?.options);

          if (!variant) {
            this.setUnavailable();
            return;
          }

          this.updateMedia(html, variant?.featured_media?.id);

          // Batch critical updates (price, inventory, etc.) - these are visible immediately
          const updateSourceFromDestination = (id, shouldHide = (source) => false) => {
            const source = html.getElementById(`${id}-${sectionId}`);
            const destination = this.querySelector(`#${id}-${section}`);
            if (source && destination) {
              destination.innerHTML = source.innerHTML;
              destination.classList.toggle('hidden', shouldHide(source));
            }
          };

          updateSourceFromDestination('price');
          updateSourceFromDestination('Sku', ({ classList }) => classList.contains('hidden'));
          updateSourceFromDestination('Inventory', ({ innerText }) => innerText === '');
          updateSourceFromDestination('Volume');
          updateSourceFromDestination('Price-Per-Item', ({ classList }) => classList.contains('hidden'));
          updateSourceFromDestination('FreeGift');

          // Cache selectors for non-critical updates
          const quantityRulesEl = this.querySelector(`#Quantity-Rules-${section}`);
          const volumeNoteEl = this.querySelector(`#Volume-Note-${section}`);

          // Defer non-critical updates to improve perceived performance
          requestAnimationFrame(() => {
            // Flavor drawer update
            const flavorDrawerSource = html.querySelector(`#FlavorDrawer-${sectionId}`);
            if (flavorDrawerSource) {
              const flavorDrawerDestination = document.querySelector(`#FlavorDrawer-${section}`);
              if (flavorDrawerDestination) {
                flavorDrawerDestination.innerHTML = flavorDrawerSource.innerHTML;
                flavorDrawerDestination.dispatchEvent(new CustomEvent('sb-flavor-drawer:refreshed', { bubbles: true }));
              }
            }

            // Quantity rules update
            this.updateQuantityRules(sectionId, html);
            quantityRulesEl?.classList.remove('hidden');
            volumeNoteEl?.classList.remove('hidden');
          });

          this.productForm?.toggleSubmitButton(
            html.getElementById(`ProductSubmitButton-${sectionId}`)?.hasAttribute('disabled') ?? true,
            window.variantStrings.soldOut
          );

          // Keep ATC/BIS in sync on variant change.
          // Some apps (e.g. Klaviyo BIS) may alter the DOM; we rely on our own show/hide logic.
          try {
            const bisTrigger = this.querySelector(`#KlaviyoBisTrigger-${sectionId}`);
            const updatedSubmitButton = html.getElementById(`ProductSubmitButton-${sectionId}`);

            const isOos = updatedSubmitButton?.hasAttribute('disabled') ?? true;

            const currentSubmitButton = this.querySelector(`#ProductSubmitButton-${sectionId}`);
            if (currentSubmitButton) {
              currentSubmitButton.toggleAttribute('hidden', isOos);
              currentSubmitButton.style.display = isOos ? 'none' : '';
            }
            if (bisTrigger) {
              bisTrigger.toggleAttribute('hidden', !isOos);
              bisTrigger.style.display = isOos ? '' : 'none';
            }
          } catch (e) {
            console.error('ProductInfo: ATC/BIS toggle failed', e);
          }

          // After toggleSubmitButton sets the default label, optionally replace it with "Add to cart | price"
          this.productForm?.updateSubmitButtonPriceLabel?.(variant);

          publish(PUB_SUB_EVENTS.variantChange, {
            data: {
              sectionId: sectionId,
              html,
              variant,
            },
          });
        };
      }

      updateVariantInputs(variantId) {
        this.querySelectorAll(
          `#product-form-${this.dataset.section}, #product-form-installment-${this.dataset.section}`
        ).forEach((productForm) => {
          const input = productForm.querySelector('input[name="id"]');
          input.value = variantId ?? '';
          input.dispatchEvent(new Event('change', { bubbles: true }));
        });

        //rama for nutrition image change
        if (document.querySelector(`div[data-variant-sfp="${variantId}"]`)) {
          document.querySelectorAll('.variant_meta_image').forEach((elem) => {
            
            if (elem.dataset.variantSfp == variantId) {
              console.log("rama rama inner1");
              elem.classList.remove('hidden');
            } else {
              elem.classList.add('hidden');
            }
          });

          document.getElementById('main-product-sfp')?.classList.add('hidden');
        } else {
          document.querySelectorAll('div[data-variant-sfp]').forEach((elem) => elem.classList.add('hidden'));
          document.getElementById('main-product-sfp')?.classList.remove('hidden');
        }
      }

      updateURL(url, variantId) {
        const components = [];
        if (variantId) {
          components.push(`variant=${variantId}`);
        }
        if (this.sellingPlan) {
          components.push(`selling_plan=${this.sellingPlan}`);
        }
        this.querySelector('share-button')?.updateUrl(
          `${window.shopUrl}${url}${components.length ? `?${components.join('&')}` : ''}`
        );

        if (this.dataset.updateUrl === 'false') return;
        window.history.replaceState({}, '', `${url}${components.length ? `?${components.join('&')}` : ''}`);
      }

      setUnavailable() {
        this.productForm?.toggleSubmitButton(true, window.variantStrings.unavailable);

        const selectors = ['price', 'Inventory', 'Sku', 'Price-Per-Item', 'Volume-Note', 'Volume', 'Quantity-Rules']
          .map((id) => `#${id}-${this.dataset.section}`)
          .join(', ');
        document.querySelectorAll(selectors).forEach(({ classList }) => classList.add('hidden'));
      }

      updateMedia(html, variantFeaturedMediaId) {
        if (!variantFeaturedMediaId) return;

        const mediaKey = `${this.dataset.section}-${variantFeaturedMediaId}`;
        const mediaGalleriesSource = this.querySelectorAll('media-gallery ul');
        const mediaGalleriesDestination = html.querySelectorAll('media-gallery ul');

        if (mediaGalleriesSource.length !== mediaGalleriesDestination.length) {
          return;
        }

        // Cache zoom-on-hover check outside the loop
        const hasZoomOnHover = this.hasAttribute('data-zoom-on-hover');

        mediaGalleriesSource.forEach((mediaGallerySource, index) => {
          const mediaGalleryDestination = mediaGalleriesDestination[index];

          // Optimized refreshSourceData - removed enableZoomOnHover from here
          const refreshSourceData = () => {
            const mediaGallerySourceItems = Array.from(
              mediaGallerySource.querySelectorAll('li[data-media-id], li[data-target]')
            );
            const sourceSet = new Set(
              mediaGallerySourceItems.map((item) => item.dataset.mediaId || item.dataset.target)
            );
            const sourceMap = new Map(
              mediaGallerySourceItems.map((item, index) => [
                item.dataset.mediaId || item.dataset.target,
                { item, index },
              ])
            );
            return [mediaGallerySourceItems, sourceSet, sourceMap];
          };

          if (mediaGallerySource && mediaGalleryDestination) {
            let [mediaGallerySourceItems, sourceSet, sourceMap] = refreshSourceData();
            // Cache destination items query
            const mediaGalleryDestinationItems = Array.from(
              mediaGalleryDestination.querySelectorAll('li[data-media-id], li[data-target]')
            );
            const destinationSet = new Set(
              mediaGalleryDestinationItems.map((item) => item.dataset.mediaId || item.dataset.target)
            );
            let shouldRefresh = false;

            // Add items from new data not present in DOM
            for (let i = mediaGalleryDestinationItems.length - 1; i >= 0; i--) {
              const key =
                mediaGalleryDestinationItems[i].dataset.mediaId || mediaGalleryDestinationItems[i].dataset.target;
              if (!sourceSet.has(key)) {
                mediaGallerySource.prepend(mediaGalleryDestinationItems[i]);
                shouldRefresh = true;
              }
            }

            // Remove items from DOM not present in new data
            for (let i = 0; i < mediaGallerySourceItems.length; i++) {
              const key = mediaGallerySourceItems[i].dataset.mediaId || mediaGallerySourceItems[i].dataset.target;
              if (!destinationSet.has(key)) {
                mediaGallerySourceItems[i].remove();
                shouldRefresh = true;
              }
            }

            // Refresh
            if (shouldRefresh) [mediaGallerySourceItems, sourceSet, sourceMap] = refreshSourceData();

            // If media galleries don't match, sort to match new data order
            // Cache nth-of-type queries to avoid repeated DOM queries
            const nthOfTypeCache = new Map();
            const getNthOfType = (n) => {
              if (!nthOfTypeCache.has(n)) {
                nthOfTypeCache.set(n, mediaGallerySource.querySelector(`li:nth-of-type(${n})`));
              }
              return nthOfTypeCache.get(n);
            };

            mediaGalleryDestinationItems.forEach((destinationItem, destinationIndex) => {
              const key = destinationItem.dataset.mediaId || destinationItem.dataset.target;
              const sourceData = sourceMap.get(key);

              if (sourceData && sourceData.index !== destinationIndex) {
                mediaGallerySource.insertBefore(sourceData.item, getNthOfType(destinationIndex + 1));

                // Refresh source now that it has been modified
                [mediaGallerySourceItems, sourceSet, sourceMap] = refreshSourceData();
                nthOfTypeCache.clear(); // Clear cache after DOM modification
              }
            });
          }
        });

        // Set featured media as active in the media gallery
        const mediaGalleries = this.querySelectorAll(`media-gallery`);
        mediaGalleries.forEach((gallery) =>
          gallery.setActiveMedia?.(`${this.dataset.section}-${variantFeaturedMediaId}`, true)
        );

        // Update media modal
        const modalContent = this.productModal?.querySelector(`.product-media-modal__content`);
        const newModalContent = html.querySelector(`product-modal .product-media-modal__content`);
        if (modalContent && newModalContent) modalContent.innerHTML = newModalContent.innerHTML;

        // Call enableZoomOnHover once after all media updates complete
        if (hasZoomOnHover) {
          requestAnimationFrame(() => {
            enableZoomOnHover(2);
          });
        }

        // Track that this media has been displayed
        this.displayedMediaIds.add(mediaKey);
      }

      setQuantityBoundries() {
        const data = {
          cartQuantity: this.quantityInput.dataset.cartQuantity ? parseInt(this.quantityInput.dataset.cartQuantity) : 0,
          min: this.quantityInput.dataset.min ? parseInt(this.quantityInput.dataset.min) : 1,
          max: this.quantityInput.dataset.max ? parseInt(this.quantityInput.dataset.max) : null,
          step: this.quantityInput.step ? parseInt(this.quantityInput.step) : 1,
        };

        let min = data.min;
        const max = data.max === null ? data.max : data.max - data.cartQuantity;
        if (max !== null) min = Math.min(min, max);
        if (data.cartQuantity >= data.min) min = Math.min(min, data.step);

        this.quantityInput.min = min;

        if (max) {
          this.quantityInput.max = max;
        } else {
          this.quantityInput.removeAttribute('max');
        }
        this.quantityInput.value = min;

        publish(PUB_SUB_EVENTS.quantityUpdate, undefined);
      }

      fetchQuantityRules() {
        const currentVariantId = this.productForm?.variantIdInput?.value;
        if (!currentVariantId) return;

        this.querySelector('.quantity__rules-cart .loading__spinner')?.classList.remove('hidden');
        return fetch(`${this.dataset.url}?variant=${currentVariantId}&section_id=${this.dataset.section}`)
          .then((response) => response.text())
          .then((responseText) => {
            const html = new DOMParser().parseFromString(responseText, 'text/html');
            this.updateQuantityRules(this.dataset.section, html);
          })
          .catch((e) => console.error(e))
          .finally(() => this.querySelector('.quantity__rules-cart .loading__spinner')?.classList.add('hidden'));
      }

      updateQuantityRules(sectionId, html) {
        if (!this.quantityInput) return;
        this.setQuantityBoundries();

        const quantityFormUpdated = html.getElementById(`Quantity-Form-${sectionId}`);
        const selectors = ['.quantity__input', '.quantity__rules', '.quantity__label'];
        for (let selector of selectors) {
          const current = this.quantityForm.querySelector(selector);
          const updated = quantityFormUpdated.querySelector(selector);
          if (!current || !updated) continue;
          if (selector === '.quantity__input') {
            const attributes = ['data-cart-quantity', 'data-min', 'data-max', 'step'];
            for (let attribute of attributes) {
              const valueUpdated = updated.getAttribute(attribute);
              if (valueUpdated !== null) {
                current.setAttribute(attribute, valueUpdated);
              } else {
                current.removeAttribute(attribute);
              }
            }
          } else {
            current.innerHTML = updated.innerHTML;
          }
        }
      }

      get productForm() {
        return this.querySelector(`product-form`);
      }

      get productModal() {
        return document.querySelector(`#ProductModal-${this.dataset.section}`);
      }

      get pickupAvailability() {
        return this.querySelector(`pickup-availability`);
      }

      get variantSelectors() {
        return this.querySelector('variant-selects');
      }

      get relatedProducts() {
        const relatedProductsSectionId = SectionId.getIdForSection(
          SectionId.parseId(this.sectionId),
          'related-products'
        );
        return document.querySelector(`product-recommendations[data-section-id^="${relatedProductsSectionId}"]`);
      }

      get quickOrderList() {
        const quickOrderListSectionId = SectionId.getIdForSection(
          SectionId.parseId(this.sectionId),
          'quick_order_list'
        );
        return document.querySelector(`quick-order-list[data-id^="${quickOrderListSectionId}"]`);
      }

      get sectionId() {
        return this.dataset.originalSection || this.dataset.section;
      }

      /**
       * Initialize image prefetch on hover for option elements
       * @private
       */
      initializeImagePrefetch() {
        // Skip on touch devices
        if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
          return;
        }

        // Use event delegation for dynamic elements
        this.addEventListener('mouseenter', this.handleOptionHover.bind(this), true);
        this.addEventListener('mouseleave', this.handleOptionLeave.bind(this), true);
      }

      /**
       * Clean up prefetch event listeners and timeouts
       * @private
       */
      cleanupImagePrefetch() {
        if (this.prefetchTimeout) {
          clearTimeout(this.prefetchTimeout);
          this.prefetchTimeout = null;
        }
      }

      /**
       * Handle mouseenter on option elements
       * @private
       * @param {Event} event - Mouse event
       */
      handleOptionHover(event) {
        const target = event.target.closest('[data-flavor-option], [data-option-value-id]');
        if (!target || target.disabled) return;

        // Ensure target is within this product-info component
        if (!this.contains(target)) return;

        // Clear any existing timeout
        if (this.prefetchTimeout) {
          clearTimeout(this.prefetchTimeout);
        }

        // Debounce hover events (250ms delay)
        this.prefetchTimeout = setTimeout(() => {
          this.prefetchFeaturedMedia(target);
        }, 250);
      }

      /**
       * Handle mouseleave on option elements
       * @private
       * @param {Event} event - Mouse event
       */
      handleOptionLeave(event) {
        const target = event.target.closest('[data-flavor-option], [data-option-value-id]');
        if (!target) return;

        // Cancel prefetch if user moves away
        if (this.prefetchTimeout) {
          clearTimeout(this.prefetchTimeout);
          this.prefetchTimeout = null;
        }
      }

      /**
       * Prefetch featured media image for hovered option
       * @private
       * @param {HTMLElement} element - The hovered option element
       */
      prefetchFeaturedMedia(element) {
        const featuredMediaId = element.dataset.featuredMediaId;
        if (!featuredMediaId) return;

        // Build image URL - find the media element in the gallery
        const mediaKey = `${this.dataset.section}-${featuredMediaId}`;
        const mediaElement = this.querySelector(`[data-media-id="${mediaKey}"]`);

        if (!mediaElement) return;

        // Get image URL from existing media element
        const img = mediaElement.querySelector('img');
        if (!img) return;

        // Use the srcset or src to get a high-quality image URL
        let imageUrl = img.src;

        // Try to get a higher resolution from srcset if available
        if (img.srcset) {
          const srcsetEntries = img.srcset.split(',');
          // Get the largest image from srcset
          const largestEntry = srcsetEntries[srcsetEntries.length - 1]?.trim();
          if (largestEntry) {
            imageUrl = largestEntry.split(' ')[0];
          }
        }

        // Skip if already prefetched
        if (this.prefetchCache.has(imageUrl)) return;

        // Prefetch the image
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.as = 'image';
        link.href = imageUrl;
        document.head.appendChild(link);

        // Track prefetched URL
        this.prefetchCache.add(imageUrl);
      }
    }
  );
}
