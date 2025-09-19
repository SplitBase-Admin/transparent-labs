// Set to true to enable console logs
window.fromAbTesting = false;
window.showErrors = false;

document.addEventListener("DOMContentLoaded", (event) => {
  
  if (window.showErrors) {
    console.log("DOM fully loaded and parsed");
  }

  try {
    // Call functions to be called on DOMContentLoaded
    const idElement = document.querySelector("[name='id']");
    if (idElement) {
      window.variantChanged(idElement.value);
    } else {
      if (window.showErrors) {
        console.error("Error: Could not find variant ID element");
      }
    }
    
    // Safely call functions with error handling
    safelyExecute(window.updateVariantStockStatus, "Error updating variant stock status");
    safelyExecute(window.updateUnAvailableOptionsOnLoad, "Error updating unavailable options");
    safelyExecute(window.updateOption1AvailabilityOnChange, "Error updating 1st option");
    safelyExecute(window.upgradeToSubscriptionDeclaration, "Error in window.upgradeToSubscriptionDeclaration() Function");

    // Other code stuffs
    const intervalId = setInterval(() => {
      try {
        // Find the radio button using the selector
        const radio = document.querySelector(".skio-plan-picker input[type='radio'][skio-selling-plan-group]");
      
        if (radio) {

          if (radio && radio.closest(".skio-plan-picker") && window.globalSettings?.discount_percentage) {
            const discount = parseFloat(window.globalSettings.discount_percentage);
            const wrapper = document.createElement("div");
            wrapper.classList.add("memorial-day-sale");
            wrapper.innerHTML = `<span class="">Memorial Day <strong>${discount}% Off</strong></span>`;
            radio.closest(".skio-plan-picker").prepend(wrapper);
          }
          
          // Stop checking once the element is found
          clearInterval(intervalId);
          if (window.showErrors) {
            console.log("Found subscription radio button");
          }

          // Find the container based on the `radio` element
          const container = radio.closest(".skio-group-container")?.querySelector(".skio-group-content");
          if (!container) {
            throw new Error("Could not find subscription container");
          }

          const span = document.createElement("span");
          span.classList.add("free-shipping-tag");
          span.textContent = "Free Shipping";
          radio.closest(".skio-group-container").appendChild(span);
      
          // SVG tick mark
          let tickMarkSvg = `<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="gridicons:checkmark"><path id="Vector" d="M4.49998 9.70698L1.14648 6.35348L1.85348 5.64648L4.49998 8.29298L10.1465 2.64648L10.8535 3.35348L4.49998 9.70698Z" fill="white" stroke="white"/></g></svg>`;
          
          // DOM updates
          // 1. Prepend a new `div` at the first position in the `container`
          const testDiv = document.createElement("div");
          if (window.sectionSettings && window.sectionSettings.skio_subscription_text) {
            testDiv.innerHTML = window.sectionSettings.skio_subscription_text;
            container.prepend(testDiv);
          } else {
            if (window.showErrors) {
              console.error("Error: Missing skio_subscription_text in sectionSettings");
            }
          }
      
          // 2. Create kit unlocked message
          const kitMessageDiv = document.createElement("div");
          if (window.productCustomData && window.productCustomData.free_trial_kit) {
            if (window.sectionSettings && window.sectionSettings.kit_unlocked_message) {
              kitMessageDiv.classList.add("free_kit_product");
              kitMessageDiv.innerHTML = `${tickMarkSvg} <p>${window.sectionSettings.kit_unlocked_message}</p>`;
            } else {
              if (window.showErrors) {
                console.error("Error: Missing kit_unlocked_message in sectionSettings");
              }
            }
          }
      
          // 3. Wrap the `container` in a new wrapper div
          const wrapper = document.createElement("div");
          wrapper.classList.add("skio-group-content-wrapper");
      
          // Insert the wrapper before the `container`
          container.parentNode.insertBefore(wrapper, container);
      
          // Move the `container` and `kitMessageDiv` inside the wrapper
          wrapper.appendChild(container);
          wrapper.appendChild(kitMessageDiv);

          window.TempWrapper = wrapper;

          // Update Options Values -- Remove "Delivery every" from each option.
          const selectElement = wrapper.querySelector("select");
          if (selectElement) {
            const options = selectElement.options;
            for (let i = 0; i < options.length; i++) {
              options[i].text = options[i].text.replace("Delivery every", "");
            }
          } else {
            if (window.showErrors) {
              console.error("Error: Select element not found in wrapper");
            }
          }
      
          // Call the custom change event function, if provided
          if (typeof window.addSkioCustomChangeEvent === "function") {
            window.addSkioCustomChangeEvent();
          } else {
            if (window.showErrors) {
              console.log("addSkioCustomChangeEvent function not defined");
            }
          }
          
          safelyExecute(window.updateSaveValue, "Error updating save value");
          safelyExecute(window.window.updateOneTimePrice, "Error updating OneTime Price");
        }
      } catch (error) {
        if (window.showErrors) {
          console.error("Error in subscription setup interval:", error);
        }
        clearInterval(intervalId); // Clear interval on error to prevent infinite attempts
      }
    }, 200);

    // add ATC click event to sticky ATC Button.
    function stickyAtcButtonEvent() {
      try {
        const stickyBtn = document.querySelector(".product-sticky-header #sticky-add-to-cart-button-container #sticky-add-to-cart-button");
        if (stickyBtn) {
          stickyBtn.addEventListener("click", function(e) {
            if (window.showErrors) {
              console.log("Sticky Button Clicked!!");
            }
        
            // Simulate click on the main add to cart button using dispatchEvent
            const originalBtn = document.querySelector(".product-main-section .product-main-right-wrap-main #add-to-cart-button-container #add-to-cart-button");
            if (originalBtn) {
              const clickEvent = new MouseEvent("click", {
                bubbles: true,
                cancelable: true,
                view: window,
              });
              originalBtn.dispatchEvent(clickEvent);
            } else {
              if (window.showErrors) {
                console.error("Error: Original add to cart button not found");
              }
            }
          });
        } else {
          if (window.showErrors) {
            console.log("Sticky add to cart button not found");
          }
        }
      } catch (error) {
        if (window.showErrors) {
          console.error("Error setting up sticky ATC button event:", error);
        }
      }
    }
    // call on load to append Sticky ATC Button Event
    //stickyAtcButtonEvent();
  } catch (error) {
    if (window.showErrors) {
      console.error("Error in DOMContentLoaded event handler:", error);
    }
  }
});

// Helper function to safely execute functions
function safelyExecute(fn, errorMessage) {
  try {
    if (typeof fn === 'function') {
      fn();
    } else {
      if (window.showErrors) {
        console.error(`${errorMessage}: Not a function`);
      }
    }
  } catch (error) {
    if (window.showErrors) {
      console.error(`${errorMessage}:`, error);
    }
  }
}

window.skioOneTimeValue = "onetime";
window.skioSubscriptionValue = "subscription";

function updateFreeKitStatus(subscriptionType) {
  try {
    const bundleDiv = document.querySelector(".product-main-section [free-trial-bundle-box]");
    if (bundleDiv) {
      bundleDiv.classList.toggle("subscription-active", (subscriptionType == window.skioSubscriptionValue));
      if (window.showErrors) {
        console.log("Free kit status updated:", subscriptionType);
      }
    } else {
      if (window.showErrors) {
        console.log("Free trial bundle box not found");
      }
    }
  } catch (error) {
    if (window.showErrors) {
      console.error("Error updating free kit status:", error);
    }
  }
}

window.mainSwiper = '';
// window.thumbsSwiper = '';


function setSwiperSlider() {
  try {
    if (typeof Swiper === 'undefined') {
      if (window.showErrors) {
        console.error("Error: Swiper is not defined. Make sure Swiper library is loaded.");
      }
      return;
    }

    // Destroy Swipers if they already exist
    if (typeof window.mainSwiper !== "undefined" && window.mainSwiper instanceof Swiper) {
      window.mainSwiper.destroy(true, true);
    }
    // if (typeof window.thumbsSwiper !== "undefined" && window.thumbsSwiper instanceof Swiper) {
    //   window.thumbsSwiper.destroy(true, true);
    // }

    // Initialize Swipers based on screen width
    if (window.innerWidth <= 768) {
      const slider = new Swiper('.gallery-slider', {
        slidesPerView: 1.128,
        loop: false,
        loopedSlides: 6,
        spaceBetween: 8,
        pagination: {
          el: ".gallery-slider-pagination",
          clickable: true,
        },
        breakpoints: {
          768: {
            slidesPerView: 1
          }
        },
        on: {
          slideChange: function () {
            handleVideoAutoplay(this);
          }
        }
      });

      // Disable click on slider images/links on mobile
      slider.el.querySelectorAll('a[data-fancybox]').forEach(link => {
        link.addEventListener('click', e => {
          if (window.innerWidth <= 768) {
            e.preventDefault(); // Prevent default click (opening Fancybox or link)
          }
        });
      });
      
      // Prevent pinch zoom from changing slides
      slider.el.addEventListener('touchstart', (e) => {
        if (e.touches && e.touches.length > 1) {
          slider.allowTouchMove = false;
        }
      });
      slider.el.addEventListener('touchend', () => {
        slider.allowTouchMove = true;
      });

      window.mainSwiper = slider;

      // const thumbs = new Swiper('.gallery-thumbs', {
      //   slidesPerView: 2,
      //   spaceBetween: 44,
      //   loop: false,
      //   slideToClickedSlide: true,
      // });
      // window.thumbsSwiper = thumbs;

      // slider.controller.control = thumbs;
      // thumbs.controller.control = slider;
    }

    if (window.showErrors) {
      console.log("Swiper sliders initialized successfully");
    }
  } catch (error) {
    if (window.showErrors) {
      console.error("Error initializing Swiper sliders:", error);
    }
  }

  Fancybox.bind("[data-fancybox]", {
    Thumbs: false,
    Toolbar: {
      enabled: true,
      display: {
        left: [
        ],
        middle: [
        ],
        right: ["close"]
      },
    },
  });

  
}

