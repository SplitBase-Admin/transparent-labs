const swiperScript = document.createElement('script');

// swiperScript.src = 'https://unpkg.com/swiper@7/swiper-bundle.min.js';
swiperScript.defer = true;
swiperScript.async = true;

swiperScript.onload = function() {
  if (window.location.pathname === '/') {
    new Swiper('.hero-swiper', {
      autoplay: {
        delay: 5000,
      },
      pagination: {
        bulletActiveClass: 'pagination-bars-active',
        bulletClass: 'pagination-bars',
        clickable: true,
        el: '.hero-swiper__pagination',
        renderBullet: function (index, className) {
          return `<button class="${className} bg-gray-400 h-1 mx-1 rounded-md w-4" type="button"></button>`
        },
      },
    });

    new Swiper('.promise-swiper', {
      pagination: {
        bulletActiveClass: 'pagination-bars-active',
        bulletClass: 'pagination-bars',
        clickable: true,
        el: '.promise-swiper__pagination',
        renderBullet: function (index, className) {
          return `<button class="${className} bg-gray-400 h-1 mx-1 rounded-md w-4" type="button"></button>`
        },
      },
    });
  }

  if (window.location.pathname.indexOf('/collections') > -1) {
    new Swiper('.render-swiper', {
      effect: 'fade',
      fadeEffect: {
        crossFade: true,
      },
    });
  }

  if (document.querySelector('.swiper-section')) {
    new Swiper('.swiper-section', {
      autoplay: {
        delay: 5000,
      },
      pagination: {
        bulletActiveClass: 'pagination-bars-active',
        bulletClass: 'pagination-bars',
        clickable: true,
        el: '.swiper-section__pagination',
        renderBullet: function (index, className) {
          return `<button class="${className} bg-gray-400 h-1 mx-1 rounded-md w-4" type="button"></button>`
        },
      },
    });
  }
}

document.getElementsByTagName('head')[0].appendChild(swiperScript);

// BEGIN: We passed the cart we got from the update to make the render faster

