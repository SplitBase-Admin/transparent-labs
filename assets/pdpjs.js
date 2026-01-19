!function(){
  // ==== Configuration ====
  const CONFIG = {
    TEST_ID: "SB-082DM",
    TEST_NAME: "PDP Carousel Image Test",
    BUCKET: "Variation 1",

    STYLES: {
      FONT: "font-weight: 900; font-size: 11px",
      SUCCESS: "background:rgb(21, 83, 65); color: #FFFFFF",
      WARNING: "background:rgb(251, 200, 174); color: #F62817"
    },

    SELECTORS: {
      BODY: "body",
      TARGET: "media-gallery.product__column-sticky",
      TAG: "media-gallery.product__column-sticky li > .sb-product-tags",
      FLAVOR: "span.sb-flavor-selected__text",
      SIZE: ".product-form__input--pill input[type=radio]:checked+label span.form__option-label--wrap",
      PRODUCT_IMAGE: "media-gallery.product__column-sticky li:first-child img",
    },

    DATA: {
      '/products/creatine-hmb': {
        images: [{
          src: 'TL_CreatineHMB_30S_U_1_2',
          product: true,
          png: true,
        }, 
        {
          src: '1-unflav',
          flavore: true,
        }, 
        {
          src: 'hmb-3'
        }, {
          src: 'hmb-5',
        }, {
          src: 'hmb-4',
        },{
          src: 'hmb-2'
        },],
        ingredient: [
          // 30sv variants
          { flavored: 'Sour Grape', size: '30sv', src: 'grape' },
          { flavored: 'Orange', size: '30sv', src: 'orange' },
          { flavored: 'Peach Rings', size: '30sv', src: 'peach-rings' },
          { flavored: 'Pineapple', size: '30sv', src: 'pineapple' },
          { flavored: 'Strawberry Lemonade', size: '30sv', src: 'strawberry-lemonade' },
          { flavored: 'Peach Mango', size: '30sv', src: 'peach-mango' },
          { flavored: 'Watermelon', size: '30sv', src: 'watermelon' },
          { flavored: 'Tropical Punch', size: '30sv', src: 'tropical-punch' },
          { flavored: 'Fruit Punch', size: '30sv', src: 'fruit-punch' },
          { flavored: 'Unflavored', size: '30sv', src: 'unflav' },
          { flavored: 'Black Cherry', size: '30sv', src: 'black-cherry' },
          { flavored: 'Blue Raspberry', size: '30sv', src: 'blue-ras' },
          { flavored: 'Hawaiian Splash', size: '30sv', src: 'hawaiian-splash' },
          
          // 60sv variants
          { flavored: 'Blue Raspberry', size: '60sv', src: 'blue-ras-60' },
          { flavored: 'Unflavored', size: '60sv', src: 'unflav-60' },
          
          // Travel Pack (15 ct.) variants
          { flavored: 'Blue Raspberry', size: 'Travel Pack (15 ct.)', src: 'blue-ras-15' },
          { flavored: 'Unflavored', size: 'Travel Pack (15 ct.)', src: 'unflav-15' }
        ]
      },
      '/products/whey-protein-isolate': {
        images: [{
          src: 'TL_WPI_30S_MC_1_3_i1',
          product: true,
          png: true,
        }, {
          src: '1-chocolate',
          flavore: true,
        }, {
          src: 'whey-4',
        }, {
          src: 'whey-2'
        }, {
          src: 'whey-3',
        }],
        ingredient: [{
          flavored: 'Vanilla Peppermint',
          size: '2LB',
          src: 'vanilla-peppermint'
        }, {
          flavored: 'Chocolate Chip Banana Bread',
          size: '2LB',
          src: 'banana-bread'
        }, {
          flavored: 'Milk Chocolate',
          size: '2LB',
          src: 'chocolate'
        }, {
          flavored: 'Milk Chocolate',
          size: '4LB',
          src: 'chocolate-55'
        }, {
          flavored: 'Chocolate Peanut Butter',
          size: '2LB',
          src: 'choco-pb'
        }, {
          flavored: 'Chocolate Peanut Butter',
          size: '4LB',
          src: 'choco-pb-55'
        }, {
          flavored: 'Chocolate Coconut',
          size: '2LB',
          src: 'coconut'
        }, {
          flavored: 'Dark Chocolate',
          size: '2LB',
          src: 'dark-choco'
        }, {
          flavored: 'Cinnamon French Toast',
          size: '2LB',
          src: 'french-toast'
        }, {
          flavored: 'Mint Chocolate Chip',
          size: '2LB',
          src: 'mint'
        }, {
          flavored: 'Mocha',
          size: '2LB',
          src: 'mocha'
        }, {
          flavored: 'Neapolitan',
          size: '2LB',
          src: 'neapolitan'
        }, {
          flavored: 'Oatmeal Chocolate Chip Cookie',
          size: '2LB',
          src: 'oatmeal'
        }, {
          flavored: 'Oatmeal Chocolate Chip Cookie',
          size: '4LB',
          src: 'oatmeal-55'
        }, {
          flavored: 'Blueberry Pancakes',
          size: '2LB',
          src: 'pancakes'
        }, {
          flavored: 'Butterscotch Pecan',
          size: '2LB',
          src: 'pecan'
        }, {
          flavored: 'Salted Chocolate Caramel',
          size: '2LB',
          src: 'salted-caramel'
        }, {
          flavored: `S'mores`,
          size: '2LB',
          src: 'smores'
        }, {
          flavored: 'Strawberry Milkshake',
          size: '2LB',
          src: 'strawberry'
        }, {
          flavored: 'Unflavored',
          size: '2LB',
          src: 'unflav-2lb'
        }, {
          flavored: 'Unflavored',
          size: '4LB',
          src: 'unflav-55'
        }, {
          flavored: 'French Vanilla',
          size: '2LB',
          src: 'vanilla'
        }, {
          flavored: 'French Vanilla',
          size: '4LB',
          src: 'vanilla-55'
        }, {
          flavored: 'Vanilla Peanut Butter',
          size: '2LB',
          src: 'vanilla-pb'
        },
        {
          flavored: 'Milk and Cookies',
          size: '2LB',
          src: 'milk'
        }]
      },
      '/products/protein-pancakes': {
        images: [
          {
            src: 'TL_Protein_Pancake_Bag_Buttermilk_01_Front',  // Main product image
            product: true,
            png: true,
          },
          {
            src: 'Protein_Pancakes_-_Buttermilk_SFP',
            png: true,
          },
          {
            src: 'Slide_2_-_Static',
            png: true,
          },
          {
            src: '3_78_1',
            png: true,
          },
          {
            src: 'TL-proteinPancakes-11',
            png: true,
          },
          {
            src: 'https://cdn.shopify.com/videos/c/o/v/4cf347f13b0146ea8e6ae4c768182df1.mp4',  // Video
            video: true,
            poster: 'https://www.transparentlabs.com/cdn/shop/files/preview_images/TL-proteinPancakes-25_1.jpg?v=1765390735&width=600',
          },
        ],
        ingredient: [
          {
            flavored: 'Buttermilk',
            size: '1 Pouch',
            src: 'buttermilk'
          },
          {
            flavored: 'Buttermilk',
            size: '3 Pouches',
            src: 'buttermilk-3'
          }
        ]
      }
    },


    TIMEOUT: 30000,                // Max wait time for selectors/variables
    INTERVAL: 25,                  // Interval for polling checks
    OBSERVER: true                 // Toggle MutationObserver logic
  };

  // ==== Styled Console Logging ====
  const STYLE = CONFIG.STYLES;
  const log = {
    success: (msg) => console.log(`%c ${msg} `, `${STYLE.SUCCESS};${STYLE.FONT}`),
    warning: (msg) => console.warn(`%c ${msg} `, `${STYLE.WARNING};${STYLE.FONT}`),

    start() {
      this.success(`==== ${CONFIG.TEST_ID} START ====`);
      this.success(`ID: ${CONFIG.TEST_ID} \n NAME: ${CONFIG.TEST_NAME} \n BUCKET: ${CONFIG.BUCKET} `);
    },
    end() {
      this.success(`==== ${CONFIG.TEST_ID} END ====`);
    },
    fail(error) {
      this.warning(`ERROR => ${error.message}`);
      this.warning(`${CONFIG.TEST_ID} x x x x x Failed`);
    }
  };

  // ==== Test bucket log ====
  console.log(`%c [${CONFIG.TEST_ID}] Bucketed into: ${CONFIG.BUCKET}`, `${STYLE.SUCCESS};${STYLE.FONT}`);

  // ==== Utility Functions ====
  const utils = {
    q: (s, e = document) => e.querySelector(s),
    qs: (s, e = document) => e.querySelectorAll(s),
    eh: (el, pos, html) => el.insertAdjacentHTML(pos, html),
    ie: (el, pos, node) => el.insertAdjacentElement(pos, node),

    wait(selector, cb, {
      multiple = false,
      isVariable = false,
      minCount = 1,
      timeout = CONFIG.TIMEOUT,
      interval = CONFIG.INTERVAL,
      el = document
    } = {}) {
      const start = Date.now();
      (function check() {
        const result = isVariable
          ? window[selector]
          : (multiple ? utils.qs(selector, el) : utils.q(selector, el));

        const isReady = isVariable
          ? typeof result !== 'undefined'
          : (multiple ? result.length >= minCount : !!result);

        if (isReady) cb(result);
        else if (Date.now() - start < timeout) setTimeout(check, interval);
      })();
    },

    debounce(fn, delay) {
      let timeout;
      return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => fn.apply(this, args), delay);
      };
    },

    cdn: (n, ext = 'jpg') => `https://cdn.shopify.com/s/files/1/0866/7664/files/${n}.${ext}`,

    injectStyle(id, css) {
      if (document.getElementById(id)) return;
      const style = document.createElement("style");
      style.id = id;
      style.setAttribute("type","text/css");
      style.textContent = css;
      document.head.appendChild(style);
    },

    loadScript(src, cb) {
      const script = document.createElement("script");
      script.src = src;
      script.onload = cb;
      document.body.appendChild(script);
    },
    loadCSS(href) {
      if (document.querySelector(`link[href="${href}"]`)) return;
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = href;
      document.head.appendChild(link);
    }
  };

  // ==== Main Test Logic ====
  const test = {
    init() {
      this.injectCSS();   // Inject test-specific styles
      this.main();        // Run main test logic
      if (CONFIG.OBSERVER) this.observeMutations(); // Optional DOM observer
    },

    injectCDN(callback) {
      utils.loadCSS("https://unpkg.com/swiper/swiper-bundle.min.css");
      utils.loadScript("https://unpkg.com/swiper/swiper-bundle.min.js", callback);
    },
    
    injectCSS() {
      const isTestProduct = CONFIG.DATA[window.location.pathname];
  
      const css = `
        ${isTestProduct ? `
        ${CONFIG.SELECTORS.TARGET} {
          display: none !important;
        }
        ` : ''}
        .r-product-images-gallery {
          display: flex;
          flex-direction: column;
          overflow: hidden;
          gap: 44px;
        }
        .r-pig-main .swiper-slide {
          border-radius: 16px;
          overflow: hidden;
          background: #f7f8fa;
          display:flex;
        }
        .r-pig-main, .r-pig-thumb {
          width: 100%;
        }
        .r-pig-main,
        .r-pig-main .swiper-wrapper,
        .r-pig-main .swiper-slide {
          touch-action: pan-x pinch-zoom !important;
        }
        .r-pig-main .swiper-pagination-bullet {
          background: #ccc;
          opacity: 1;
          width: 8px;
          height: 8px;
        }
        .r-pig-main .swiper-pagination-bullet-active {
          background: #000;
        }
        .r-pig-thumb {
          width: calc(100% - 50px) !important;
          padding: 0 40px !important;
        }
        .r-pig-thumb .swiper-slide {
          width: 120px;
          height: 120px;
          cursor: pointer;
          border: 1px solid #FFF;
        }
        .r-pig-thumb .swiper-slide-thumb-active {
          border: 1px solid rgba(17, 19, 20, 0.60);
        }
        .r-thumb-prev, .r-thumb-next {
          background: #FFF;
          width: 40px;
          color: #000;
          height: 120px;
          display: flex;
          cursor: pointer;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 10;
          align-items: center;
        }
        .r-thumb-prev { left: 0; }
        .r-thumb-next {
          right: 0;
          justify-content: flex-end;
        }
        .r-thumb-prev svg, .r-thumb-next svg {
          width: 16px;
          height: 16px;
        }
        .r-pig-main-tag {
          position: absolute;
          right: 24px;
          top: 24px;
          display: flex;
          padding: 0 8px 2px 8px;
          justify-content: center;
          align-items: center;
          gap: 8px;
          border-radius: 1.652px;
          // background: #1B73B3;
          z-index: 2;
          color: #FFF;
          font-size: 14px;

        }
        .sb-product-tags {
          position:unset;  
        }
        
        
        .r-product-images-gallery .swiper-slide img {
          width: 100%;
        }
        @media only screen and (min-width: 768px) {
          /* Desktop styles */
          .r-swiper-pagination {
            display: none !important;
          }
        }
        @media only screen and (max-width: 767px) {
          /* Mobile styles */
          .r-pig-thumb, .r-pig-main-tag {
            display: none !important;
          }
          .r-swiper-pagination {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 16px;
          }
          .r-pig-main {
            width: 100% !important;
          }
          .r-pig-main .swiper-slide {
            width: 80% !important;
            border-radius: 6px;
          }
        }
        @supports (-webkit-touch-callout: none) {
          @media screen and (max-width: 768px) {
            /* iOS-specific styles */
          }
        }

        /* NEW: Video Styles */
          .r-pig-main .swiper-slide video,
          .r-pig-thumb .swiper-slide video {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          
          .r-pig-main .swiper-slide video {
            border-radius: 16px;
          }
          
          .r-pig-thumb .swiper-slide video {
            cursor: pointer;
          }
          
          .r-lightbox-content video {
            max-width: 100%;
            max-height: 90vh;
            object-fit: contain;
            border-radius: 8px;
          }
          

          
          /* Video play icon overlay for thumbnails */
          .r-pig-thumb .swiper-slide.has-video {
            position: relative;
          }

          .r-pig-main .swiper-slide[data-is-video="true"]::after {
            content: '';
            position: absolute;
            bottom: 20px;
            left: 20px;
            width: 40px;
            height: 40px;
            background: #fff;
            border-radius: 50%;
            pointer-events: none;
          }

          .r-pig-main .swiper-slide[data-is-video="true"]::before {
            content: '';
            position: absolute;
            bottom: 31px;
            left: 35px;
            width: 0;
            height: 0;
            border-left: 12px solid black;
            border-top: 8px solid transparent;
            border-bottom: 8px solid transparent;
            pointer-events: none;
            z-index: 1;
          }
          
          .r-pig-thumb .swiper-slide.has-video::after {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 40px;
            height: 40px;
            background: rgba(0, 0, 0, 0.6);
            border-radius: 50%;
            pointer-events: none;
          }
          
          .r-pig-thumb .swiper-slide.has-video::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 52%;
            transform: translate(-50%, -50%);
            width: 0;
            height: 0;
            border-left: 12px solid white;
            border-top: 8px solid transparent;
            border-bottom: 8px solid transparent;
            pointer-events: none;
            z-index: 1;
          }
          
          @media only screen and (max-width: 767px) {
            .r-pig-main .swiper-slide video {
              border-radius: 6px;
            }
          }

          .r-lightbox {
          display: none;
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background:#f7f8fa;
          z-index: 9999;
          align-items: center;
          justify-content: center;
        }
        .r-lightbox.active {
          display: flex;
        }
        .r-lightbox-content {
          position: relative;
          max-width: 90%;
          max-height: 90vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .r-lightbox-image {
          max-width: 100%;
          max-height: 90vh;
          object-fit: contain;
          border-radius: 8px;
        }
        .r-lightbox-close {
          position: absolute;
          top: 20px;
          right: 20px;
          width: 40px;
          height: 40px;
          background: rgba(255, 255, 255, 0.1);
          border: none;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.3s;
          z-index: 10001;
        }
        .r-lightbox-close:hover {
          background: rgba(255, 255, 255, 0.2);
        }
        .r-lightbox-close svg {
          width: 24px;
          height: 24px;
          stroke: black;
        }
        .r-lightbox-nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 50px;
          height: 50px;
          background: rgba(255, 255, 255, 1);
          border: none;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.3s;
          z-index: 10000;
        }
        .r-lightbox-nav:hover {
          background: rgba(255, 255, 255, 0.2);
        }
        .r-lightbox-nav.disabled {
          opacity: 0.3;
          cursor: not-allowed;
        }
        .r-lightbox-prev {
          left: 20px;
        }
        .r-lightbox-next {
          right: 20px;
        }
        .r-lightbox-nav svg {
          width: 24px;
          height: 24px;
          fill: #000;
        }
        .r-lightbox-counter {
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          color: white;
          background: rgba(0, 0, 0, 0.5);
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 14px;
        }
        
        /* Make thumbnails clickable */
        .r-pig-thumb .swiper-slide {
          cursor: zoom-in;
        }

        .r-lightbox-content {
          position: relative;
          max-width: 90%;
          max-height: 90vh;
          display: flex;
          align-items: center;
          justify-content: center;
          touch-action: pan-y pinch-zoom;
          user-select: none;
          cursor: grab; /* Show grab cursor by default */
        }
        
        .r-lightbox-content.dragging {
          cursor: grabbing;
        }
        
        .r-lightbox-image {
          max-width: 100%;
          max-height: 90vh;
          object-fit: contain;
          border-radius: 8px;
          pointer-events: none;
          transition: transform 0.1s ease-out; /* Smooth movement */
        }
        
        @media only screen and (max-width: 767px) {
          .r-lightbox-nav {
            width: 40px;
            height: 40px;
          }
          .r-lightbox-prev {
            left: 10px;
          }
          .r-lightbox-next {
            right: 10px;
          }
          .r-lightbox-close {
            top: 10px;
            right: 10px;
          }
        }
      `;
      // Use CONFIG.TEST_ID as unique style element ID
      utils.injectStyle(CONFIG.TEST_ID, css);
    },

    main() {
      const data = CONFIG.DATA[window.location.pathname];
      
      const SELECTORS = CONFIG.SELECTORS;

      // Add this check early - if no data for this product, exit
      if (!data) {
        console.log(`${CONFIG.TEST_ID}: No configuration found for ${window.location.pathname}`);
        return;
      }
      
      utils.wait(SELECTORS.TARGET, (el) => {
        if(el && !utils.q('.r-product-images-gallery')) {
          // Helper function to generate media HTML
          const generateMediaHTML = (image, isThumb = false) => {
            // Check if it's a video by looking for video flag
            if (image.video) {
              // Use poster directly if it's a full URL, otherwise use CDN helper
              const posterAttr = image.poster 
                ? `poster="${image.poster.startsWith('http') ? image.poster : utils.cdn(image.poster, 'jpg')}"` 
                : '';
              return `<video 
                ${isThumb ? '' : ''} 
                playsinline 
                muted 
                loop
                preload="metadata"
                ${posterAttr}
                class="${(image.product ? 'r-product-image-' + (isThumb ? 'thumb' : 'main') : '') + (image.flavore ? ' r-flavore-image-' + (isThumb ? 'thumb' : 'main') : '')}"
              >
                <source src="${image.src}" type="video/mp4">
                Your browser does not support the video tag.
              </video>`;
            } else {
              // Generate image tag
              return `<img 
                loading="lazy" 
                class="${(image.product ? 'r-product-image-' + (isThumb ? 'thumb' : 'main') : '') + (image.flavore ? ' r-flavore-image-' + (isThumb ? 'thumb' : 'main') : '')}" 
                src="${utils.cdn(image.src, image.png ? 'png' : 'jpg')}"
              >`;
            }
          };

          utils.eh(el, "beforebegin", `<div class="r-product-images-gallery">
            <div class="swiper r-pig-main">
              <div class="swiper-wrapper">
                ${data.images.map((image, index) => `<div class="swiper-slide" data-index="${index}" data-is-video="${!!image.video}">
                  ${generateMediaHTML(image, false)}
                </div>`).join('')}
              </div>
              <div class="r-swiper-pagination"></div>
            </div>

            <div class="swiper r-pig-thumb">
              <div class="swiper-wrapper">
                ${data.images.map((image, index) => `<div class="swiper-slide${image.video ? ' has-video' : ''}" data-index="${index}">
                  ${generateMediaHTML(image, true)}
                </div>`).join('')}
              </div>

              <div class="r-thumb-prev">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <g clip-path="url(#clip0_30_4302)">
                    <path d="M11.7406 0.128113C11.875 0.128113 12.0125 0.181238 12.1156 0.284363C12.3219 0.490613 12.3219 0.828113 12.1156 1.03436L5.05625 8.09374L12.0125 15.05C12.2188 15.2562 12.2188 15.5937 12.0125 15.8C11.8063 16.0062 11.4688 16.0062 11.2625 15.8L3.92813 8.46874C3.72188 8.26249 3.72188 7.92499 3.92813 7.71874L11.3625 0.284363C11.4687 0.178113 11.6031 0.128113 11.7406 0.128113Z" fill="#111314" fill-opacity="0.6"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_30_4302">
                      <rect width="16" height="16" fill="white" transform="matrix(0 1 1 0 0 0)"/>
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div class="r-thumb-next">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <g clip-path="url(#clip0_30_4304)">
                    <path d="M4.25939 0.128113C4.12502 0.128113 3.9875 0.181238 3.88437 0.284363C3.67812 0.490613 3.67812 0.828113 3.88437 1.03436L10.9437 8.09374L3.9875 15.05C3.78125 15.2562 3.78125 15.5937 3.9875 15.8C4.19375 16.0062 4.53125 16.0062 4.7375 15.8L12.0719 8.46874C12.2781 8.26249 12.2781 7.92499 12.0719 7.71874L4.6375 0.284363C4.53125 0.178113 4.39689 0.128113 4.25939 0.128113Z" fill="#111314" fill-opacity="0.6"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_30_4304">
                      <rect width="16" height="16" fill="white" transform="translate(16) rotate(90)"/>
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>

            <!-- Lightbox -->
            <div class="r-lightbox">
              <button class="r-lightbox-close" aria-label="Close lightbox">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
              
              <button class="r-lightbox-nav r-lightbox-prev" aria-label="Previous image">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
                </svg>
              </button>
              
              <div class="r-lightbox-content">
                <!-- This will be dynamically populated with img or video -->
              </div>
              
              <button class="r-lightbox-nav r-lightbox-next" aria-label="Next image">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
                </svg>
              </button>
              
              <div class="r-lightbox-counter">
                <span class="r-lightbox-current">1</span> / <span class="r-lightbox-total">${data.images.length}</span>
              </div>
            </div>
          </div>`);
          
          // Initialize Swiper
          utils.wait('Swiper', (Swiper) => {
            const rThumbSwiper = new Swiper(".r-pig-thumb", {
              spaceBetween: 24,
              slidesPerView: "auto",
              watchSlidesProgress: true,
              navigation: {
                nextEl: ".r-thumb-next",
                prevEl: ".r-thumb-prev",
              },
            });
          
            const mainSwiper = new Swiper(".r-pig-main", {
              slidesPerView: 'auto',
              spaceBetween: 16,
              thumbs: {
                swiper: rThumbSwiper,
              },
              pagination: {
                el: ".r-swiper-pagination",
                clickable: true,
              },
              on: {
                slideChange: function() {
                  // Pause all videos
                  const videos = document.querySelectorAll('.r-pig-main video');
                  videos.forEach(video => video.pause());
                  
                  // Play video on active slide if it exists
                  const activeSlide = this.slides[this.activeIndex];
                  const activeVideo = activeSlide.querySelector('video');
                  // if (activeVideo) {
                  //   activeVideo.play().catch(e => console.log('Video autoplay prevented:', e));
                  // }
                }
              }
            });

            // Auto-play first slide video if exists
            const firstSlide = mainSwiper.slides[0];
            const firstVideo = firstSlide?.querySelector('video');
            if (firstVideo) {
              firstVideo.play().catch(e => console.log('Video autoplay prevented:', e));
            }

            // Initialize lightbox with video support
            this.initLightbox(data.images, mainSwiper);
          }, { isVariable: true });
          
          utils.wait(SELECTORS.TAG, (tag) => {
            const main = utils.q('.r-pig-main .swiper-slide:first-child');
            if(main && !utils.q('.r-pig-main-tag')) {
              utils.eh(main, "afterbegin", `<div class="r-pig-main-tag">${tag.outerHTML}</div>`);
            }
          });
        }
      });
    },

    initLightbox(images, mainSwiper) {
      const lightbox = utils.q('.r-lightbox');
      const lightboxContent = utils.q('.r-lightbox-content');
      const lightboxClose = utils.q('.r-lightbox-close');
      const lightboxPrev = utils.q('.r-lightbox-prev');
      const lightboxNext = utils.q('.r-lightbox-next');
      const lightboxCurrent = utils.q('.r-lightbox-current');
      let currentIndex = 0;

      // Touch/Swipe variables
      let touchStartX = 0;
      let touchEndX = 0;
      let touchStartY = 0;
      let touchEndY = 0;
      const minSwipeDistance = 50; // Minimum distance for a swipe

      // Function to create media element (image or video)
      const createMediaElement = (image) => {
        if (image.video) {
          const video = document.createElement('video');
          video.className = 'r-lightbox-image';
          video.controls = true;
          video.autoplay = true;
          video.loop = true;
          video.playsInline = true;
          
          // Add poster if available - handle full URLs
          if (image.poster) {
            video.poster = image.poster.startsWith('http') 
              ? image.poster 
              : utils.cdn(image.poster, 'jpg');
          }
          
          const source = document.createElement('source');
          source.src = image.src;
          source.type = 'video/mp4';
          video.appendChild(source);
          return video;
        } else {
          const img = document.createElement('img');
          img.className = 'r-lightbox-image';
          img.src = utils.cdn(image.src, image.png ? 'png' : 'jpg');
          img.alt = 'Product image';
          return img;
        }
      };

      // Function to open lightbox
      const openLightbox = (index) => {
        currentIndex = index;
        
        // Clear previous content
        lightboxContent.innerHTML = '';
        
        // Add new media element
        const mediaElement = createMediaElement(images[index]);
        lightboxContent.appendChild(mediaElement);
        
        lightbox.classList.add('active');
        lightboxCurrent.textContent = index + 1;
        document.body.style.overflow = 'hidden';
        
        // Pause main carousel videos
        const mainVideos = utils.qs('.r-pig-main video');
        mainVideos.forEach(v => v.pause());
        
        updateNavButtons();
      };

      // Function to close lightbox
      const closeLightbox = () => {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
        
        // Pause lightbox video
        const lightboxVideo = lightboxContent.querySelector('video');
        if (lightboxVideo) {
          lightboxVideo.pause();
        }
        
        // Resume main carousel video if on video slide
        const activeSlide = mainSwiper.slides[mainSwiper.activeIndex];
        const activeVideo = activeSlide?.querySelector('video');
        // if (activeVideo) {
        //   activeVideo.play().catch(e => console.log('Video play prevented:', e));
        // }
      };

      // Function to navigate images
      const navigateImage = (direction) => {
        // Pause current video if exists
        const currentVideo = lightboxContent.querySelector('video');
        if (currentVideo) {
          currentVideo.pause();
        }
        
        currentIndex += direction;
        if (currentIndex < 0) currentIndex = images.length - 1;
        if (currentIndex >= images.length) currentIndex = 0;
        
        // Clear and add new media
        lightboxContent.innerHTML = '';
        const mediaElement = createMediaElement(images[currentIndex]);
        lightboxContent.appendChild(mediaElement);
        
        lightboxCurrent.textContent = currentIndex + 1;
        updateNavButtons();
      };

      // Update navigation button states
      const updateNavButtons = () => {
        // Optional: disable at boundaries
        // lightboxPrev.classList.toggle('disabled', currentIndex === 0);
        // lightboxNext.classList.toggle('disabled', currentIndex === images.length - 1);
      };

      // Handle swipe gesture
      const handleSwipe = () => {
        const swipeDistanceX = touchEndX - touchStartX;
        const swipeDistanceY = Math.abs(touchEndY - touchStartY);
        
        // Only process horizontal swipes (ignore if vertical swipe is dominant)
        if (Math.abs(swipeDistanceX) > minSwipeDistance && Math.abs(swipeDistanceX) > swipeDistanceY) {
          if (swipeDistanceX > 0) {
            // Swiped right -> go to previous image
            navigateImage(-1);
          } else {
            // Swiped left -> go to next image
            navigateImage(1);
          }
        }
      };

      // Touch event handlers
      const handleTouchStart = (e) => {
        touchStartX = e.changedTouches[0].screenX;
        touchStartY = e.changedTouches[0].screenY;
      };

      const handleTouchMove = (e) => {
        touchEndX = e.changedTouches[0].screenX;
        touchEndY = e.changedTouches[0].screenY;
      };

      const handleTouchEnd = () => {
        handleSwipe();
      };

      // Mouse drag event handlers (for desktop)
      let isDragging = false;
      let mouseStartX = 0;
      let mouseStartY = 0;

      const handleMouseDown = (e) => {
        // Don't start drag on buttons or video controls
        if (e.target.closest('button, video')) return;
        
        isDragging = true;
        mouseStartX = e.clientX;
        mouseStartY = e.clientY;
        lightboxContent.style.cursor = 'grabbing';
      };

      const handleMouseMove = (e) => {
        if (!isDragging) return;
        touchEndX = e.clientX;
        touchEndY = e.clientY;
      };

      const handleMouseUp = (e) => {
        if (!isDragging) return;
        isDragging = false;
        lightboxContent.style.cursor = '';
        
        touchStartX = mouseStartX;
        touchStartY = mouseStartY;
        touchEndX = e.clientX;
        touchEndY = e.clientY;
        
        handleSwipe();
      };

      // Click thumbnail to open lightbox
      // const thumbnails = utils.qs('.r-pig-thumb .swiper-slide');
      // thumbnails.forEach((thumb, index) => {
      //   thumb.addEventListener('click', () => openLightbox(index));
      // });

      // Click main image/video to open lightbox
      const mainSlides = utils.qs('.r-pig-main .swiper-slide');
      mainSlides.forEach((slide, index) => {
        const media = slide.querySelector('img, video');
        if (media) {
          media.style.cursor = 'zoom-in';
          media.addEventListener('click', () => openLightbox(index));
        }
      });

      // Close button
      lightboxClose.addEventListener('click', closeLightbox);

      // Navigation buttons
      lightboxPrev.addEventListener('click', () => navigateImage(-1));
      lightboxNext.addEventListener('click', () => navigateImage(1));

      // Close on background click
      lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox();
      });

      // Touch events for mobile swipe
      lightboxContent.addEventListener('touchstart', handleTouchStart, { passive: true });
      lightboxContent.addEventListener('touchmove', handleTouchMove, { passive: true });
      lightboxContent.addEventListener('touchend', handleTouchEnd, { passive: true });

      // Mouse events for desktop drag
      lightboxContent.addEventListener('mousedown', handleMouseDown);
      lightboxContent.addEventListener('mousemove', handleMouseMove);
      lightboxContent.addEventListener('mouseup', handleMouseUp);
      lightboxContent.addEventListener('mouseleave', () => {
        if (isDragging) {
          isDragging = false;
          lightboxContent.style.cursor = '';
        }
      });

      // Keyboard navigation
      document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;
        
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') navigateImage(-1);
        if (e.key === 'ArrowRight') navigateImage(1);
      });
    },

    observeMutations() {
      const observer = new MutationObserver(utils.debounce(() => {
        const data = CONFIG.DATA[window.location.pathname];
        const productImageMain = utils.q('.r-product-image-main');
        const productImageThumb = utils.q('.r-product-image-thumb');
        const flavoreImageMain = utils.q('.r-flavore-image-main');
        const flavoreImageThumb = utils.q('.r-flavore-image-thumb');
        const flavor = utils.q(CONFIG.SELECTORS.FLAVOR);
        const size = utils.q(CONFIG.SELECTORS.SIZE);
        const productImage = utils.q(CONFIG.SELECTORS.PRODUCT_IMAGE);
        
        if(flavor && size && data) {
          const obj = data.ingredient.find(i => i.flavored === flavor.textContent && i.size === size.textContent);
          
          // Check if obj exists before accessing its properties
          if(obj && flavoreImageMain && flavoreImageThumb) {
            const newSrc = utils.cdn('1-'+obj.src);
            if(flavoreImageMain.src !== newSrc) {
              flavoreImageMain.src = newSrc;
              flavoreImageThumb.src = newSrc;
            }
          }
        }
        
        if(productImage && data && productImageMain && productImage.src !== productImageMain.src) {
          productImageMain.src = productImage.src;
          productImageThumb.src = productImage.src;
        }
      }, 100));

      observer.observe(document, {
        childList: true,
        subtree: true,
        attributes: true
      });

      this.observer = observer;
    },

    destroy() {
      if (this.observer) this.observer.disconnect();
      const styleEl = document.getElementById(CONFIG.TEST_ID);
      if (styleEl) styleEl.remove();
    }
  };

  // ==== Bootstrapping the Test ====
  utils.wait(CONFIG.SELECTORS.BODY, () => {
    try {
      log.start();   // Log bucket and test info
      test.init();   // Run test
      log.end();     // Log completion

      test.injectCDN(() => {
        test.init();
        log.end();
      });
    } catch (err) {
      log.fail(err); // Log any error
    }
  });
}();