function handleVideoAutoplay(swiperInstance) {
  const slides = swiperInstance.slides;

  slides.forEach((slide, index) => {
    const video = slide.querySelector('video');
    const iframe = slide.querySelector('iframe');

    if (index === swiperInstance.activeIndex) {
      // ✅ Active slide: play
      if (video) {
        video.play().catch(err => {
          if (window.showErrors) {
            console.warn("Video autoplay failed:", err);
          }
        });
      }

      if (iframe) {
        if (iframe.src.includes("youtube.com")) {
          setTimeout(() => {
            iframe.contentWindow?.postMessage(
              '{"event":"command","func":"playVideo","args":""}',
              "*"
            );
          }, 200);
        }

        if (iframe.src.includes("vimeo.com")) {
          iframe.contentWindow?.postMessage('{"method":"play"}', "*");
        }
      }

    } else {
      // ❌ Inactive slide: pause
      if (video && !video.paused) {
        video.pause();
      }

      if (iframe) {
        if (iframe.src.includes("youtube.com")) {
          setTimeout(() => {
            iframe.contentWindow?.postMessage(
              '{"event":"command","func":"pauseVideo","args":""}',
              "*"
            );
          }, 200);
        }

        if (iframe.src.includes("vimeo.com")) {
          iframe.contentWindow?.postMessage('{"method":"pause"}', "*");
        }
      }
    }
  });

}

// Debounce function to limit the frequency of execution on resize
function debounce(func, wait) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

// Call `setSwiperSlider` on resize with debounce
window.addEventListener('resize', debounce(setSwiperSlider, 200));

// Call `setSwiperSlider` initially to load on page load
try {
  setSwiperSlider();
} catch (error) {
  if (window.showErrors) {
    console.error("Failed to set Swiper slider:", error);
  }
}

window.updateOneTimePrice = function(event){

  if(window.globalSettings.discount_percentage < 1) return;
  
  // Find the price container
  const container = document.querySelector(".skio-plan-picker input[type='radio'][skio-one-time]").closest('.skio-group-container');
  if (!container) return;

  // OPTIONAL: Get the raw price from somewhere in your data or DOM
  // For now, fallback to hard-coded value
  // In production, use: window.productCustomData.current_product_json.variants[...] or relevant value.
  let originalPrice = (window.getcurrentVariant().price / 100).toFixed(2);

  // OPTIONAL: set your subscription discount here if needed or get from DOM, e.g.
  // let discountPercentage = 20;
  let discountPercentage = window.globalSettings.discount_percentage;

  // 1. Apply first (subscription) discount
  let priceAfterDiscount = originalPrice;
  if (discountPercentage > 0) {
    priceAfterDiscount = priceAfterDiscount * (1 - discountPercentage / 100);
  }

  // Round to 2 decimal places for currency
  priceAfterDiscount = priceAfterDiscount.toFixed(2);

  // 3. Format money (add $); in production, use Shopify.formatMoney if available
  function money(val) {
    return Shopify.formatMoney(val);
  }

  const originalPriceStr = Shopify.formatMoney(originalPrice * 100);

  const discountedPriceStr = Shopify.formatMoney(priceAfterDiscount * 100);

  // 4. Update HTML
  container.querySelector(".skio-price").innerHTML = `
    <span skio-discounted-price="" ${ window.globalSettings.discount_percentage ? 'style="color: #FF8C00"' : '' }>${discountedPriceStr}</span>
    <span skio-onetime-price>
      <strike>${originalPriceStr}</strike>
    </span>
  `;
}


// function setSwiperSlider() {
//   try {
//     if (typeof Swiper === 'undefined') {
//       if (window.showErrors) {
//         console.error("Error: Swiper is not defined. Make sure Swiper library is loaded.");
//       }
//       return;
//     }

//     if(typeof window.mainSwiper !== "undefined"){
//       if(window.innerWidth < 768){
//         window.mainSwiper.destroy()
//         window.thumbsSwiper.destroy()
//       }
//       else{
//         var slider = new Swiper('.gallery-slider', {
//         slidesPerView: 1.128,
//         loop: false,
//         loopedSlides: 6,
//         spaceBetween: 8,
//         pagination: {
//           el: ".gallery-slider-pagination",
//           clickable: true,
//         },
//         breakpoints: {
//           768: {
//             slidesPerView: 1
//           }
//         }
//       });
//       window.mainSwiper = slider;
      
//       var thumbs = new Swiper('.gallery-thumbs', {
//         slidesPerView: 2,
//         spaceBetween: 44,
//         loop: false,
//         slideToClickedSlide: true,
//       });
//       window.thumbsSwiper = thumbs;
      
//       slider.controller.control = thumbs;
//       thumbs.controller.control = slider;
//       }
//     }
//     else{
//       if(window.innerWidth < 768){
//         var slider = new Swiper('.gallery-slider', {
//         slidesPerView: 1.128,
//         loop: false,
//         loopedSlides: 6,
//         spaceBetween: 8,
//         pagination: {
//           el: ".gallery-slider-pagination",
//           clickable: true,
//         },
//         breakpoints: {
//           768: {
//             slidesPerView: 1
//           }
//         }
//       });
//       window.mainSwiper = slider;
      
//       var thumbs = new Swiper('.gallery-thumbs', {
//         slidesPerView: 2,
//         spaceBetween: 44,
//         loop: false,
//         slideToClickedSlide: true,
//       });
//       window.thumbsSwiper = thumbs;
      
//       slider.controller.control = thumbs;
//       thumbs.controller.control = slider;
//       }
//     }
    
//     if (window.showErrors) {
//       console.log("Swiper sliders initialized successfully");
//     }
//   } catch (error) {
//     if (window.showErrors) {
//       console.error("Error initializing Swiper sliders:", error);
//     }
//   }
// }

// try {
//   setSwiperSlider();
// } catch (error) {
//   if (window.showErrors) {
//     console.error("Failed to set Swiper slider:", error);
//   }
// }

// function debounce(func, wait) {
//   let timeout;
//   return function(...args) {
//     clearTimeout(timeout);
//     timeout = setTimeout(() => func.apply(this, args), wait);
//   };
// }

// function setSwiperSlider() {
//   console.log('Swiper slider updated.');
// }

// // Use debounce to limit how often the function is called on resize
// window.addEventListener('resize', debounce(setSwiperSlider, 200));

window.addSkioCustomChangeEvent = function() {
  try {
    const radioInputs = document.querySelectorAll(".product-main-section .skio-plan-picker input.skio-group-input");
    if (radioInputs.length === 0) {
      if (window.showErrors) {
        console.log("No subscription radio inputs found");
      }
      return;
    }

    radioInputs.forEach(el => {
      el.addEventListener("change", function(e) {
        let subscriptionType = null;
    
        if (e.currentTarget.hasAttribute('skio-one-time')) {
          subscriptionType = "onetime";
        } else if (e.currentTarget.hasAttribute('skio-selling-plan-group')) {
          subscriptionType = "subscription";
        }
    
        if (window.showErrors) {
          console.log(subscriptionType);
        }

        if (subscriptionType == window.skioOneTimeValue) {
          // do something for Onetime product
          window.updateOneTimePrice(e)
          if (window.showErrors) {
            console.log("One-time purchase selected");
          }
        }
        else if (subscriptionType == window.skioSubscriptionValue) {
          // do something for Subscription product
          if (window.showErrors) {
            console.log("Subscription selected");
          }
        }
        else {
          // do something is both are not found
          if (window.showErrors) {
            console.log("Unknown subscription type");
          }
        }

        // call functions dependent on Skio's subscription change.
        updateFreeKitStatus(subscriptionType);
      });
    });
  } catch (error) {
    if (window.showErrors) {
      console.error("Error setting up Skio custom change event:", error);
    }
  }
};

window.isSelectedOptionIsOnetimeOrSubscription = function() {
  try {
    const checkedInput = document.querySelector(".product-main-section .skio-plan-picker input.skio-group-input:checked");
    if (!checkedInput) {
      if (window.showErrors) {
        console.log("No subscription option is selected");
      }
      return null;
    }
    return checkedInput.hasAttribute('skio-one-time') ? 'onetime' : 'subscription';
  } catch (error) {
    if (window.showErrors) {
      console.error("Error checking selected option type:", error);
    }
    return null;
  }
};