async function renderCart(customCart) {
// console.log("Original Code")
  let cart = customCart;

  if(!cart?.items) {
    cart = await fetch('/cart.js')
    .then((response) => response.json())
    .then((data) => data);
  }

// END: We passed the cart we got from the update to make the render faster

  const templateText = document.getElementById('cart-template').textContent;
  const template = Handlebars.compile(templateText);
  const items = [];

  const { format } = new Intl.NumberFormat('en-US', { style: 'currency', currency: cart.currency });

  for (let i = 0; i < cart.items.length; i += 1) {
    const imageUrlSplit = cart.items[i].featured_image.url.split('.');
    imageUrlSplit[imageUrlSplit.length - 2] += '_150x';
    const imageUrl = imageUrlSplit.join('.');
	var selling_plan = false;
    
    const originalPrice = format(cart.items[i].original_line_price / 100);
    const price = format(cart.items[i].line_price / 100);
    
    items.push({
      hideQuantitySelector:
        cart.items[i].properties?.bundle_type === 'CHILD' ||
        cart.items[i].properties?.stack_name ||
        cart.items[i].properties?.stack_product,
      id: cart.items[i].key,
      variant_id: cart.items[i].id,
      image: imageUrl,
      isBundle: cart.items[i].properties?.bundle_type === 'CHILD',
      quantity: cart.items[i].quantity,
      originalPrice: originalPrice,
      price: price,
      isDiscounted: price !== originalPrice,
      productTitle: cart.items[i].product_title.replace('|', '-'),
      stackId: cart.items[i].properties?.stack_id,
      stackProduct: cart.items[i].properties?.stack_product,
      sellingPlan: cart.items[i].selling_plan_allocation?.selling_plan.name,
      stackName: cart.items[i].properties?.stack_name,
      variantTitle: cart.items[i].variant_title?.replace('/ 1 Tub', ''),
      url: cart.items[i].url,
      item_json: JSON.stringify(cart.items[i]),
      loop_index: i,
      _subscription_only: cart.items[i].properties?._subscription_only,
    });
    
    if(cart.items[i]?.properties?.stack_product){
      var selling_plan = true;
    }
   
   
  }
    var ssselling_plan = false;
    for (let i = 0; i < cart.items.length; i += 1) 
    {
       if(cart.items[i].selling_plan_allocation?.selling_plan.name)
       {
          var ssselling_plan = true;
          break;
        }
    }
  
    if(ssselling_plan == true)
    {
      var freeShippingThreshold = 0;
      //console.log(freeShippingThreshold);
    }
    else
    {
      var freeShippingThreshold = 9900;
      //console.log(freeShippingThreshold);
    }
  //const freeShippingThreshold = 14999;

  console.log(cart);
  
  const subtotal = format(cart.original_total_price / 100);
  const subtotal_discounts = format(cart.total_price / 100);

  console.log("subtotal::", subtotal)
  console.log("subtotal_discounts::", subtotal_discounts)
  console.log("subtotal !== subtotal_discounts::", subtotal !== subtotal_discounts)

  document.getElementById('cart-menu-container').innerHTML = template({
    empty: cart.items.length === 0,
    free_shipping: cart.total_price >= freeShippingThreshold,
    free_shipping_text: `You're ${format((freeShippingThreshold - cart.total_price) / 100)} away from <strong>Free Shipping</strong>`,
    items,
    savings: format(cart.total_discount / 100),
    subtotal: subtotal,
    subtotal_discounts,
    showBothSubtotals: subtotal !== subtotal_discounts,
    checkout_dis: selling_plan,
    subscription_product: ssselling_plan,
    total_cart_count: `${cart.item_count} ${cart.item_count > 1 ? 'items' : 'item'}`,
    progress_bar_status_before: `-${ sessionStorage.getItem("lastProgress") || 0 }`
  });
  
  document.querySelectorAll('.cart-menu-swiper .swiper-slide[data-id]').forEach((elem) => {
    const productId = parseInt(elem.dataset.id, 10);
    const itemsInCart = cart.items.map((elem) => elem.product_id);

    if (itemsInCart.indexOf(productId) > -1) {
      elem.remove();
    }
  });

  new Swiper('.cart-menu-swiper', {
    autoplay: {
      delay: 5000,
    },
    pagination: {
      bulletActiveClass: 'pagination-bars-active pagination-bars-active--blue',
      bulletClass: 'pagination-bars',
      clickable: true,
      el: '.cart-menu-swiper__pagination',
      renderBullet: function (index, className) {
        return `<button class="${className} bg-gray-400 h-1 mx-1 rounded-md w-4" type="button"></button>`
      },
    },
  });

  if (document.getElementById("cart-menu-shipping")) {
    const progressBar = document.getElementById("progress-bar");
    const freeShippingAchieved = cart.total_price >= freeShippingThreshold;
    const newProgress = freeShippingAchieved ? 0 : 100 - ((cart.total_price / freeShippingThreshold) * 100);
    const lastProgress = parseFloat(sessionStorage.getItem("lastProgress")) || 100;
    const wasFreeBefore = sessionStorage.getItem("wasFreeBefore") === "true";
    
    if (!wasFreeBefore && freeShippingAchieved) {
      progressBar.style.transition = "none";
      progressBar.style.transform = `translateX(-${lastProgress}%)`;
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          progressBar.style.transition = "transform 0.6s ease-in-out";
          progressBar.style.transform = "translateX(0%)";
        });
      });
    }
    else if (wasFreeBefore && !freeShippingAchieved) {
      progressBar.style.transition = "none";
      progressBar.style.transform = "translateX(0%)";
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          progressBar.style.transition = "transform 0.6s ease-in-out";
          progressBar.style.transform = `translateX(-${newProgress}%)`;
        });
      });
    }
    else if (!freeShippingAchieved) {
      progressBar.style.transition = "transform 0.6s ease-in-out";
      progressBar.style.transform = `translateX(-${newProgress}%)`;
    }
    else {
      progressBar.style.transition = "none";
      progressBar.style.transform = "translateX(0%)";
    }
    progressBar.classList.toggle("free--shipping-qualified", freeShippingAchieved);

    sessionStorage.setItem("lastProgress", newProgress);
    sessionStorage.setItem("wasFreeBefore", freeShippingAchieved.toString());
  }

  document.getElementById('cart-menu-container').querySelectorAll('input').forEach((elem) => {
    elem.addEventListener('change', updateQuantity);
  });

  document.getElementById('cart-menu-container').querySelectorAll('button[data-stack-id]').forEach((elem) => {
    elem.addEventListener('click', function() {
      const { stackId } = elem.dataset;
      const updates = [];

      document.querySelectorAll('#cart-menu-container div[data-line-quantity]').forEach((item) => {
        if (item.querySelector('button[data-stack-id]')?.dataset.stackId === stackId) {
          updates.push(0);
        } else {
          updates.push(parseInt(item.dataset.lineQuantity, 10));
        }
      });

      fetch('/cart/update', {
        body: JSON.stringify({
          updates,
        }),
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        method: 'POST',
      }).then((response) => response.json())
        .then((response) => {
          renderCart();
        })
        .catch((e) => {
          console.error(e);
        });
    });
  });

  window.fetchAndProcessCartData();
  
}

