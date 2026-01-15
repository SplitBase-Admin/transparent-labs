/**
 * TdFlavorDrawer Web Component
 * Handles slide-in drawer functionality for flavor variant selection
 * Content rendering is handled by Liquid templates
 *
 * @class TdFlavorDrawer
 * @extends HTMLElement
 */
// Ensure the element is not already defined
if (!customElements.get('sb-flavor-drawer')) {
  class TdFlavorDrawer extends HTMLElement {
    constructor() {
      super();
      this.isOpen = false;
      this.optionName = null;
      this.variantChangeUnsubscribe = null;

      // Guards to prevent duplicate work before RAF runs
      this._pendingHiddenSelectValue = null;

      // Track the trigger that opened the drawer so we update the correct product form/select
      this._activeTriggerEl = null;

      // Stable handler references (so we can remove + re-add safely)
      this._onCloseClick = this._onCloseClick.bind(this);
      this._onOverlayClick = this._onOverlayClick.bind(this);
      this._onOptionClick = this._onOptionClick.bind(this);
      this._onTriggerClick = this._onTriggerClick.bind(this);
      this._onKeyDown = this.handleKeyDown.bind(this);
      this._onRefreshed = this._onRefreshed.bind(this);
    }

    /**
     * Called when element is connected to DOM
     * Initializes component and sets up event listeners
     */
    connectedCallback() {
      this.optionName = this.getAttribute('data-option-name');
      this.moveToBody();
      this.setupTriggerListeners();
      this.subscribeToVariantChange();
      this.setupDefault();
    }

    setupDefault() {
      const selected = this.querySelector('.sb-flavor-option--selected');
      if (selected) {
        this.updateHiddenSelect(selected.dataset.value);
      }
    }

    /**
     * Called when element is disconnected from DOM
     * Cleans up event listeners
     */
    disconnectedCallback() {
      this.removeEventListeners();
      if (this.variantChangeUnsubscribe) {
        this.variantChangeUnsubscribe();
      }
    }

    /**
     * Subscribe to variant change events
     * @private
     */
    subscribeToVariantChange() {
      if (typeof subscribe !== 'undefined') {
        this.variantChangeUnsubscribe = subscribe(PUB_SUB_EVENTS.variantChange, () => {
          this.handleVariantChange();
        });
      }
    }

    /**
     * Handle variant change event by resetting up event listeners
     * @private
     */
    handleVariantChange() {
      // Re-setup trigger listeners as variants may have changed the DOM
      this.setupTriggerListeners();
    }

    /**
     * Move drawer to body to avoid positioning issues
     * @private
     */
    moveToBody() {
      if (this.parentElement !== document.body) {
        document.body.appendChild(this);
      }
    }

    /**
     * Set up listeners for trigger buttons
     * @private
     */
    setupTriggerListeners() {
      // Drawer controls (close, overlay, options, keyboard)
      const closeBtn = this.querySelector('[data-flavor-close]');
      if (closeBtn) {
        closeBtn.removeEventListener('click', this._onCloseClick);
        closeBtn.addEventListener('click', this._onCloseClick);
      }

      const overlay = this.querySelector('[data-flavor-overlay]');
      if (overlay) {
        overlay.removeEventListener('click', this._onOverlayClick);
        overlay.addEventListener('click', this._onOverlayClick);
      }

      const options = this.querySelectorAll('[data-flavor-option]');
      options.forEach((option) => {
        option.removeEventListener('click', this._onOptionClick);
        option.addEventListener('click', this._onOptionClick);
      });

      this.removeEventListener('keydown', this._onKeyDown);
      this.addEventListener('keydown', this._onKeyDown);

      // Triggers outside drawer
      const triggers = document.querySelectorAll(`[data-flavor-trigger="${this.optionName}"]`);
      triggers.forEach((trigger) => {
        trigger.removeEventListener('click', this._onTriggerClick);
        trigger.addEventListener('click', this._onTriggerClick);
      });

      this.removeEventListener('sb-flavor-drawer:refreshed', this._onRefreshed);
      this.addEventListener('sb-flavor-drawer:refreshed', this._onRefreshed);
    }

    /**
     * Remove event listeners
     * @private
     */
    removeEventListeners() {
      this.removeEventListener('keydown', this._onKeyDown);
      this.removeEventListener('sb-flavor-drawer:refreshed', this._onRefreshed);

      const closeBtn = this.querySelector('[data-flavor-close]');
      if (closeBtn) closeBtn.removeEventListener('click', this._onCloseClick);

      const overlay = this.querySelector('[data-flavor-overlay]');
      if (overlay) overlay.removeEventListener('click', this._onOverlayClick);

      this.querySelectorAll('[data-flavor-option]').forEach((option) => {
        option.removeEventListener('click', this._onOptionClick);
      });

      if (this.optionName) {
        document.querySelectorAll(`[data-flavor-trigger="${this.optionName}"]`).forEach((trigger) => {
          trigger.removeEventListener('click', this._onTriggerClick);
        });
      }
    }

    _onCloseClick(event) {
      if (event && event.preventDefault) event.preventDefault();
      this.close();
    }

    _onOverlayClick(event) {
      if (event && event.preventDefault) event.preventDefault();
      this.close();
    }

    _onOptionClick(event) {
      const value = event && event.currentTarget ? event.currentTarget.getAttribute('data-value') : null;
      if (!value) return;
      this.selectValue(value);
    }

    _onTriggerClick(event) {
      if (event && event.preventDefault) event.preventDefault();
      if (event && event.currentTarget) this._activeTriggerEl = event.currentTarget;
      this.open();
    }

    _onRefreshed() {
      // Re-bind listeners after HTML swaps without stacking
      this.setupTriggerListeners();
    }
    /**
     * Handle keyboard navigation
     * @private
     * @param {KeyboardEvent} e - Keyboard event
     */
    handleKeyDown(e) {
      if (e.key === 'Escape' && this.isOpen) {
        this.close();
      }
    }

    /**
     * Open the drawer
     * @public
     */
    open() {
      this.isOpen = true;
      this.classList.add('sb-flavor-drawer--open');
      document.body.classList.add('sb-flavor-drawer-open');

      // Focus management
      const firstOption = this.querySelector('[data-flavor-option]:not([disabled])');
      if (firstOption) {
        firstOption.focus();
      }

      // Dispatch custom event
      this.dispatchEvent(
        new CustomEvent('sb-flavor-drawer:opened', {
          bubbles: true,
          detail: { optionName: this.optionName },
        })
      );
    }

    /**
     * Close the drawer
     * @public
     */
    close() {
      this.isOpen = false;
      this.classList.remove('sb-flavor-drawer--open');
      document.body.classList.remove('sb-flavor-drawer-open');

      // Dispatch custom event
      this.dispatchEvent(
        new CustomEvent('sb-flavor-drawer:closed', {
          bubbles: true,
          detail: { optionName: this.optionName },
        })
      );
    }

    /**
     * Select a value and close drawer
     * @public
     * @param {string} value - The selected value
     */
    selectValue(value) {
      // Update visual state for options in the drawer
      const options = this.querySelectorAll('[data-flavor-option]');
      options.forEach((option) => {
        option.classList.remove('sb-flavor-option--selected');
        if (option.getAttribute('data-value') === value) {
          option.classList.add('sb-flavor-option--selected');
        }
      });

      // Update the trigger display
      this.updateTriggerDisplay(value);

      // Update hidden select for form submission
      this.updateHiddenSelect(value);

      // Dispatch selection event
      this.dispatchEvent(
        new CustomEvent('sb-flavor-drawer:selected', {
          bubbles: true,
          detail: {
            optionName: this.optionName,
            selectedValue: value,
          },
        })
      );

      this.close();
    }

    /**
     * Update the trigger button display
     * @private
     * @param {string} value - The selected value
     */
    updateTriggerDisplay(value) {
      const triggers = document.querySelectorAll(`[data-flavor-trigger="${this.optionName}"]`);
      triggers.forEach((trigger) => {
        const textElement = trigger.querySelector('.sb-flavor-selected__text');
        if (textElement) {
          textElement.textContent = value;
        }

        // Update swatch if available - get from the selected option in drawer
        const selectedOption = this.querySelector(`[data-flavor-option][data-value="${value}"]`);
        if (selectedOption) {
          const optionSwatch = selectedOption.querySelector('.sb-flavor-option__swatch');
          const triggerSwatch = trigger.querySelector('.sb-flavor-swatch');
          if (optionSwatch && triggerSwatch) {
            triggerSwatch.innerHTML = optionSwatch.innerHTML;
          }
        }

        trigger.setAttribute('data-selected-value', value);
      });
    }

    /**
     * Update hidden select for form submission
     * @private
     * @param {string} value - The selected value
     */
    updateHiddenSelect(value) {
      // Prefer the hidden select within the same product/variant-selects as the trigger that opened the drawer.
      let hiddenSelect = null;
      if (this._activeTriggerEl && this._activeTriggerEl.closest) {
        const root =
          this._activeTriggerEl.closest('variant-selects') || this._activeTriggerEl.closest('product-info') || null;
        if (root && root.querySelector) {
          hiddenSelect = root.querySelector(`.sb-flavor-hidden-select[name="options[${this.optionName}]"]`);
        }
      }

      if (!hiddenSelect) {
        hiddenSelect = document.querySelector(`.sb-flavor-hidden-select[name="options[${this.optionName}]"]`);
      }
      if (!hiddenSelect) return;

      // Dedupe: avoid repeated change dispatch for same value
      if (hiddenSelect.value === value) return;
      if (this._pendingHiddenSelectValue === value) return;
      this._pendingHiddenSelectValue = value;

      // Step 1: Remove all selected flags
      Array.from(hiddenSelect.options).forEach((option) => {
        option.selected = false;
        option.removeAttribute('selected');
      });

      // Step 2: Apply the correct one in a microtask (Safari-safe)
      requestAnimationFrame(() => {
        const options = Array.from(hiddenSelect.options);
        const selectedIndex = options.findIndex((opt) => opt.value === value);
        if (selectedIndex === -1) {
          this._pendingHiddenSelectValue = null;
          return;
        }

        const selectedOption = options[selectedIndex];
        selectedOption.selected = true;
        selectedOption.setAttribute('selected', 'selected');

        // Safari: selectedOptions/selectedIndex can desync unless set explicitly
        hiddenSelect.selectedIndex = selectedIndex;
        hiddenSelect.value = value;
        this._pendingHiddenSelectValue = null;

        // Step 3: Force Shopify event updates
        // Safari: dispatching on the OPTION is more reliable than on SELECT
        // because VariantSelects otherwise relies on target.selectedOptions[0].
        const evt = document.createEvent('Event');
        evt.initEvent('change', true, false);
        selectedOption.dispatchEvent(evt);
      });
    }
  }

  // Register the custom element
  customElements.define('sb-flavor-drawer', TdFlavorDrawer);
}