window.getFreeProductDetais = function() {
  try {
    const idSelector = document.querySelector(".product-main-section select[name=id]");
    if (!idSelector) {
      throw new Error("Variant ID selector not found");
    }
    
    let parentCurrentVariantId = parseInt(idSelector.value);
    
    const checkedRadioInput = document.querySelector(".product-main-section .skio-plan-picker input.skio-group-input:checked");
    if (!checkedRadioInput) {
      throw new Error("No subscription option is selected");
    }
    
    const skioFrequencyDropDown = checkedRadioInput.closest(".skio-group-container")?.querySelector("select.skio-frequency");
    if (!skioFrequencyDropDown) {
      throw new Error("Frequency dropdown not found");
    }
    
    let currentSubscriptionPlan = skioFrequencyDropDown.options[skioFrequencyDropDown.selectedIndex].text.toLowerCase();
    
    if (!window.productCustomData || !window.productCustomData.free_trial_kit) {
      throw new Error("Free trial kit data not available");
    }
    
    const sellingPlanGroup = window.productCustomData.free_trial_kit.selling_plan_groups.find(group => group.selling_plans);
    if (!sellingPlanGroup) {
      throw new Error("Selling plan group not found");
    }
    
    const matchingPlan = sellingPlanGroup.selling_plans.find(sp => (sp.name.toLowerCase().includes(currentSubscriptionPlan)));
    if (!matchingPlan) {
      throw new Error(`No matching selling plan found for: ${currentSubscriptionPlan}`);
    }
    
    let updatedSellingPlan = matchingPlan.id;
    
    if (!window.productCustomData.current_product_json) {
      throw new Error("Current product data not available");
    }
    
    const currentVariant = window.productCustomData.current_product_json.variants.find(variant => variant.id == parentCurrentVariantId);
    if (!currentVariant) {
      throw new Error("Current variant not found");
    }
    
    let parentVariantTitle = currentVariant.title;
    
    const matchingFreeVariant = window.productCustomData.free_trial_kit.variants.find(variant => variant.title == parentVariantTitle);
    if (!matchingFreeVariant) {
      throw new Error("Matching free variant not found");
    }
    
    let updatedVariantId = matchingFreeVariant.id;
    
    if (window.showErrors) {
      console.log("Free product details retrieved successfully");
    }
    
    return {
      'freeprod': window.productCustomData.free_trial_kit,
      'updatedSellingPlan': updatedSellingPlan,
      'updatedVariantId': updatedVariantId
    };
  } catch (error) {
    if (window.showErrors) {
      console.error("Error getting free product details:", error);
    }
    return null;
  }
};

function updateSliderWithVariantMedia(matchingMedia) {
  const product = window.productCustomData?.current_product_json;

  if(document.querySelector(".product-main-left")){
    document.querySelector(".product-main-left").style.height = document.querySelector(".product-main-left").clientHeight + "px";
  }

  if (
    product &&
    Array.isArray(product.variants) &&
    product.variants.length === 1
  ) {
    return;
  }

  try {
    const mainWrapper = document.querySelector('.gallery-slider .swiper-wrapper');

    if (!mainWrapper) {
      if (window.showErrors) {
        console.error("Error: Slider wrappers not found");
      }
      return;
    }

    function isMobileViewport() {
      return window.innerWidth <= 767;
    }

    function destroySlidersIfExist() {
      if (window.mainSwiper && typeof window.mainSwiper.destroy === 'function') {
        try {
          window.mainSwiper.destroy(true, true);
          if (window.showErrors) {
            console.log("Main swiper destroyed successfully");
          }
        } catch (destroyError) {
          if (window.showErrors) {
            console.error("Error destroying main swiper:", destroyError);
          }
        }
      }

      if (window.thumbsSwiper && typeof window.thumbsSwiper.destroy === 'function') {
        try {
          window.thumbsSwiper.destroy(true, true);
          if (window.showErrors) {
            console.log("Thumbs swiper destroyed successfully");
          }
        } catch (destroyError) {
          if (window.showErrors) {
            console.error("Error destroying thumbs swiper:", destroyError);
          }
        }
      }
    }

    // Clear existing slides
    mainWrapper.innerHTML = '';

    if (!matchingMedia || matchingMedia.length === 0) {
      if (window.showErrors) {
        console.log("No matching media found, showing all product media");
      }
      if (window.productCustomData && window.productCustomData.current_product_json) {
        matchingMedia = window.productCustomData.current_product_json.media;
      } else {
        if (window.showErrors) {
          console.error("Error: Product data not available");
        }
        return;
      }
    }
    
    // --- IMPORTANT: Check visibility of AB class at the start ---
    const abVideoEl = document.querySelector('.A-B-pdp-video');
    const canShowVideos = abVideoEl && (getComputedStyle(abVideoEl).display === 'block' || abVideoEl.style.display === 'block');
    // -----------------------------------------------------------
    
    if (Array.isArray(matchingMedia) && matchingMedia.length > 0) {
      matchingMedia.forEach((media, index) => {
        if (!media) return;

        const src = media.preview_image?.src || media.src;
        const mediaId = media.id;
        const mediaType = media.media_type;
        if (!src && !mediaType) {
          if (window.showErrors) {
            console.log("Media has no valid source or type, skipping");
          }
          return;
        }

        if (window.showErrors) {
          console.log("Adding media to slider: ", src);
        }

        const mainSlide = document.createElement('div');
        mainSlide.className = `product-images-gallery-items ${mediaType} swiper-slide product-slide-item`;
        mainSlide.setAttribute('data-media-id', mediaId);

        const tagsAndBadges = window.MediaCaptureTags_and_badges || '';
        let mediaContent = '';

        if (mediaType === 'video') {
          // Only show videos if AB block is display: block
          if (canShowVideos) {
            const videoSrc = media.sources?.find(s => s.format === 'mp4')?.url || media.src;
            if (!videoSrc) {
              if (window.showErrors) console.log("No valid MP4 source found for video, skipping");
              return;
            }
            Fancybox.bind("[data-fancybox='gallery']", {
              on: {
                close: (fancybox, slide) => {
                  document.querySelectorAll('a[data-fancybox="gallery"] video').forEach(video => {
                    video.pause();
                    video.currentTime = 0;
                  });
                },
                done: (fancybox, slide) => {
                  const video = slide.contentEl?.querySelector("video");
                  console.log(video)
                  if (video) {
                    video.removeAttribute("controls");
                    video.setAttribute("playsinline", "");
                    video.setAttribute("webkit-playsinline", "");
                    video.setAttribute("loop", "")
                  }
                }
              }
            });
            
            mediaContent = `
            <a href="${videoSrc}" data-fancybox="gallery" data-index="${index}">
              <img src="${src}" height="600" style="display: none;" loading="lazy" alt="Product Image" />
              <video preload="metadata" poster="${src}" playsinline muted loop>
                <source src="${videoSrc}" type="video/mp4">
                Your browser does not support the video tag.
              </video>
            </a>
            `;
          } else {
            // If AB block is not shown, skip this video
            return;
          }
        } else if (mediaType === 'external_video') {
          // Only show videos if AB block is display: block
          if (canShowVideos) {
            mainSlide.classList.add("product-video-gallery-items");
            const host = media.host;
            const externalId = media.external_id;
    
            if (host === 'youtube') {
              const iframeHTML = `
                <style>
                  html, body {
                    margin: 0;
                    padding: 0;
                    height: 100%;
                    background: #000;
                  }
                  iframe {
                    display: block;
                    width: 100%;
                    height: 100%;
                    border: none;
                  }
                </style>
                <iframe
                  src="https://www.youtube.com/embed/${externalId}?enablejsapi=1&origin=${window.location.origin}&mute=1&autoplay=1&controls=0&loop=1&playlist=${externalId}"
                  frameborder="0"
                  playsinline
                  allow="autoplay; encrypted-media"
                  allowfullscreen
                  loading="lazy"
                  style="width:100%;height:100%;"
                ></iframe>
              `;
              mediaContent = `
              <a href="data:text/html;charset=utf-8,${encodeURIComponent(iframeHTML)}" data-type="youtube" data-fancybox="gallery" data-index="${index}" style="background-image: url('https://img.youtube.com/vi/${externalId}/hqdefault.jpg');">
                <img src="https://img.youtube.com/vi/${externalId}/hqdefault.jpg" height="600" style="display: none;" loading="lazy" alt="Product Image" />
                <iframe
                  src="https://www.youtube.com/embed/${externalId}?enablejsapi=1&origin=${window.location.origin}&mute=1&loop=1&playlist=${externalId}"
                  frameborder="0"
                  playsinline
                  allow="autoplay; encrypted-media"
                  allowfullscreen
                  loading="lazy"
                ></iframe>
              </a>
              `;
            } else if (host === 'vimeo') {
              mediaContent = `
              <a href="https://player.vimeo.com/video/${externalId}" data-fancybox="gallery" data-index="${index}">
                <iframe src="https://player.vimeo.com/video/${externalId}" frameborder="0" allowfullscreen loading="lazy"></iframe>
              </a>
              `;
            }
          } else {
            // If AB block is not shown, skip this video
            return;
          }
        } else {
          // For images, no AB check
          mediaContent = `
            <a href="${src}" data-fancybox="gallery" data-index="${index}">
              <img src="${src}" height="600" loading="lazy" alt="Product Image" />
              <div class="product-image-zoom-icon">
                <svg role="presentation" fill="none" stroke-width="2" focusable="false" width="15" height="15" class="icon icon-image-zoom" viewBox="0 0 15 15">
                  <circle cx="7.067" cy="7.067" r="6.067" stroke="currentColor"></circle>
                  <path d="M11.4 11.4 14 14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path d="M7 4v6M4 7h6" stroke="currentColor"></path>
                </svg>
              </div>
            </a>
          `;
        }

        mainSlide.innerHTML = `${tagsAndBadges}${mediaContent}`;
        mainWrapper.appendChild(mainSlide);
        if (index === 0 && !isMobileViewport()) {
          mainWrapper.parentElement.classList.add("first_image");
        }
      });
    } else {
      if (window.showErrors) {
        console.error("No media available to display in sliders.");
      }
    }
    function isChrome() {
      return /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor) && !/Edg/.test(navigator.userAgent);
    }
    document.querySelectorAll('[data-fancybox="gallery"] video').forEach((el) => {
      el.addEventListener('play', function(e) {
        e.preventDefault();
        if (isChrome()) {
          el.pause();
          const index = parseInt(e.target.closest('[data-fancybox="gallery"]').dataset.index);
          Fancybox.show([...document.querySelectorAll("[data-fancybox='gallery']")].map(el => ({
            src: el.getAttribute('href'),
            type: el.getAttribute('type') || undefined, // 'image', 'video', etc.
            thumb: el.querySelector('img')?.src
          })), { startIndex: index });
        }
      });
    });
    if (isMobileViewport()) {
      setSwiperSlider();

      if (window.mainSwiper && mainWrapper.children.length > 0) {
        try {
          window.mainSwiper.slideTo(0, 0);
        } catch (slideError) {
          if (window.showErrors) {
            console.error("Error setting main swiper slide:", slideError);
          }
        }
      }

      if (window.showErrors) {
        console.log("Sliders initialized successfully on mobile");
      }
    } else {
      destroySlidersIfExist();

      const firstImage = mainWrapper.querySelector(".product-images-gallery-items");
      if (firstImage) {
        mainWrapper.parentElement.classList.add("first_image");
        if (window.showErrors) {
          console.log("Added `first_image` class to the first image parent on desktop");
        }
      }
    }
  } catch (error) {
    if (window.showErrors) {
      console.error("Error updating slider with variant media:", error);
    }
  }

  if(document.querySelector(".product-main-left")){
    setTimeout(function(){
      document.querySelector(".product-main-left").style.height = "unset";
    }, 1000)
  }
}

