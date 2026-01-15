if (!customElements.get('sb-tabbed-grouping')) {
  class SbTabbedGrouping extends HTMLElement {
    constructor() {
      super();
      this.TAB_SELECTORS = this.querySelectorAll('[data-tab-selector]');
      this.TABS = this.querySelectorAll('[data-tab-content]');
      this.VIEW_ALL_SELECTOR = this.querySelector('[data-view-all]');
    }
    connectedCallback() {
      if (this.TABS.length && this.TAB_SELECTORS.length) {
        this.TAB_SELECTORS.forEach((tab) => {
          tab.addEventListener('click', this.handleClick.bind(this, tab));
        });
      }
    }
    handleClick(tab) {
      if (tab.dataset.tabActive == 'false') {
        this.TAB_SELECTORS.forEach((t) => {
          t.setAttribute('data-tab-active', t.dataset.itemId === tab.dataset.itemId ? 'true' : 'false');
        });
        this.TABS.forEach((t) => {
          const wasActive = t.dataset.tabActive === 'true';
          t.setAttribute('data-tab-active', t.dataset.itemId === tab.dataset.itemId ? 'true' : 'false');
          // Dispatch event when a tab content becomes active
          if (!wasActive && t.dataset.tabActive === 'true') {
            this.dispatchTabContentShown(t);
          }
        });
        if (this.VIEW_ALL_SELECTOR) {
          this.VIEW_ALL_SELECTOR.setAttribute('href', tab.dataset.url);
        }
      }
    }

    /**
     * Dispatches a custom event directly on swiper-slider elements within the tab content
     * @param {HTMLElement} tabContent - The tab content element that became active
     */
    dispatchTabContentShown(tabContent) {
      const swiperSliders = tabContent.querySelectorAll('swiper-slider');
      swiperSliders.forEach((slider) => {
        const event = new CustomEvent('tab-content-shown', {
          detail: { tabContent },
          bubbles: false,
          cancelable: true,
        });
        slider.dispatchEvent(event);
      });
    }
  }
  customElements.define('sb-tabbed-grouping', SbTabbedGrouping);
}
