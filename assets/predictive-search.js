function debounce(fn, wait) {
  let t;
  return (...args) => {
    clearTimeout(t);
    t = setTimeout(() => fn.apply(this, args), wait);
  };
}

class PredictiveSearch extends HTMLElement {
  constructor() {
    super();

    this.input = this.querySelector('input[type="search"]');
    this.predictiveSearchResults = this.querySelector('#predictive-search');
    this.swipers = []; // Track Swiper instances

    this.input.addEventListener('input', debounce((event) => {
      this.onChange(event);
    }, 300).bind(this));

    window.addEventListener('resize', debounce(() => {
      this.resizeSlider();
      this.matchProductTitleHeight();
    }, 300));
  }

  onChange() {
  
    const searchTerm = this.input.value.trim();
    console.log(searchTerm);
    if (!searchTerm.length) {
      this.close();
      return;
    }

    this.getSearchResults(searchTerm);
  }

  getSearchResults(searchTerm) {
    fetch(`${routes.predictive_search_url}?q=${searchTerm}&resources[limit]=5&section_id=predictive-search`)
      .then((response) => {
        if (!response.ok) {
          var error = new Error(response.status);
          this.close();
          throw error;
        }

        return response.text();
      })
      .then((text) => {
        const resultsMarkup = new DOMParser().parseFromString(text, 'text/html')
          .querySelector('#shopify-section-predictive-search').innerHTML;
        this.predictiveSearchResults.innerHTML = resultsMarkup;
        this.updateSearchLink(searchTerm);
        this.predictiveProductSlider();
        this.matchProductTitleHeight();
        this.open();
      })
      .catch((error) => {
        this.close();
        throw error;
      });
  }

  predictiveProductSlider() {
    if (window.innerWidth < 767) return;

    document.querySelectorAll('.predictive__product--item--wrap').forEach(swiperContainer => {
      if (!swiperContainer.classList.contains('swiper-initialized')) {
        const swiperInstance = new Swiper(swiperContainer, {
          slidesPerView: 5,
          spaceBetween: 24,
          breakpoints: {
            767: { slidesPerView: 2.3, spaceBetween: 16 },
            993: { slidesPerView: 3, spaceBetween: 24 },
            1280: { slidesPerView: 4, spaceBetween: 24 },
            1440: { slidesPerView: 5, spaceBetween: 24 }
          }
        });

        this.swipers.push(swiperInstance);
      }
    });
  }

  destroySwipers() {
    this.swipers.forEach(swiper => {
      if (swiper && typeof swiper.destroy === 'function') {
        swiper.destroy(true, true);
      }
    });
    this.swipers = [];
  }

  resizeSlider() {
    if (window.innerWidth < 767) {
      this.destroySwipers();
    } else {
      this.predictiveProductSlider();
    }
  }

  matchProductTitleHeight() {
    const titles = document.querySelectorAll(
      '#predictive-search-results-list .product-content-wrapper .product-title'
    );
    
    // Reset existing inline heights
    titles.forEach(title => {
      title.style.height = 'auto';
    });

    let maxHeight = 0;
    titles.forEach(title => {
      const height = title.offsetHeight;
      if (height > maxHeight) {
        maxHeight = height;
      }
    });

    titles.forEach(title => {
      title.style.height = `${maxHeight}px`;
    });
  }


  updateSearchLink(searchTerm) {
    const searchBtns = document.querySelectorAll(
      '.search-product-items-wrapper .predictive__search--header a.btn_link.link, .search-article-items-wrapper .predictive__search--header a.btn_link.link, #predictive-search-results-list a.btn_link.link:not(.no-change)'
    );

    searchBtns.forEach(btn => {
      btn.href = `/search?q=${encodeURIComponent(searchTerm)}`;
    });
  }

  open() {
    this.predictiveSearchResults.style.display = 'block';
    document.querySelector('body').classList.add("predictive-overflow-hidden");
  }

  close() {
    this.predictiveSearchResults.style.display = 'none';
    document.querySelector('body').classList.remove("predictive-overflow-hidden");
  }
}

customElements.define('predictive-search', PredictiveSearch);