// function updateSliderWithVariantMedia(matchingMedia) {

//   const product = window.productCustomData?.current_product_json;
//   if (
//     product &&
//     Array.isArray(product.variants) &&
//     product.variants.length === 1
//   ) {
//     return;
//   }
  
//   try {
//     const mainWrapper = document.querySelector('.gallery-slider .swiper-wrapper');
//     // const thumbsWrapper = document.querySelector('.gallery-thumbs .swiper-wrapper');

//     // Exit if the wrappers are not found
//     if (!mainWrapper) {
//       if (window.showErrors) {
//         console.error("Error: Slider wrappers not found");
//       }
//       return;
//     }

//     function isMobileViewport() {
//       return window.innerWidth <= 767; // Mobile viewport detection
//     }

//     // Function to destroy sliders and clean up
//     function destroySlidersIfExist() {
//       if (window.mainSwiper && typeof window.mainSwiper.destroy === 'function') {
//         try {
//           window.mainSwiper.destroy(true, true);
//           if (window.showErrors) {
//             console.log("Main swiper destroyed successfully");
//           }
//         } catch (destroyError) {
//           if (window.showErrors) {
//             console.error("Error destroying main swiper:", destroyError);
//           }
//         }
//       }

//       if (window.thumbsSwiper && typeof window.thumbsSwiper.destroy === 'function') {
//         try {
//           window.thumbsSwiper.destroy(true, true);
//           if (window.showErrors) {
//             console.log("Thumbs swiper destroyed successfully");
//           }
//         } catch (destroyError) {
//           if (window.showErrors) {
//             console.error("Error destroying thumbs swiper:", destroyError);
//           }
//         }
//       }
//     }

//     // Clear existing slides
//     mainWrapper.innerHTML = '';
//     // thumbsWrapper.innerHTML = '';

//     // Handle case where no matching media is passed
//     if (!matchingMedia || matchingMedia.length === 0) {
//       if (window.showErrors) {
//         console.log("No matching media found, showing all product media");
//       }
//       if (window.productCustomData && window.productCustomData.current_product_json) {
//         matchingMedia = window.productCustomData.current_product_json.media; // Default to all product media
//       } else {
//         if (window.showErrors) {
//           console.error("Error: Product data not available");
//         }
//         return;
//       }
//     }

//     // Create and append new slides if media is available
//     if (Array.isArray(matchingMedia) && matchingMedia.length > 0) {
//       matchingMedia.forEach((media, index) => {
//         // Safeguard against null/undefined media entries
//         if (!media) return;

//         const src = media.preview_image?.src || media.src; // Get media source
//         const mediaId = media.id; // Get media ID

//         if (!src) {
//           if (window.showErrors) {
//             console.log("Media has no valid source, skipping");
//           }
//           return; // Skip if media has no valid source
//         }

//         if (window.showErrors) {
//           console.log("Adding media to slider: ", src);
//         }

//         // Create Main Slide
//         const mainSlide = document.createElement('div');
//         mainSlide.className = 'product-images-gallery-items swiper-slide product-slide-item';
//         mainSlide.setAttribute('data-media-id', mediaId);

//         // Check if window.MediaCaptureTags_and_badges exists
//         const tagsAndBadges = window.MediaCaptureTags_and_badges || '';
        
//         mainSlide.innerHTML = `
//           ${tagsAndBadges}
//           <a href="${src}" data-fancybox="gallery">
//             <img src="${src}" width="800" height="600" loading="lazy" alt="Product Image" />
//             <div class="product-image-zoom-icon">
//               <svg role="presentation" fill="none" stroke-width="2" focusable="false" width="15" height="15" class="icon icon-image-zoom" viewBox="0 0 15 15">
//                 <circle cx="7.067" cy="7.067" r="6.067" stroke="currentColor"></circle>
//                 <path d="M11.4 11.4 14 14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
//                 <path d="M7 4v6M4 7h6" stroke="currentColor"></path>
//               </svg>
//             </div>
//           </a>
//         `;
//         mainWrapper.appendChild(mainSlide);

//         // // Create Thumbnail Slide
//         // const thumbSlide = document.createElement('div');
//         // thumbSlide.className = 'product-images-gallery-items swiper-slide';
//         // thumbSlide.setAttribute('data-media-id', mediaId);
//         // thumbSlide.innerHTML = `
//         //   <img src="${src}" width="100" height="100" loading="lazy" alt="Product Thumbnail" />
//         // `;
//         // thumbsWrapper.appendChild(thumbSlide);

//         // Add `first_image` class to the first image's parent when desktop
//         if (index === 0 && !isMobileViewport()) {
//           mainWrapper.parentElement.classList.add("first_image");
//         }
//       });
//     } else {
//       if (window.showErrors) {
//         console.error("No media available to display in sliders.");
//       }
//     }

//     // Handle slider initialization or destruction based on viewport
//     if (isMobileViewport()) {
//       // Initialize swipers (mobile only)
//       setSwiperSlider();

//       if (window.mainSwiper && mainWrapper.children.length > 0) {
//         try {
//           window.mainSwiper.slideTo(0, 0);
//         } catch (slideError) {
//           if (window.showErrors) {
//             console.error("Error setting main swiper slide:", slideError);
//           }
//         }
//       }
      
//       // if (window.thumbsSwiper && thumbsWrapper.children.length > 0) {
//       //   try {
//       //     window.thumbsSwiper.slideTo(0, 0);
//       //   } catch (slideError) {
//       //     if (window.showErrors) {
//       //       console.error("Error setting thumbs swiper slide:", slideError);
//       //     }
//       //   }
//       // }

//       if (window.showErrors) {
//         console.log("Sliders initialized successfully on mobile");
//       }
//     } else {
//       // Destroy sliders (desktop only) and add `first_image` class
//       destroySlidersIfExist();

//       // Add `first_image` class to the parent of the first image in mainWrapper
//       const firstImage = mainWrapper.querySelector(".product-images-gallery-items");
//       if (firstImage) {
//         mainWrapper.parentElement.classList.add("first_image");
//         if (window.showErrors) {
//           console.log("Added `first_image` class to the first image parent on desktop");
//         }
//       }
//     }
//   } catch (error) {
//     if (window.showErrors) {
//       console.error("Error updating slider with variant media:", error);
//     }
//   }
// }