function updateQuantity() {
  const id = this.dataset.itemId;
  const quantity = this.valueAsNumber;

  // TODO: add some type of overlay opacity to prevent multiple interactions

  fetch('/cart/change', {
    body: JSON.stringify({
      id,
      quantity,
    }),
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    method: 'POST',
  }).then((response) => response.json())
    .then((response) => {
      if (response.status) {
        return;
      }
    //console.log(response.item_count);
      if(response.item_count < 1)
      {
          $('#cart-count').html("");
      }
      else
      {
        $('#cart-count').html("<number class='number cart-count'>"+response.item_count+"</number>");
      }
      renderCart(response);
    })
    .catch((e) => {
      console.error(e);
    });
}

function closeCartMenu() {
  document.getElementById('cart-menu-container').classList.replace('translate-x-0', 'translate-x-96');
  document.getElementById('cart-menu').classList.replace('opacity-1', 'opacity-0');

  setTimeout(() => {
    document.getElementById('cart-menu').classList.add('hidden');
  	// document.getElementById('gorgias-chat-container').classList.remove('hidden');
    document.body.classList.remove('overflow-hidden');
  }, 300);

  document.getElementById('cart-menu-container').querySelectorAll('input').forEach((elem) => {
    elem.removeEventListener('change', updateQuantity);
  });
}

function openCartMenu(customCart) {
  document.getElementById('cart-menu').classList.remove('hidden');
  document.body.classList.add('overflow-hidden');
  // document.getElementById('gorgias-chat-container').classList.add('hidden');

  renderCart(customCart);

  setTimeout(() => {
    document.getElementById('cart-menu').classList.replace('opacity-0', 'opacity-1');
    document.getElementById('cart-menu-container').classList.replace('translate-x-96', 'translate-x-0');
  }, 300);
}

document.querySelectorAll('.cart-menu-open').forEach((elem) => {
  elem.addEventListener('click', openCartMenu);
});

window.addEventListener('click', function(event) {
  if (event.target.closest('#cart-menu-container') === null
  && event.target.closest('#cart-menu-open') === null
  && event.target.closest('button') === null
  && event.target.closest('#subUpgradeModal') === null) {
    closeCartMenu();
  }

  if (event.target.closest('#cart-menu-close')) {
    closeCartMenu();
  }
});

