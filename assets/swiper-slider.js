if (!customElements.get('swiper-slider')) {
  class SwiperSlider extends HTMLElement {
    constructor() {
      super();
      this.slideContainer = this.querySelector('[data-swiper]:not([data-swiper-thumbs])');
      this.slides = this.querySelectorAll('[data-swiper-slide]');
      this.sliderOptions = this.applyDefaultOptions(this.getSliderOptions());
      this.activeIndex = 0;
      this.initialized = false;
      this.resizeBound = false;
      if (this.dataset.swiperThumbs) {
        this.thumbnails = this.querySelector('[data-swiper-thumbs]');
      }
      this.boundInitializeSwiper = this.initializeSwiper.bind(this);
      this.boundSlideToIndex = this.slideToIndex.bind(this);
    }

    connectedCallback() {
      if (this.dataset.customEvent) {
        this.attachCustomListeners(this.dataset.customEvent);
      }
      // Listen for tab content visibility changes (event is dispatched directly on this element)
      this.boundHandleTabContentShown = this.handleTabContentShown.bind(this);
      this.addEventListener('tab-content-shown', this.boundHandleTabContentShown);
      if (this.slideContainer && this.slides.length > 0) {
        this.initializeSwiper();
      } else {
        console.warn('SwiperSlider - Slider or Slides Not Found');
      }
    }

    attachCustomListeners(customEvent) {
      switch (customEvent) {
        case 'reinitialize':
          this.addEventListener('reinitialize-swiper', this.boundInitializeSwiper);
          break;
        case 'slide-to-index':
          document.addEventListener('slide-to-index', this.boundSlideToIndex);
          break;
      }
    }

    disconnectedCallback() {
      window.removeEventListener('resize', this.handleResize);
      this.removeEventListener('tab-content-shown', this.boundHandleTabContentShown);
      if (this.dataset.customEvent) {
        switch (this.dataset.customEvent) {
          case 'reinitialize':
            this.removeEventListener('reinitialize-swiper', this.boundInitializeSwiper);
            break;
          case 'slide-to-index':
            document.removeEventListener('slide-to-index', this.boundSlideToIndex);
            break;
        }
      }
    }

    applyDefaultOptions(options) {
      if (options.loop === undefined) {
        options.loop = true;
      }
      if (options.speed === undefined) {
        options.speed = 400;
      }
      return options;
    }

    getSliderOptions() {
      try {
        return JSON.parse(this.dataset.swiperOptions);
      } catch (err) {
        //console.log(err);
        return {};
      }
    }

    initializeSwiper() {
      if (window.Swiper && !this.initialized) {
        this.initialized = true;
        if (this.thumbnails) {
          this.setThumbnails();
        }
        if (this.dataset.hasOwnProperty('fractionPagination')) {
          this.sliderOptions.on = {
            slideChange: this.updateFractions.bind(this),
            reachEnd: this.updateFractions.bind(this, 'reachEnd'),
          };
        }
        this.slider = new Swiper(this.slideContainer, this.sliderOptions);
        this.initializeSliderEventListeners();
        if (this.dataset.hasOwnProperty('fractionPagination')) {
          this.updateFractions();
        }
      } else if (!window.Swiper) {
        console.warn('SwiperSlider - Swiper.js not found');
      }
      this.bindResizeEvent();
    }

    bindResizeEvent() {
      if (!this.resizeBound) {
        window.addEventListener('resize', this.handleResize.bind(this));
        window.addEventListener('resize', this.updateFractions.bind(this));
        this.resizeBound = true;
      }
    }

    handleResize(e) {
      if (this.slider) {
        setTimeout(() => {
          this.slider.updateSize();
        }, 300);
      }
    }
    /**
     * Handles the tab-content-shown event to update swiper when tab becomes visible
     * @param {CustomEvent} event - The tab-content-shown event
     */
    handleTabContentShown(event) {
      // Event is dispatched directly on this swiper element, so we can update immediately
      // Update swiper size first to recalculate dimensions
      if (this.slider && this.slider.updateSize) {
        this.slider.updateSize();
      }
      // Then update fractions
      this.updateFractions();
    }

    updateFractions(e, evt) {
      const currentContainer = this.parentElement?.querySelector('.sb-swiper-pagination-current');
      const totalContainer = this.parentElement?.querySelector('.sb-swiper-pagination-total');
      if (currentContainer && totalContainer && this.slider) {
        setTimeout(() => {
          const activeIndex = this.slider.pagination.bullets.findIndex((bullet) =>
            bullet.classList.contains('swiper-pagination-bullet-active')
          );
          currentContainer.innerHTML = `${activeIndex + 1}`.padStart(2, '0');
          totalContainer.innerHTML = `${this.slider.pagination.bullets.length}`.padStart(2, '0');
        }, 100);
      }
    }

    setThumbnails() {
      const thumbsSlideContainer = this.thumbnails;
      const thumbOptions = JSON.parse(this.thumbnails.dataset.swiperOptions);
      const thumbnailsSlider = new Swiper(thumbsSlideContainer, thumbOptions);
      this.sliderOptions.thumbs = { swiper: thumbnailsSlider };
      this.sliderOptions.on = {
        slideChange: function () {
          let activeIndex = this.activeIndex;
          document.dispatchEvent(
            new CustomEvent('thumbnail-changed', {
              detail: {
                slide: this.slides[this.activeIndex],
              },
            })
          );
          this.thumbs.swiper.slideTo(activeIndex > 0 ? activeIndex - 1 : 0);
        },
      };
    }

    initializeSliderEventListeners() {
      // Add click-to-slide functionality for partners slider
      if (this.closest('[data-clickable-slides="true"]')) {
        this.addClickToSlideHandlers();
      }
    }

    /**
     * Adds click handlers to slides to enable click-to-activate functionality
     */
    addClickToSlideHandlers() {
      if (!this.slider || !this.slides.length) {
        return;
      }

      // Create a map of original slides to their indices
      const originalSlideMap = new Map();
      this.slides.forEach((slide, index) => {
        originalSlideMap.set(slide, index);
      });

      // Add click handlers to all slides (including clones in loop mode)
      const allSlides = this.slideContainer.querySelectorAll('.swiper-slide');
      allSlides.forEach((slide) => {
        slide.style.cursor = 'pointer';
        slide.addEventListener('click', (e) => {
          if (slide.classList.contains('swiper-slide-active')) {
            return;
          }

          // Get the real index - first try from the original slide map
          let realIndex = originalSlideMap.get(slide);

          // If not found in original map, try data-actual-slide-index
          if (realIndex === undefined && slide.dataset.actualSlideIndex !== undefined) {
            realIndex = parseInt(slide.dataset.actualSlideIndex);
          }

          // If still not found, try to find it by comparing with original slides
          if (realIndex === undefined) {
            for (let i = 0; i < this.slides.length; i++) {
              if (
                this.slides[i] === slide ||
                (slide.dataset.actualSlideIndex !== undefined &&
                  this.slides[i].dataset.actualSlideIndex === slide.dataset.actualSlideIndex)
              ) {
                realIndex = i;
                break;
              }
            }
          }

          // Use slideTo with the real index - Swiper handles loop mode automatically
          // In loop mode, we can use slideToLoop for better handling
          if (realIndex !== undefined && realIndex >= 0) {
            if (this.sliderOptions.loop && typeof this.slider.slideToLoop === 'function') {
              this.slider.slideToLoop(realIndex);
            } else {
              this.slider.slideTo(realIndex);
            }
          }
        });
      });
    }

    /**
     * Slides to a specific index when receiving a document event
     * @param {CustomEvent} event - The custom event containing slide index details
     */
    slideToIndex(event) {
      const { index, speed, sliderId } = event.detail || {};

      // If sliderId is specified, only respond to events meant for this slider
      // Also check if slider is initialized
      if ((sliderId && this.dataset.sliderId !== sliderId) || !this.slider || !this.initialized) {
        return;
      }

      this.performSlideToIndex(index, speed);
    }

    /**
     * Performs the actual slide operation
     * @param {number} index - The target slide index (1-based from Liquid forloop.index)
     * @param {number} speed - The slide transition speed
     */
    performSlideToIndex(index, speed) {
      if (typeof index === 'number' && index > 0 && index <= this.slides.length) {
        let slidesIndex = undefined;
        let foundSlide = null;

        // Find the slide by data-actual-slide-index
        // Note: index is 1-based (from Liquid forloop.index), but we need to find the actual Swiper slide
        for (let i = 0; i < this.slider.slides.length; i++) {
          const slide = this.slider.slides[i];
          const actualIndex = parseInt(slide.dataset.actualSlideIndex, 10);
          if (!isNaN(actualIndex) && actualIndex === index) {
            slidesIndex = i;
            foundSlide = slide;
            break;
          }
        }

        const slideSpeed = speed !== undefined ? speed : this.sliderOptions.speed;

        // Use slideToLoop if loop mode is enabled and available
        if (this.sliderOptions.loop && typeof this.slider.slideToLoop === 'function') {
          // In loop mode, slideToLoop needs the real index (0-based from original slides)
          // Always convert from 1-based index to 0-based
          const realIndex = index - 1; // Convert from 1-based (Liquid forloop.index) to 0-based

          // Use slideToLoop which handles loop mode correctly
          this.slider.slideToLoop(realIndex, slideSpeed);
        } else if (slidesIndex !== undefined) {
          // Non-loop mode: use the Swiper slide index directly
          this.slider.slideTo(slidesIndex, slideSpeed);
        } else {
          // Fallback: convert from 1-based to 0-based
          const zeroBasedIndex = index - 1;
          this.slider.slideTo(zeroBasedIndex, slideSpeed);
        }
      }
    }
  }
  customElements.define('swiper-slider', SwiperSlider);
}