// function updateSliderWithVariantMedia(matchingMedia) {
//   try {
//     const mainWrapper = document.querySelector('.gallery-slider .swiper-wrapper');
//     const thumbsWrapper = document.querySelector('.gallery-thumbs .swiper-wrapper');

//     // Exit if the wrappers are not found
//     if (!mainWrapper || !thumbsWrapper) {
//       if (window.showErrors) {
//         console.error("Error: Slider wrappers not found");
//       }
//       return;
//     }

//     // Safely destroy existing swipers to prevent duplication
//     if (window.mainSwiper && typeof window.mainSwiper.destroy === 'function') {
//       try {
//         window.mainSwiper.destroy(true, true);
//         if (window.showErrors) {
//           console.log("Main swiper destroyed successfully");
//         }
//       } catch (destroyError) {
//         if (window.showErrors) {
//           console.error("Error destroying main swiper:", destroyError);
//         }
//       }
//     }
    
//     if (window.thumbsSwiper && typeof window.thumbsSwiper.destroy === 'function') {
//       try {
//         window.thumbsSwiper.destroy(true, true);
//         if (window.showErrors) {
//           console.log("Thumbs swiper destroyed successfully");
//         }
//       } catch (destroyError) {
//         if (window.showErrors) {
//           console.error("Error destroying thumbs swiper:", destroyError);
//         }
//       }
//     }

//     // Clear existing slides
//     mainWrapper.innerHTML = '';
//     thumbsWrapper.innerHTML = '';

//     // Handle case where no matching media is passed
//     if (!matchingMedia || matchingMedia.length === 0) {
//       if (window.showErrors) {
//         console.log("No matching media found, showing all product media");
//       }
//       if (window.productCustomData && window.productCustomData.current_product_json) {
//         matchingMedia = window.productCustomData.current_product_json.media; // Default to all product media
//       } else {
//         if (window.showErrors) {
//           console.error("Error: Product data not available");
//         }
//         return;
//       }
//     }

//     // Create and append new slides if media is available
//     if (Array.isArray(matchingMedia) && matchingMedia.length > 0) {
//       matchingMedia.forEach(media => {
//         // Safeguard against null/undefined media entries
//         if (!media) return;

//         const src = media.preview_image?.src || media.src; // Get media source
//         const mediaId = media.id; // Get media ID

//         if (!src) {
//           if (window.showErrors) {
//             console.log("Media has no valid source, skipping");
//           }
//           return; // Skip if media has no valid source
//         }

//         if (window.showErrors) {
//           console.log("Adding media to slider: ", src);
//         }

//         // Create Main Slide
//         const mainSlide = document.createElement('div');
//         mainSlide.className = 'product-images-gallery-items swiper-slide product-slide-item';
//         mainSlide.setAttribute('data-media-id', mediaId);
        
//         // Check if window.MediaCaptureTags_and_badges exists
//         const tagsAndBadges = window.MediaCaptureTags_and_badges || '';
        
//         mainSlide.innerHTML = `
//           ${tagsAndBadges}
//           <img src="${src}" width="800" height="600" loading="lazy" alt="Product Image" />
//         `;
//         mainWrapper.appendChild(mainSlide);

//         // Create Thumbnail Slide
//         const thumbSlide = document.createElement('div');
//         thumbSlide.className = 'product-images-gallery-items swiper-slide';
//         thumbSlide.setAttribute('data-media-id', mediaId);
//         thumbSlide.innerHTML = `
//           <img src="${src}" width="100" height="100" loading="lazy" alt="Product Thumbnail" />
//         `;
//         thumbsWrapper.appendChild(thumbSlide);
//       });
//     } else {
//       if (window.showErrors) {
//         console.error("No media available to display in sliders.");
//       }
//     }

//     // Initialize swipers
//     setSwiperSlider();

//     // Safely reset to the first slide if swipers exist and contain slides
//     if (window.mainSwiper && mainWrapper.children.length > 0) {
//       try {
//         window.mainSwiper.slideTo(0, 0);
//       } catch (slideError) {
//         if (window.showErrors) {
//           console.error("Error setting main swiper slide:", slideError);
//         }
//       }
//     }
    
//     if (window.thumbsSwiper && thumbsWrapper.children.length > 0) {
//       try {
//         window.thumbsSwiper.slideTo(0, 0);
//       } catch (slideError) {
//         if (window.showErrors) {
//           console.error("Error setting thumbs swiper slide:", slideError);
//         }
//       }
//     }
    
//     if (window.showErrors) {
//       console.log("Slider updated with variant media successfully");
//     }
//   } catch (error) {
//     if (window.showErrors) {
//       console.error("Error updating slider with variant media:", error);
//     }
//   }
// }

window.getcurrentVariant = function() {
  try {
    const optionSelectors = document.querySelectorAll("[data-option-position]");
    if (optionSelectors.length === 0) {
      throw new Error("No option selectors found");
    }
    
    let variantTitleStringArray = [];
    for (let i = 1; i <= optionSelectors.length; i++) {
      const optionElement = document.querySelector(`[data-option-position='${i}']`);
      if (!optionElement) {
        throw new Error(`Option element at position ${i} not found`);
      }
      variantTitleStringArray.push(optionElement.value);
    }
    
    const stringToMatch = variantTitleStringArray.join(" / ");
    if (window.showErrors) {
      console.log(variantTitleStringArray.join(" / "));
    }
    
    if (!window.productCustomData || !window.productCustomData.current_product_json) {
      throw new Error("Product data not available");
    }
    
    const currentVariantJson = window.productCustomData.current_product_json.variants.find(variant => variant.title == stringToMatch);
    
    if (window.showErrors) {
      console.log(window.productCustomData.current_product_json.variants.find(variant => variant.title == stringToMatch));
    }
    
    return currentVariantJson;
  } catch (error) {
    if (window.showErrors) {
      console.error("Error getting current variant:", error);
    }
    return null;
  }
};

window.variantChanged = function(variantId) {
  try {
    window.updateSaveValue();
    window.updateOneTimePrice();
    window.updateVariantStockStatus();
    window.updateOption1AvailabilityOnChange();
    
    if (!variantId) {
      throw new Error("No variant ID provided");
    }
    
    variantId = parseInt(variantId);
    
    if (!window.productCustomData || !window.productCustomData.current_product_json) {
      throw new Error("Product data not available");
    }
    
    let currentVariant = window.productCustomData.current_product_json.variants.find(variant => variant.id == variantId);
    if (!currentVariant) {
      throw new Error(`Variant with ID ${variantId} not found`);
    }
    
    let currentProduct = window.productCustomData.current_product_json;
    let optionsLength = currentProduct.options.length;
    
    if (window.showErrors) {
      console.log(currentVariant);
    }
    
    let mediaIds = [];

    if (currentVariant.featured_image) {
      mediaIds.push(currentVariant.featured_image.id);
    }
    
    let matchingMedia = [];
    matchingMedia = currentProduct.media.filter(media => {
      // console.log("media:: " + media.alt);
      if (!media) return false;
      
      let alt = media.alt || "";

      if (optionsLength == 1) {
        if (window.showErrors) {
          console.log("Swiper -- 1");
        }
        return ((currentVariant.option1 && alt.includes(currentVariant.option1))) || alt.toLowerCase().includes('all');
      }
      else if (optionsLength == 2) {
        if (window.showErrors) {
          console.log("Swiper -- 2", currentVariant.option1, currentVariant.option2);
        }
        return (
          (currentVariant.option1 && alt.includes(currentVariant.option1)) &&
          (currentVariant.option2 && alt.includes(currentVariant.option2))
        ) || alt.toLowerCase().includes('all');
      }
      else if (optionsLength == 3) {
        if (window.showErrors) {
          console.log("Swiper -- 3");
        }
        return (
          (currentVariant.option1 && alt.includes(currentVariant.option1)) &&
          (currentVariant.option2 && alt.includes(currentVariant.option2)) &&
          (currentVariant.option3 && alt.includes(currentVariant.option3))
        ) || alt.toLowerCase().includes('all');
      }
      else {
        return false;
      }
    });
    
    if (currentVariant.featured_image) {
      matchingMedia.push(currentVariant.featured_image);
    }
    
    matchingMedia = matchingMedia.reverse();
    matchingMedia = matchingMedia.filter(n => n);
    // Filtering out duuplicate media sources
    used_srcs = [];
    matchingMedia = matchingMedia.filter(media => {
      // Try to use media.src, fallback to preview_image.src
      const uniqueSrc = media.src || (media.preview_image && media.preview_image.src);
      if (!uniqueSrc) return true;
      if (!used_srcs.includes(uniqueSrc)) {
        used_srcs.push(uniqueSrc);
        return true;
      }
      return false;
    });
    
    if(matchingMedia.length > 0){
      updateSliderWithVariantMedia(matchingMedia);
    }
    else{
      if(window.fromAbTesting){
        window.fromAbTesting = false;
        window.replaceProductImagesGallery();
      }
    }
  } catch (error) {
    if (window.showErrors) {
      console.error("Error in variantChanged function:", error);
    }
  }
};