document.querySelectorAll('.has-dropdown').forEach((elem) => {
  const dropdown = elem.querySelector('.dropdown');

  if (dropdown) {
    elem.addEventListener('mouseenter', function() {
      dropdown.classList.replace('hidden', 'block');

      setTimeout(() => {
        dropdown.classList.replace('opacity-0', 'opacity-100');
      }, 50);
    });

    elem.addEventListener('mouseleave', function() {
      dropdown.classList.replace('opacity-100', 'opacity-0');

      setTimeout(() => {
        dropdown.classList.replace('block', 'hidden');
      }, 50);
    });
  }
});

document.getElementById('search-nav-open').addEventListener('click', function() {
  document.getElementById('search-nav').classList.remove('hidden');
     document.querySelectorAll('.focusme')[0].focus();
  document.querySelectorAll('.focusme')[1].focus();
});

// document.getElementById('search-nav-open-2').addEventListener('click', function() {
//   document.getElementById('search-nav-2').classList.remove('hidden');
//      document.querySelectorAll('.focusme')[0].focus();
//   document.querySelectorAll('.focusme')[1].focus();

// });

document.getElementById('search-nav-open-3').addEventListener('click', function() {
  document.getElementById('search-nav-3').classList.remove('hidden');
   document.querySelectorAll('.focusme')[0].focus();
  document.querySelectorAll('.focusme')[1].focus();
});

document.getElementById('search-nav-close').addEventListener('click', function() {
  document.getElementById('search-nav').classList.add('hidden');
});

// document.getElementById('search-nav-close-2').addEventListener('click', function() {
  
//   document.getElementById('search-nav-2').classList.add('hidden');
//   document.querySelector('body').classList.toggle("predictive-overflow-hidden", false)
// });

document.getElementById('search-nav-close-3').addEventListener('click', function() {
  document.getElementById('search-nav-3').classList.add('hidden');
});

document.getElementById('mobile-search-nav-open').addEventListener('click', function() {
  document.getElementById('mobile-search-nav').classList.remove('hidden');
});

document.getElementById('mobile-search-nav-close').addEventListener('click', function() {
  document.getElementById('mobile-search-nav').classList.add('hidden');
});

document.getElementById('mobile-nav-open').addEventListener('click', function() {
  document.getElementById('mobile-nav').classList.replace('hidden', 'flex');

  setTimeout(() => document.getElementById('mobile-nav').style.transform = 'translateY(0)', 100);
});

document.getElementById('mobile-nav-close').addEventListener('click', function() {
  document.getElementById('mobile-nav').style.transform = 'translateY(-100vh)';

  setTimeout(() => document.getElementById('mobile-nav').classList.replace('flex', 'hidden'), 100);
});



// Header Search Bar: START
const searchToggleButton = document.getElementById('search-nav-open-2');
const searchCloseButton = document.getElementById('search-nav-close-2');
const searchNav = document.getElementById('search-nav-2');
const searchInput = searchNav.querySelector('input[type="search"]');


// Function to check if search is open
function isSearchOpen() {
  return !searchNav.classList.contains('hidden');
}

function openSearch() {
  // Close mobile menu drawer if open
  if (window.menu && window.menu.classList.contains('active')) {
    window.toggleMenu();
  }

  searchNav.classList.remove('hidden');
  document.querySelectorAll('.focusme')[0]?.focus();
  document.querySelectorAll('.focusme')[1]?.focus();
  if (searchInput && searchInput.value.trim() !== "") {
    document.body.classList.add("predictive-overflow-hidden");
  } 
}

function closeSearch() {
  searchNav.classList.add('hidden');
  document.body.classList.toggle("predictive-overflow-hidden", false);
}

// Prevent scroll-close from interfering with a recent click
let justClicked = false;

// Toggle on search icon click
searchToggleButton.addEventListener('click', function () {
  justClicked = true;
  setTimeout(() => justClicked = false, 100); // Reset after short delay

  if (isSearchOpen()) {
    closeSearch();
  } else {
    openSearch();
  }
});

// Close on close button click
searchCloseButton.addEventListener('click', closeSearch);