window.replaceProductImagesGallery = function() {
  // 1. Get current page URL and append '-A-B-pdp-video' before query/hash
  const url = new URL(window.location.href);
  // Only append if not already present
  if (!url.searchParams.has('A-B-pdp-video')) {
    url.searchParams.append('A-B-pdp-video', '');
  }

  // 2. Fetch the modified URL via AJAX
  fetch(url.toString(), { credentials: 'same-origin' })
    .then(response => {
      if (!response.ok) throw new Error('Network response was not ok');
      return response.text();
    })
    .then(htmlText => {
      // 3. Parse the response and get the .product-images-gallery element
      const tempDoc = document.createElement('div');
      tempDoc.innerHTML = htmlText;
      const newGallery = tempDoc.querySelector('.product-images-gallery');
      const oldGallery = document.querySelector('.product-images-gallery');
      if (newGallery && oldGallery) {
        // 4. Replace current page's gallery with the fetched gallery
        oldGallery.outerHTML = newGallery.outerHTML;
        setTimeout(function(){
          window.dispatchEvent(new Event('resize'));
        }, 500);
      }
    })
    .catch(err => {
      console.error('Failed to fetch or replace gallery:', err);
    });
}

window.updateSaveValue = function() {
  try {
    // 1. Find containers
    const subscriptionRadio = document.querySelector(".skio-plan-picker input[type='radio'][skio-selling-plan-group]");
    if (!subscriptionRadio) throw new Error("Subscription radio button not found");
  
    const subscriptionMainContainer = subscriptionRadio.closest(".skio-group-container");
    if (!subscriptionMainContainer) throw new Error("Subscription container not found");
  
    const discountElement = subscriptionMainContainer.querySelector(".skio-save [skio-discount]");
    if (!discountElement) {
      if (window.showErrors)
        console.error("Discount element not found. Ensure proper DOM structure.");
      return;
    }
    if(window.globalSettings.discount_percentage > 0){
      discountElement.classList.add("element-hide");
    }
  
    const discountPercentage = parseFloat(discountElement.innerHTML.replace("%", ""));
    
    const variantIdElement = document.querySelector("[name='id']");
    if (!variantIdElement) throw new Error("Variant ID element not found");
    const currentSelectedVariantId = parseInt(variantIdElement.value);
  
    if (!window.productCustomData || !window.productCustomData.current_product_json)
      throw new Error("Product data not available");
  
    const currentVariantJson = window.productCustomData.current_product_json.variants.find(
      (variant) => variant.id === currentSelectedVariantId
    );
    if (!currentVariantJson) {
      if (window.showErrors)
        console.error("No matching variant found. Ensure the selected variant ID is correct.");
      return;
    }
  
    // Original product price
    const currentVariantPrice = (currentVariantJson.price / 100).toFixed(2);
    
    // FIRST TIER: Calculate subscription discount
    const subscriptionDiscountedPrice = parseFloat(currentVariantPrice) * (1 - discountPercentage / 100);
    
    // This is the price after subscription discount (will be shown as strike-through)
    const priceAfterSubscriptionDiscount = subscriptionDiscountedPrice.toFixed(2);
    
    // SECOND TIER: Apply additional global discount if available
    let finalPrice = subscriptionDiscountedPrice;
    let additionalDiscountToApply = false;
    let extraDiscountPct = 0;
  
    // Check for and apply global discount if available
    if (window.globalSettings && typeof window.globalSettings.discount_percentage !== "undefined" && !isNaN(parseFloat(window.globalSettings.discount_percentage)) && window.globalSettings.discount_percentage > 0) {
      additionalDiscountToApply = true;
      extraDiscountPct = parseFloat(window.globalSettings.discount_percentage);
      
      // Apply the additional discount to the subscription-discounted price
      finalPrice = finalPrice * (1 - extraDiscountPct / 100);
    }
    
    // Final price after all discounts
    const finalPriceFormatted = finalPrice.toFixed(2);
    
    // Total savings from original price
    const totalSavings = Math.round((currentVariantPrice - finalPriceFormatted).toFixed(2));
    console.log(totalSavings * 100);
    
    // Shopify money formatting
    if (typeof Shopify === 'undefined' || typeof Shopify.formatMoney !== 'function')
      throw new Error("Shopify.formatMoney function is not available");
  
    function removeTrailingZeros(price) {
      return price.replace(/(\.\d*?[1-9])0+$|\.0+$/, '$1');
    }
  
    // Format all the prices for display
    const formattedCurrentVariantPrice = Shopify.formatMoney(currentVariantPrice * 100);
    const formattedSubscriptionPrice = Shopify.formatMoney(priceAfterSubscriptionDiscount * 100);
    const formattedFinalPrice = Shopify.formatMoney(finalPriceFormatted * 100);
    const rawTotalSavings = Shopify.formatMoney(totalSavings * 100);
    const formattedTotalSavings = removeTrailingZeros(rawTotalSavings);
  
    // Logging for debugging
    if (window.showErrors) {
      console.log("Original Price:", currentVariantPrice);
      console.log("After Subscription Discount:", priceAfterSubscriptionDiscount);
      console.log("Final Price After All Discounts:", finalPriceFormatted);
      console.log("Total Savings:", totalSavings);
      
      if (additionalDiscountToApply) {
        console.log(`Extra ${extraDiscountPct}% global discount applied after subscription discount!`);
      }
    }
  
    // Update or create save value element
    if (subscriptionMainContainer.querySelector('[skio-save-value]')) {
      if(window.globalSettings.discount_percentage > 0){
        subscriptionMainContainer.querySelector('[skio-save-value]').classList.add("element-hide")
      }
      subscriptionMainContainer.querySelector('[skio-save-value]').innerHTML = formattedTotalSavings;
    } else {
      const savePricespan = document.createElement("span");
      savePricespan.setAttribute("skio-save-value", "");
      if(window.globalSettings.discount_percentage > 0){
        savePricespan.classList.add("element-hide");
      }
      savePricespan.innerHTML = formattedTotalSavings;
  
      const groupTitle = subscriptionMainContainer.querySelector('.skio-group-title');
      if (groupTitle) {
        groupTitle.appendChild(savePricespan);
      } else {
        throw new Error("Group title element not found");
      }
    }
    
    const priceElement = subscriptionMainContainer.querySelector('.skio-group-topline .skio-price');
    if (!priceElement) throw new Error("Price element not found");
  
    // KEY CHANGE: Now showing subscription price as strike-through and final price as the discounted price
    priceElement.innerHTML = `
      <span skio-discounted-price="" ${ window.globalSettings.discount_percentage > 0 ? 'style="color: #FF8C00"' : '' } >${ window.globalSettings.discount_percentage > 0 ? formattedFinalPrice : formattedSubscriptionPrice  }</span>
      <span skio-original-price=""><strike>${window.globalSettings.discount_percentage > 0 ? formattedSubscriptionPrice : formattedCurrentVariantPrice}</strike></span>
    `;
  
  } catch (error) {
    if (window.showErrors) {
      console.error("Error updating save value:", error);
    }
  }  
}

function combineAllOptions(allOptions) {
  try {
    const optionKeys = Object.keys(allOptions); // Get array of option keys (e.g., "option1", "option2")
    if (optionKeys.length === 0) {
      throw new Error("No option keys found");
    }
    
    let combinations = allOptions[optionKeys[0]]; // Start with the first option
    if (!combinations || !Array.isArray(combinations)) {
      throw new Error("First option is not an array");
    }
    
    // Dynamically combine all options
    for (let i = 1; i < optionKeys.length; i++) {
      const currentOption = allOptions[optionKeys[i]]; // Get current option array
      if (!currentOption || !Array.isArray(currentOption)) {
        throw new Error(`Option at index ${i} is not an array`);
      }
      
      const newCombinations = [];
      
      // Nested loop to combine existing combinations with the current option values
      combinations.forEach(existing => {
        currentOption.forEach(current => {
          newCombinations.push(`${existing} / ${current}`); // Combine with " / "
        });
      });
      
      combinations = newCombinations; // Update combinations with the new results
    }

    return combinations; // Return all combinations
  } catch (error) {
    if (window.showErrors) {
      console.error("Error combining options:", error);
    }
    return [];
  }
}

window.updateVariantStockStatus = function() {
  try {
    // Get the currently selected variant ID
    const variantIdElement = document.querySelector("[name='id']");
    if (!variantIdElement) {
      throw new Error("Variant ID element not found");
    }
    
    let currentSelectedVariant = parseInt(variantIdElement.value);
    
    if (!window.productCustomData || !window.productCustomData.current_product_json) {
      throw new Error("Product data not available");
    }
    
    let currentProduct = window.productCustomData.current_product_json;
    
    // Find the matching variant JSON object
    const currentVariantJson = currentProduct.variants.find(
      (variant) => variant.id === currentSelectedVariant
    );
    
    if (!currentVariantJson) {
      if (window.showErrors) {
        console.error("Selected variant not found in product data.");
      }
      return;
    }
    
    // Find the index of "Flavor" in the product options
    let indexOfFlavor = currentProduct.options.indexOf("Flavor");
    
    // Check if "Flavor" exists in the product options
    if (indexOfFlavor === -1) {
      if (window.showErrors) {
        console.error("Flavor option not found in the product data.");
      }
      return;
    } else {
      indexOfFlavor = indexOfFlavor + 1;
      if (window.showErrors) {
        console.log("Index of Flavor:", indexOfFlavor);
      }
    }
    
    // Initialize an object to hold the options
    let arrayOfOptions = {};
    
    // Loop through all the elements with a data-option-position attribute
    const optionElements = document.querySelectorAll(`.product-main-section [data-option-position]`);
    if (optionElements.length === 0) {
      throw new Error("No option elements found");
    }
    
    optionElements.forEach((el) => {
      try {
        // Safely get the optionPosition
        const optionPosition = parseInt(el.dataset.optionPosition, 10);
        if (isNaN(optionPosition)) {
          throw new Error("Invalid option position");
        }
      
        // Dynamically create the option name (e.g., option0, option1, etc.)
        let optionName = `option${optionPosition}`;
      
        // Check if this option name exists in the variants
        if (!currentProduct.variants[0]?.hasOwnProperty(optionName)) {
          if (window.showErrors) {
            console.warn(`Option name "${optionName}" not found in variants.`);
          }
          return; // Skip processing if the option does not exist
        }
      
        // Populate this option entry in `arrayOfOptions` if not already initialized
        if (!arrayOfOptions[optionName]) {
          arrayOfOptions[optionName] = [];
        }
      
        // Handle the specific case for "Flavor"
        if (optionPosition !== indexOfFlavor) {
          // Deduplicate using a Set only if there's an array of values
          if (Array.isArray(currentVariantJson[optionName])) {
            arrayOfOptions[optionName] = [...new Set(currentVariantJson[optionName])];
          } else {
            arrayOfOptions[optionName] = [currentVariantJson[optionName]]; // Wrap single value in an array
          }
        } else {
          // For other options, populate from all variants (with deduplication)
          arrayOfOptions[optionName] = [
            ...new Set(
              currentProduct.variants.map(
                (variant) => variant[optionName]
              )
            ),
          ];
        }
      } catch (elementError) {
        if (window.showErrors) {
          console.error("Error processing option element:", elementError);
        }
      }
    });
    
    let combinedArray = combineAllOptions(arrayOfOptions);
    if (combinedArray.length === 0) {
      throw new Error("Failed to generate combinations");
    }

    // Reset variant drawer elements
    const drawerElements = document.querySelectorAll(`.product-main-section [variant-drawer-wrapper] [data-value]`);
    if (drawerElements.length === 0) {
      throw new Error("No variant drawer elements found");
    }
    
    drawerElements.forEach(el => {
      try {
        el.classList.remove("click-disabled");
        
        const tagElements = el.querySelectorAll("[variant-tags]");
        tagElements.forEach(ele => {
          ele.classList.add("visually-hidden");
        });
      } catch (drawerError) {
        if (window.showErrors) {
          console.error("Error resetting drawer element:", drawerError);
        }
      }
    });

    // Process each combination
    for (let i in combinedArray) {
      try {
        const currentValue = combinedArray[i];
        
        // Find variant details for this combination
        let thisVariantDetails = currentProduct.variants.find(variant => variant.title == currentValue);
        
        // Get the flavor value from the combination
        let arrayIndexOfFlavor = indexOfFlavor - 1;
        let elDatasetName = currentValue.split(" / ")[arrayIndexOfFlavor];
        
        if (window.showErrors) {
          console.log(elDatasetName);
        }

        // Update UI based on variant details
        if (thisVariantDetails) {
          // Check for low stock
          const lowStockElement = document.querySelector(`.product-main-section [data-value="${elDatasetName}"] [variant-tags-main] [low-stock-variant]`);
          if (lowStockElement && window.globalSettings && thisVariantDetails.inventory_quantity < window.globalSettings.product_low_stock_threshold && thisVariantDetails.available) {
            lowStockElement.classList.remove("visually-hidden");
          }
          
          // Check for out of stock
          const outOfStockElement = document.querySelector(`.product-main-section [data-value="${elDatasetName}"] [variant-tags-main] [out-of-stock-variant]`);
          const clickableElement = document.querySelector(`.product-main-section .variant-drawer-wrapper [data-value="${elDatasetName}"]`);
          
          if (!thisVariantDetails.available) {
            if (outOfStockElement) outOfStockElement.classList.remove("visually-hidden");
            if (clickableElement) clickableElement.classList.add("click-disabled");
          }
          
          // Check for new variant
          const newVariantElement = document.querySelector(`.product-main-section [data-value="${elDatasetName}"] [variant-tags-main] [new-variant]`);
          if (newVariantElement && thisVariantDetails.metafields && thisVariantDetails.metafields.new_variant) {
            newVariantElement.classList.remove("visually-hidden");
          }
        } else {
          // Handle unavailable variant
          const unavailableElement = document.querySelector(`.product-main-section [data-value="${elDatasetName}"] [variant-tags-main] [unavailable]`);
          const clickableElement = document.querySelector(`.product-main-section .variant-drawer-wrapper [data-value="${elDatasetName}"]`);
          
          if (unavailableElement) unavailableElement.classList.remove("visually-hidden");
          if (clickableElement) clickableElement.classList.add("click-disabled");
        }
      } catch (combinationError) {
        if (window.showErrors) {
          console.error(`Error processing combination ${i}:`, combinationError);
        }
      }
    }

    // Update active flavor option
    try {
      const activeOption = document.querySelector(".product-main-section [variant-drawer-wrapper] li.select-option--active");
      if (!activeOption) {
        throw new Error("No active flavor option found");
      }
      
      const currentActiveFlavorOption = activeOption.dataset.value;
      
      const buttonValueElement = document.querySelector(`.product-main-section [data-button-value]`);
      if (buttonValueElement) {
        buttonValueElement.setAttribute("data-button-value", currentActiveFlavorOption);
      }
      
      const optionPositionElement = document.querySelector(`[data-option-position='${indexOfFlavor}']`);
      if (optionPositionElement) {
        const customSelect = optionPositionElement.closest("custom-select");
        if (customSelect) {
          const targetTagsElement = customSelect.querySelector("[variant-tags-main]");
          const sourceTagsElement = document.querySelector(`.product-main-section .variant-drawer-wrapper .select-option--active [variant-tags-main]`);
          
          if (targetTagsElement && sourceTagsElement) {
            targetTagsElement.innerHTML = sourceTagsElement.innerHTML;
          }
        }
      }
    } catch (activeFlavorError) {
      if (window.showErrors) {
        console.error("Error updating active flavor option:", activeFlavorError);
      }
    }
  } catch (error) {
    if (window.showErrors) {
      console.error("Error updating variant stock status:", error);
    }
  }
};

window.updateUnAvailableOptionsOnLoad = function() {
  try {
    // Step 1: Prepare Data for Options and Combinations
    if (!window.productCustomData || !window.productCustomData.current_product_json) {
      throw new Error("Product data not available");
    }
    
    let productData = window.productCustomData.current_product_json;
    
    let optionsLength = productData.options.length;
    if (optionsLength === 0) {
      throw new Error("No product options found");
    }
    if(optionsLength == 1 && window.productCustomData.current_product_json.options[0] == "Flavor"){
      return;
    }
    
    let optionsArray = {};
    
    // Extract unique values for each option (option1, option2, etc.)
    for (let i = 1; i <= optionsLength; i++) {
      let currentOption = `option${i}`;
      optionsArray[currentOption] = [
        ...new Set(productData.variants.map((variant) => variant[currentOption])),
      ];
    }
    
    if (window.showErrors) {
      console.log("Option Values:", optionsArray);
    }
    
    // Step 2: Create Mappings for Each Value in Option 1
    if (!optionsArray["option1"] || !Array.isArray(optionsArray["option1"])) {
      throw new Error("Option1 values not found or invalid");
    }
    
    optionsArray["option1"].forEach((val1) => {
      try {
        // Initialize an array for storing full combinations of this Option 1 value
        let combinations = [];
      
        // Generate combinations in the format "op1.value / op2.value / op3.value"
        productData.variants.forEach((variant) => {
          if (variant.option1 === val1) {
            // Build the combination string
            let combinationString = [];
            for (let i = 1; i <= optionsLength; i++) {
              combinationString.push(variant[`option${i}`]);
            }
            combinations.push(combinationString.join(" / "));
          }
        });
      
        if (window.showErrors) {
          console.log(`Combinations for "${val1}":`, combinations);
        }
      
        // Step 3: Check Availability of Each Combination
        let allUnavailable = combinations.every((combination) => {
          // Check if the combination corresponds to an unavailable variant
          let variant = productData.variants.find(
            (v) =>
              combination ===
              productData.options
                .map((option, i) => v[`option${i + 1}`])
                .join(" / ")
          );
          return !variant || !variant.available;
        });
      
        // Step 4: Add `click-disabled` class if all combinations are unavailable
        let option1Element = document.querySelector(
          `.product-main-section [data-value="${val1}"]`
        );
        
        if (option1Element) {
          if (allUnavailable) {
            if (window.showErrors) {
              console.log(`"${val1}" is unavailable for all combinations.`);
            }
            option1Element.classList.add("click-disabled", "sold_out");
          } else {
            if (window.showErrors) {
              console.log(`"${val1}" has at least one available combination.`);
            }
            option1Element.classList.remove("click-disabled", "sold_out");
          }
        } else {
          if (window.showErrors) {
            console.warn(`Element for option value "${val1}" not found`);
          }
        }
      } catch (optionError) {
        if (window.showErrors) {
          console.error(`Error processing option value "${val1}":`, optionError);
        }
      }
    });
  } catch (error) {
    if (window.showErrors) {
      console.error("Error updating unavailable options:", error);
    }
  }
};