// Close on scroll (but skip if click just happened)
window.addEventListener('scroll', function () {
  if (isSearchOpen() && !justClicked) {
    closeSearch();
  }
});

// Close on outside click
document.addEventListener('click', function (e) {
  const isClickInside =
    searchNav.contains(e.target) ||
    searchToggleButton.contains(e.target) ||
    searchCloseButton.contains(e.target);

  if (isSearchOpen() && !isClickInside) {
    closeSearch();
  }
});
// Header Search Bar: END


// Custom Search

function getProduct(path, id) {
  const promise = new Promise((resolve, reject) => {
    let url = path;

    if (url.indexOf('?') > -1) {
      url = url.split('?')[0];
    }

    fetch(`${url}?view=search`)
      .then((response) => response.text())
      .then((data) => {
        if (document.getElementById(id)) {
          if (!data.startsWith('<!doctype html>')) {
            document.getElementById(id).innerHTML = data;
          } else {
            document.getElementById(id).remove();
          }
        }

        resolve();
      })
      .catch((err) => reject(err));
  });

  return promise;
}

function updateSortList() {
  document.querySelectorAll('.snize-main-panel-dropdown-content').forEach(function (elem) {
    elem.querySelector('.snize-main-panel-dropdown-created-desc')?.parentElement.remove();
    elem.querySelector('.snize-main-panel-dropdown-created-asc')?.parentElement.remove();
    elem.querySelector('.snize-main-panel-dropdown-total_reviews-asc')?.parentElement.remove();
    elem.querySelector('.snize-main-panel-dropdown-total_reviews-desc')?.parentElement.remove();
    elem.querySelector('.snize-main-panel-dropdown-price-asc')?.parentElement.remove();
    elem.querySelector('.snize-main-panel-dropdown-price-desc')?.parentElement.remove();

    elem.appendChild(elem.querySelector('.snize-main-panel-dropdown-sales_amount-desc').parentElement);
    elem.appendChild(elem.querySelector('.snize-main-panel-dropdown-discount-desc').parentElement);
    elem.appendChild(elem.querySelector('.snize-main-panel-dropdown-reviews_average_score-asc').parentElement);
    elem.appendChild(elem.querySelector('.snize-main-panel-dropdown-reviews_average_score-desc').parentElement);
    elem.appendChild(elem.querySelector('.snize-main-panel-dropdown-title-asc').parentElement);
    elem.appendChild(elem.querySelector('.snize-main-panel-dropdown-title-desc').parentElement);
  });
}

async function updateSearchResults() {
  const loading = document.querySelectorAll('.snize-search-results-content .snize-skeleton-card').length > 0;

  if (loading) {
    setTimeout(() => updateSearchResults(), 200);
  } else {
    updateSortList();

    document.getElementById('snize-search-results-grid-mode').style.opacity = 0;

    const promises = [];

    document.querySelectorAll('.snize-search-results-content .snize-product').forEach((elem) => {
      const link = elem.querySelector('.snize-view-link');

      if (link) {
        const url = link.getAttribute('href');

        elem.innerHTML = '';

        promises.push(getProduct(url, elem.id));
      }
    });

    await Promise.all(promises);

    document.getElementById('snize-search-results-grid-mode').style.opacity = 1;
  }
}

if (window.location.pathname === '/pages/search-results-page') {
  document.getElementById('MainContent')?.classList.add('bg-gray-300');
  updateSearchResults();

  let previousUrl = '';
  const observer = new MutationObserver(function(callback) {
    if (location.href !== previousUrl) {
      previousUrl = location.href;

      updateSearchResults();
    }

    for (let i = 0; i < callback.length; i += 1) {
      callback[i].removedNodes.forEach(function (node) {
        if (node.classList?.contains('snize-main-panel-dropdown-content')) {
          updateSearchResults();
          updateSortList();
        }
      });
    }
  });

  observer.observe(document, { subtree: true, childList: true });

  window.addEventListener('resize', updateSearchResults);
}