// add Scroll event, check and add class for sticky ATC.
window.addEventListener('scroll', () => {
  try {
    const addToCartEl = document.querySelector('#add-to-cart-button-container');
    const stickyHeader = document.querySelector('.product-sticky-header');

    if (!addToCartEl || !stickyHeader) {
      return;
    }

    const rect = addToCartEl.getBoundingClientRect();

    // Check if element is above the viewport
    if (rect.bottom < 0) {
      stickyHeader.classList.add('sticky-header-enabled');
      document.body.classList.add('product-sticky-header-enabled');
    } else {
      stickyHeader.classList.remove('sticky-header-enabled');
      document.body.classList.remove('product-sticky-header-enabled');
    }
  } catch (error) {
    if (window.showErrors) {
      console.error("Error in scroll event handler:", error);
    }
  }
});

window.setDefaultAvailableOptions = function () {
  const currentVariantIdElement = document.querySelector("[name=id]");
  if (!currentVariantIdElement) {
    if (window.showErrors) {
      console.warn("Variant ID input not found.");
    }
    return;
  }

  const currentVariantId = currentVariantIdElement.value;
  const currentVariantJson = window.productCustomData?.current_product_json?.variants?.find(
    variant => variant.id == currentVariantId
  );

  if (!currentVariantJson) {
    if (window.showErrors) {
      console.warn(`Variant data not found for ID: ${currentVariantId}`);
    }
    return;
  }

  const optionsLength = window.productCustomData?.current_product_json?.options?.length;
  if (!optionsLength) {
    if (window.showErrors) {
      console.warn("No options available in current_product_json.");
    }
    return;
  }

  for (let i = 1; i <= optionsLength; i++) {
    const optionElement = document.querySelector(`.product-main-section [data-option-position="${i}"]`);

    if (!optionElement) {
      if (window.showErrors) {
        console.warn(`Option element not found for position ${i}`);
      }
      continue;
    }

    const variantOptionValue = currentVariantJson[`option${i}`];

    if (window.showErrors) {
      console.log(`Checking Option ${i}:`, optionElement.value, variantOptionValue);
    }

    if (optionElement.value != variantOptionValue) {
      if (window.showErrors) {
        console.log(`Mismatch found at option ${i}, attempting to correct.`);
      }

      const matchingLi = document.querySelector(`.product-main-section li[data-value="${variantOptionValue}"]`);
      if (matchingLi) {
        matchingLi.dispatchEvent(new Event("click", { bubbles: true }));
      } else {
        if (window.showErrors) {
          console.warn(`No matching list item found for value: ${variantOptionValue}`);
        }
      }

      break; // Only fix the first mismatch
    }
  }
};

window.updateOption1AvailabilityOnChange = function() {
  try {
    const productData = window.productCustomData?.current_product_json;
    if (!productData || !productData.options.length) return;

    const optionsLength = productData.options.length;
    if (optionsLength === 1 && productData.options[0] === "Flavor") return;

    // Step 1: Get currently selected Option 2 and 3 values (if they exist)
    const selectedValues = {};
    for (let i = 2; i <= optionsLength; i++) {
      const selectedEl = document.querySelector(`.product-main-section [data-option-position="${ i }"]`);
      if (selectedEl) {
        selectedValues[`option${i}`] = selectedEl.value
      }
    }

    // Step 2: Go through each Option 1 value (e.g., 30sv, 60sv, 90sv)
    const uniqueOption1Values = [
      ...new Set(productData.variants.map(v => v.option1))
    ];

    uniqueOption1Values.forEach(option1Val => {
      // Step 3: Find variants that match this option1Val + currently selected option2/3
      const matchingVariants = productData.variants.filter(v => {
        if (v.option1 !== option1Val) return false;

        for (let i = 2; i <= optionsLength; i++) {
          const selectedVal = selectedValues[`option${i}`];
          if (selectedVal && v[`option${i}`] !== selectedVal) {
            return false;
          }
        }
        return true;
      });
      
      // Step 4: Check if any matching variant is available
      const hasAvailable = matchingVariants.some(v => v.available);

      // Step 5: Disable/Enable Option 1 button based on availability
      const option1El = document.querySelector(`.product-main-section [data-value="${option1Val}"]`);
      if (option1El) {
        if (hasAvailable) {
          option1El.classList.remove("click-disabled", "sold_out");
        } else {
          option1El.classList.add("click-disabled", "sold_out");
        }
      }
    });
  } catch (err) {
    if (window.showErrors) {
      console.error("Error in updateOption1AvailabilityOnChange:", err);
    }
  }
};

(function() {
  function updateRightMargin() {
    try {
      var mainWrap = document.querySelector('.product-main-wrap');
      var left = document.querySelector('.product-main-left');
      var right = document.querySelector('.product-main-right-wrap');
      if (!mainWrap || !left || !right) return;

      // Dynamic heights
      var leftHeight = left.offsetHeight;
      var rightHeight = right.offsetHeight;

      var maxMargin = leftHeight - rightHeight;
      if (maxMargin < 0) maxMargin = 0;

      // Where is the wrapper relative to page?
      var mainWrapRect = mainWrap.getBoundingClientRect();
      var scrollY = window.scrollY || window.pageYOffset;
      var mainWrapY = mainWrap.getBoundingClientRect().top + scrollY;

      // This is how much the "sticky" effect should apply as you scroll DOWN through the wrapper
      var stickyMargin = scrollY - mainWrapY + 60;
      // Clamp it to [0, maxMargin]
      var appliedMargin = Math.max(0, Math.min(stickyMargin, maxMargin));

      // Only apply when wrapper is in the viewport, else reset
      // OR - always apply? (Uncomment preferred line below)
      if (mainWrapRect.bottom > 0 && mainWrapRect.top < window.innerHeight) {
        right.style.marginTop = appliedMargin + "px";
      } else {
        right.style.marginTop = "0px";
      }
      // right.style.marginTop = appliedMargin + "px"; // <--- always apply, regardless of viewport
    } catch (e) {
      // Fail silently
    }
  }

  window.addEventListener('scroll', updateRightMargin);
  window.addEventListener('resize', updateRightMargin);
  document.addEventListener('DOMContentLoaded', updateRightMargin);

  // For Shopify theme dynamic content/rendered:
  setTimeout(updateRightMargin, 400); // Run again after potential AJAX/injection
})();

(function() {
  try {
    const abEl = document.querySelector('.A-B-pdp-video');
    if (!abEl) {
      // console.warn("A-B-pdp-video element not found.");
      return;
    }

    let prevDisplay;
    try {
      prevDisplay = getComputedStyle(abEl).display;
    } catch (styleErr) {
      // console.error("Error getting computed style of .A-B-pdp-video:", styleErr);
      return;
    }

    // Helper: safely call variantChanged
    function safeVariantChanged() {
      try {
        const idInput = document.querySelector("[name='id']");
        if (!idInput) {
          console.warn("Input with name 'id' not found.");
          return;
        }
        if (typeof window.variantChanged === "function") {
          window.variantChanged(idInput.value);
        } else {
          // console.warn("window.variantChanged is not defined or not a function.");
        }
      } catch (err) {
        // console.error("Error calling window.variantChanged:", err);
      }
    }

    // Function to check display and call variantChanged if changed to block
    function checkDisplayAndTrigger() {
      try {
        let currentDisplay;
        try {
          currentDisplay = getComputedStyle(abEl).display;
        } catch (err) {
          // console.error("Error getting computed style during observer callback:", err);
          return;
        }
        if (prevDisplay !== currentDisplay) {
          if (currentDisplay === 'block') {
            window.fromAbTesting = true;
            safeVariantChanged();
          } else {
            safeVariantChanged();
          }
          prevDisplay = currentDisplay;
        }
      } catch (err) {
        // console.error("Unexpected error in checkDisplayAndTrigger:", err);
      }
    }

    // Observe attribute and subtree changes (such as class or style changes)
    let observer;
    try {
      observer = new MutationObserver(checkDisplayAndTrigger);

      observer.observe(abEl, {
        attributes: true,
        attributeFilter: ['style', 'class'],
        subtree: false
      });
    } catch (observeErr) {
      // console.error("Error initializing MutationObserver:", observeErr);
    }

    // Also poll every 500ms as a fallback
    setInterval(() => {
      try {
        checkDisplayAndTrigger();
      } catch (err) {
        // console.error("Interval error in checkDisplayAndTrigger:", err);
      }
    }, 500);

  } catch (err) {
    // console.error("Uncaught error in A-B-pdp-video handler:", err);
  }
})();