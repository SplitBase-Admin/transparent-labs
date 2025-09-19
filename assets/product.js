(function e() {
  var e = document.createElement("script");
  e.type = "text/javascript", e.async = true, e.src = "//staticw2.yotpo.com/BTTbhJYlSrhgxyxq7pzHkXai0lo0iExD0uiVbjEZ/widget.js";
  var t = document.getElementsByTagName("script")[0];
  t.parentNode.insertBefore(e, t)
})();

function renderBenefits() {
  const benefitsContent = document.getElementById('raw-benefits-content');
  // Check if benefitsContent exists and is not null
  if (!benefitsContent || benefitsContent.innerText.trim().length === 0) {
    return;
  }
  const templateText = document.getElementById('benefits-template').textContent;
  const template = Handlebars.compile(templateText);
  const items = [];
  benefitsContent.querySelectorAll('table tr').forEach((elem, index) => {
    const columns = elem.querySelectorAll('td');
    if (columns.length === 2) {
      const header = columns[0].innerHTML;
      const description = columns[1].innerHTML;
      items.push({
        description,
        header,
        index,
      });
    }
  });
  document.getElementById('benefits-content').innerHTML = template({
    items
  });
  // Loop & wait for Swiper global variable to become available
  const interval = setInterval(() => {
    if (window.Swiper) {
      clearInterval(interval);
      new Swiper('.benefits-swiper', {
        navigation: {
          disabledClass: 'opacity-70',
          nextEl: '.benefits-swiper__button-next',
          prevEl: '.benefits-swiper__button-prev',
        },
        pagination: {
          bulletActiveClass: 'pagination-bars-active',
          bulletClass: 'pagination-bars',
          clickable: true,
          el: '.benefits-swiper__pagination',
          renderBullet: function(index, className) {
            return `<button class="${className} bg-gray-400 h-1 mx-1 rounded-md w-4" type="button"></button>`
          },
        },
      });
    }
  }, 200);
}

function renderFAQ() {
  const faqContent = document.getElementById('raw-faq-content');
  const faqTemplate = document.getElementById('faq-template');
  // Check if faqTemplate exists and is not null
  if (!faqTemplate) {
    return;
  }
  const templateText = faqTemplate.textContent;
  const template = Handlebars.compile(templateText);
  const items = [];
  faqContent.querySelectorAll('table tr').forEach((elem, index) => {
    const columns = elem.querySelectorAll('td');
    if (columns.length === 2) {
      const header = columns[0].innerHTML;
      const description = columns[1].innerHTML;
      items.push({
        description,
        header,
        index,
      });
    }
  });
  document.getElementById('faq-content').innerHTML = template({
    items
  });
}

function renderHero() {
  document.querySelectorAll('#product-hero ul').forEach((elem) => {
    elem.classList.add('space-y-4');
  });
  document.querySelectorAll('#product-hero li').forEach((elem) => {
    const iconClone = document.querySelector('.check-mark-icon').cloneNode(true);
    iconClone.classList.remove('hidden');
    iconClone.classList.add('block', 'mr-2');
    elem.classList.add('flex', 'items-center');
    elem.prepend(iconClone);
  });
}

function renderIngredientList() {
  const ingredientsContent = document.getElementById('raw-ingredients-content');
  const faqTemplate = document.getElementById('ingredients-template');
  // Check if faqTemplate exists and is not null
  if (!faqTemplate) {
    return;
  }
  const templateText = faqTemplate.textContent;
  const template = Handlebars.compile(templateText);
  const items = [];
  ingredientsContent.querySelectorAll('table tr').forEach((elem, index) => {
    const columns = elem.querySelectorAll('td');
    if (columns.length === 2) {
      const title = columns[0].innerHTML;
      const description = columns[1].innerHTML;
      items.push({
        description,
        emptyDescription: description.trim().length === 0 || description.trim() === '&nbsp;',
        index,
        title,
      });
    }
  });
  document.getElementById('ingredients-content').innerHTML = template({
    items
  });
  if (items.length > 6) {
    document.querySelectorAll('.ingredients-element').forEach((elem, index) => {
      if (index >= 6) {
        elem.classList.add('hidden');
      }
    });
    document.getElementById('view-more-ingredients').addEventListener('click', function() {
      document.querySelectorAll('.ingredients-element').forEach((elem) => {
        elem.classList.remove('hidden');
      });
      this.classList.add('hidden');
    });
  } else {
    document.getElementById('view-more-ingredients').classList.add('hidden');
  }
}
let rechargeCheckAttempts = 0;

function adjustRechargeWidget() {
  if (document.querySelector('.rc-selling-plans')) {
    document.getElementById('subscription-details-show').classList.replace('hidden', 'flex');
    const select = document.querySelector('.rc-selling-plans__dropdown');
    const customSelect = document.getElementById('recharge-select');
    if (customSelect) {
      customSelect.classList.remove('hidden');
      const list = customSelect.querySelector('ul');
      for (let i = 0; i < select.options.length; i += 1) {
        const listElement = document.createElement('li');
        listElement.classList.add('select-option');
        listElement.setAttribute('role', 'listitem');
        listElement.dataset.value = select.options[i].value;
        listElement.innerText = select.options[i].label;
        list.appendChild(listElement);
        select.classList.add('hidden');
        customSelect.appendChild(select);
      }
      customSelect.init();
      document.querySelector('.rc-selling-plans').appendChild(customSelect);
      updateAddToCartButtonText();
      document.querySelectorAll('.rc-radio-group__options input[type="radio"]').forEach((elem) => {
        elem.addEventListener('change', updateAddToCartButtonText);
      });
      const originalPriceSpan = document.querySelector('span[data-price-onetime]');
      const discountedPriceSpan = document.querySelector('span[data-price-subsave]');
      const newPriceWrapper = document.createElement('div');
      const newSpan = document.createElement('s');
      newSpan.id = 'pre-sub-price';
      newSpan.innerHTML = originalPriceSpan.innerHTML;
      newSpan.classList.add('mr-2', 'text-orange-400', 'text-base');
      newPriceWrapper.classList.add('flex', 'flex-col', 'ml-auto', 'order-3', 'sm:block');
      newPriceWrapper.appendChild(newSpan);
      newPriceWrapper.appendChild(discountedPriceSpan);
      document.querySelector('span[data-label-subsave]').appendChild(newPriceWrapper);
    }
  } else if (rechargeCheckAttempts < 5) {
    rechargeCheckAttempts += 1;
    setTimeout(adjustRechargeWidget, 300);
  }
}
let sezzleCheckAttempts = 0;

function adjustSezzleWidget() {
  if (document.querySelector('.sezzle-shopify-info-button')) {
    document.getElementById('add-to-cart-button-container').appendChild(document.querySelector('.sezzle-shopify-info-button'));
  } else if (sezzleCheckAttempts < 5) {
    sezzleCheckAttempts += 1;
    setTimeout(adjustSezzleWidget, 300);
  }
}
renderBenefits();
renderFAQ();
renderHero();
renderIngredientList();
adjustRechargeWidget();
adjustSezzleWidget();
document.querySelectorAll('select[data-option-position]').forEach((elem) => {
  elem.addEventListener('change', function() {
    
    let selectsLength = document.querySelectorAll("[data-option-position]").length;
    let variantTitleStringArray = [];
    for(i=1;i<=selectsLength;i++){
      variantTitleStringArray.push(document.querySelector(`[data-option-position='${ i }']`).value);
    }
    // console.log(variantTitleStringArray.join(" / "));
    let stringToMatch = variantTitleStringArray.join(" / ")
    // console.log(window.productCustomData.current_product_json.variants.find(variant => variant.title == stringToMatch));
    let currentVariantJson = window.productCustomData.current_product_json.variants.find(variant => variant.title == stringToMatch)
  
    if(typeof currentVariantJson !== "undefined"){
      document.querySelector(".product-main-section select[name='id']").value = currentVariantJson.id
      document.querySelector(".product-main-section select[name='id']").dispatchEvent(new Event('change'));
    }
    else{
      const position = this.dataset.optionPosition;
      const option = document.querySelector(`select[name="id"] option[data-option-${position}="${this.value}"]`);
      document.querySelector('select[name="id"]').value = option.value;
      document.querySelector('select[name="id"]').dispatchEvent(new Event('change'));

      window.setDefaultAvailableOptions()
      
    }
    
  });
});
document.querySelectorAll('#product-thumbnails .swiper-slide').forEach((elem, index) => {
  elem.addEventListener('click', function() {
    const swiper = document.querySelector('#product-images').swiper;
    swiper.slideTo(index);
    document.querySelectorAll('#product-thumbnails .swiper-slide.opacity-100').forEach((elem) => elem.classList.replace('opacity-100', 'opacity-50'))
    elem.classList.replace('opacity-50', 'opacity-100');
  });
});

function updateAddToCartButtonText() {
  
  let variant = window.getcurrentVariant();
  let currVariantDetails = (variant && typeof variant === "object") ? variant : undefined;  
  let atcParent = document.querySelector(".product-main-section #add-to-cart-button-container")
  let atc_btn = document.querySelector(".product-main-section #add-to-cart-button")
  let sticky_atc_btn_parent = document.querySelector(".product-sticky-header #sticky-add-to-cart-button-container");
  let sticky_atc_btn = document.querySelector(".product-sticky-header #sticky-add-to-cart-button-container #sticky-add-to-cart-button");

  if(currVariantDetails){
    if(currVariantDetails.available){
      atcParent.classList.remove("out_of_stock");
      atcParent.querySelector("[klaviyo-bis-trigger]").style.display = "none";
      // NOTE: Hotfix - Assuming that all products that don't have selling_plan_allocations should show the price
      let price_string = window.strings.product.add_to_cart;
      if (!currVariantDetails.selling_plan_allocations.length) {
        price_string = window.strings.product.add_to_cart + ' | ' + Shopify.formatMoney(currVariantDetails.price, window.moneyFormat);
      }
      atc_btn.querySelector('#product-availability').innerText = price_string;
      atc_btn.removeAttribute("disabled");

      sticky_atc_btn_parent.querySelector("[klaviyo-bis-trigger]").style.display = "none";
      sticky_atc_btn_parent.classList.remove("out_of_stock");
      sticky_atc_btn.querySelector('#product-availability').innerText = price_string;
      
      sticky_atc_btn.removeAttribute("disabled");
      document.querySelector(`.product-main-section [data-button-value]`)?.classList.remove("oos_unavailable");
    }
    else{
      atcParent.classList.add("out_of_stock");
      atcParent.querySelector("[klaviyo-bis-trigger]").style.display = "flex";
      atc_btn.querySelector('#product-availability').innerText = window.strings.product.sold_out;
      atc_btn.setAttribute("disabled", true);
      
      sticky_atc_btn_parent.querySelector("[klaviyo-bis-trigger]").style.display = "flex";
      sticky_atc_btn_parent.classList.add("out_of_stock");
      sticky_atc_btn.querySelector('#product-availability').innerText = window.strings.product.sold_out;
      sticky_atc_btn.setAttribute("disabled", true);
      document.querySelector(`.product-main-section [data-button-value]`)?.classList.add("oos_unavailable");
    }
  }
  else{
    atcParent.classList.remove("out_of_stock");
    atcParent.querySelector(".klaviyo-bis-trigger").style.display = "none";
    atc_btn.querySelector('#product-availability').innerText = window.strings.product.unavailable;
    atc_btn.setAttribute("disabled", true);

    sticky_atc_btn_parent.querySelector(".klaviyo-bis-trigger").style.display = "none";
    sticky_atc_btn_parent.classList.remove("out_of_stock");
    sticky_atc_btn.querySelector('#product-availability').innerText = window.strings.product.unavailable;
    sticky_atc_btn.setAttribute("disabled", true);
    document.querySelector(`.product-main-section [data-button-value]`)?.classList.remove("oos_unavailable");
  }
  
  // const button = document.getElementById('add-to-cart-button');
  // const select = document.querySelector('select[name="id"]');
  // const selectedOption = select.options[select.selectedIndex];
  // const quantity = document.querySelector('input[name="quantity"]').value;
  // const {
  //   format
  // } = new Intl.NumberFormat('en-US', {
  //   style: 'currency',
  //   currency: Shopify.currency.active
  // });
  // if (selectedOption.dataset.available === 'true') {
  //   button.classList.remove('opacity-70');
  //   button.removeAttribute('disabled');
  //   let totalUnits = parseInt(quantity, 10);
  //   let totalPrice = (parseFloat(selectedOption.dataset.price) / 100);
  //   if (document.getElementById('pre-sub-price')) {
  //     document.getElementById('pre-sub-price').innerText = format(totalPrice);
  //   }
  //   document.querySelectorAll('.rc-radio-group__options input[type="radio"]').forEach((elem) => {
  //     if (elem.checked && elem.value === 'subsave') {
  //       totalPrice = totalPrice - (totalPrice * 0.15);
  //     }
  //   });
  //   totalPrice *= parseInt(quantity, 10);
  //   document.querySelectorAll('.bundle-option:checked').forEach((elem) => {
  //     totalUnits += 1;
  //     totalPrice += (parseFloat(elem.dataset.price) / 100);
  //   });
  //   if(document.getElementById('total-price')){
  //     document.getElementById('total-price').innerText = format(totalPrice);      
  //   }
  //   if(document.getElementById('product-availability')){
  //     document.getElementById('product-availability').innerText = `ADD ${totalUnits} UNIT${totalUnits > 1 ? 'S' : ''} TO CART`;
  //   }
  // } else {
  //   button.classList.add('opacity-70');
  //   button.setAttribute('disabled', 'disabled');
  //   if(document.getElementById('product-availability')){
  //     document.getElementById('product-availability').innerText = 'Sold Out';
  //   }
  // }
  
}
// Check if the select element exists before adding the event listener
const selectElement = document.querySelector('select[name="id"]');
if (selectElement) {
  selectElement.addEventListener('change', function() {
    // Your event listener logic here...
    const option = this.options[this.selectedIndex];
    const value = this.value;
    // console.log(value);
    const {
      format
    } = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: Shopify.currency.active
    });
    document.querySelectorAll('.product-price').forEach((elem) => {
      elem.innerText = format(parseFloat(option.dataset.price) / 100);
    });
    updateAddToCartButtonText();
    document.querySelectorAll('#product-images .swiper-slide').forEach((elem, index) => {
      const swiper = document.querySelector('#product-images')?.swiper;
      if (value === elem.dataset.variantId && swiper) {
        swiper.slideTo(index);
      }
    });
    if (document.querySelector(`div[data-variant-sfp="${value}"]`)) {
      document.querySelectorAll('div[data-variant-sfp]').forEach((elem) => {
        if (elem.dataset.variantSfp === value) {
          elem.classList.remove('hidden');
        } else {
          elem.classList.add('hidden');
        }
      });
      document.querySelectorAll('.main-product-sfp').forEach((elem) => elem.classList.add('hidden'));
    } else {
      document.querySelectorAll('div[data-variant-sfp]').forEach((elem) => elem.classList.add('hidden'));
      document.querySelectorAll('.main-product-sfp').forEach((elem) => elem.classList.remove('hidden'));
    }
    const hash = window.location.hash;
    const params = new URLSearchParams(window.location.search);
    params.delete('variant');
    params.append('variant', value);
    // console.log("Change Variant", value);
    history.replaceState({}, '', `?${params.toString()}${hash || ''}`);
    window.variantChanged(value);
  });
} else {
  // console.error("Select element with name 'id' not found.");
}
// Check if the form element exists before adding the event listener
const formElement = document.querySelector('form[action="/cart/add"]');
if (formElement) {

  formElement.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const {
      length
    } = document.querySelectorAll('.bundle-option:checked');
    if (length > 0) {
      const modal = document.getElementById('bundle-modal');
      if (modal) {
        document.querySelectorAll('.bundle-option:checked').forEach((elem) => {
          document.querySelector(`#bundle-modal div[data-product="${elem.value}"]`).classList.remove('hidden');
        });
        modal.classList.replace('opacity-0', 'opacity-100');
        modal.classList.replace('hidden', 'flex');
      }
    } else { 
      const formData = new FormData(this);
      const payload = {};
      const properties = {};
      for (const [key, value] of formData.entries()) {
        if(key.includes("properties[")){
          let newKey = key.replace("properties[", "").replace("]", "");
          // properties.push(newKey, value)
          properties[newKey] = value
        }
        
        if (payload[key]) {
          payload[key] = [].concat(payload[key], value);
        } else {
          payload[key] = value;
        }
      }

      let freeProdDetails = [];
      // console.log("payload:: ", payload)
      if(window.isSelectedOptionIsOnetimeOrSubscription() == "subscription" && window.productCustomData.free_trial_kit){
        freeProdDetails = window.getFreeProductDetais();
        payload["selling_plan"] = freeProdDetails.updatedSellingPlan;
        payload["id"] = freeProdDetails.updatedVariantId;
        // properties.push('_subscription_only', "yes")
        properties["_subscription_only"] = "yes";
      }

      payload["properties"] = properties

      window.tempPayload = payload;
      
      const config = {
        headers: {
          'Accept': 'application/javascript',
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify(payload),
      };
      fetch('/cart/add', config).then((response) => response.json())
      .then((response) => {

        console.log("response::", response);
        
        if (response.status) {
          console.error(response);
          return;
        }
        
        // check for A/B class, if exists than and wait for popup.
        const elem = document.querySelector(".A-B-subscription-upgrade");
        if (elem && getComputedStyle(elem).display === "block" || (elem && getComputedStyle(elem).display === "block")) {      
          window.upgradeToSubscription(response.key);
        }
        
      }).catch((e) => {
        console.error(e);
      }).finally(() => {
        openCartMenu();
      });
    }
  });
} else {
  // console.error("Form element with action '/cart/add' not found.");
}
document.querySelectorAll('.bundle-option').forEach((elem) => {
  elem.addEventListener('change', updateAddToCartButtonText);
});
// Check if the input element exists before adding the event listener
const quantityInput = document.querySelector('input[name="quantity"]');
if (quantityInput) {
  quantityInput.addEventListener('change', updateAddToCartButtonText);
} else {
  // console.error("Input element with name 'quantity' not found.");
}

function closeBundleModal() {
  const modal = document.getElementById('bundle-modal');
  if (modal) {
    modal.classList.replace('opacity-100', 'opacity-0');
    modal.classList.replace('flex', 'hidden');
    document.querySelectorAll('#bundle-modal div[data-product]').forEach((elem) => {
      elem.classList.add('hidden');
    });
  }
}
// Check if the element exists before adding the event listener
const bundleModalCloseButton = document.querySelector('#bundle-modal .modal-close');
if (bundleModalCloseButton) {
  bundleModalCloseButton.addEventListener('click', closeBundleModal);
} else {
  // console.error("Bundle modal close button element not found.");
}
// Check if the element exists before adding the event listener
const bundleModalAddToCartButton = document.getElementById('bundle-modal__add-to-cart');
if (bundleModalAddToCartButton) {
  bundleModalAddToCartButton.addEventListener('click', function() {
    // Your event listener logic here...
    const bundleId = `${document.getElementById('product-id').innerText}-${new Date().getTime()}`;
    const items = [{
      id: parseInt(document.querySelector('select[name="id"]').value, 10),
      properties: {
        bundle_id: bundleId,
        bundle_type: 'PARENT',
      },
      quantity: parseInt(document.querySelector('input[name="quantity"]').value, 10),
    }];
    document.querySelectorAll('#bundle-modal select').forEach((elem) => {
      const parent = elem.closest('div[data-product]');
      if (parent.classList.contains('hidden') === false) {
        items.push({
          id: parseInt(elem.value, 10),
          properties: {
            bundle_id: bundleId,
            bundle_type: 'CHILD',
          },
          quantity: 1,
        });
      }
    });
    const config = {
      headers: {
        'Accept': 'application/javascript',
        'Content-Type': 'application/json',
      },
      method: 'POST',
      'X-Requested-With': 'XMLHttpRequest',
    };
    config.body = JSON.stringify({
      items
    });
    fetch('/cart/add', config).then((response) => response.json()).then((response) => {
      if (response.status) {
        console.error(response);
        return;
      }
    }).catch((e) => {
      console.error(e);
    }).finally(() => {
      closeBundleModal();
      openCartMenu();
    });
  });
} else {
  // console.error("Bundle modal add to cart button element not found.");
}
document.querySelectorAll('#sticky-nav a').forEach((elem) => {
  elem.addEventListener('click', function() {
    if (this.getAttribute('href') !== '#buy-now') {
      document.querySelectorAll('#sticky-nav a').forEach((elem) => elem.classList.remove('sticky-nav-highlight'));
      elem.classList.add('sticky-nav-highlight');
    }
  });
});
document.querySelectorAll('.metafield-cleanup span').forEach((elem) => elem.removeAttribute('style'));
// Loop & wait for Swiper global variable to become available
const interval = setInterval(() => {
  if (window.Swiper) {
    clearInterval(interval);
    new Swiper('#product-images', {
      effect: 'fade',
      fadeEffect: {
        crossFade: true,
      },
    });
    // Check if the select element exists before dispatching the event
    const selectElement = document.querySelector('select[name="id"]');
    if (selectElement) {
      selectElement.dispatchEvent(new Event('change'));
    } else {
      // console.error("Select element with name 'id' not found.");
    }
  }
}, 200);
const intersectionObserver = new IntersectionObserver(function(entries) {
  if (entries[0].intersectionRatio <= 0) return;
  const overlay = document.getElementById('buy-overlay-menu');
  if (overlay) {
    overlay.classList.replace('hidden', 'flex');
    setTimeout(() => overlay.classList.replace('translate-y-24', 'translate-y-0'), 200);
  }
});
if (window.innerWidth < 640) {
  const button = document.getElementById('add-to-cart-button');
  if (button) {
    intersectionObserver.observe(button);
  }
}
document.querySelectorAll('.anchor-link').forEach((elem) => {
  elem.addEventListener('click', function(event) {
    event.preventDefault();
    const href = this.getAttribute('href');
    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView(true);
    }
  });
});
// Check if the element exists before adding the event listener
const subscriptionDetailsShow = document.getElementById('subscription-details-show');
if (subscriptionDetailsShow) {
  subscriptionDetailsShow.addEventListener('mouseenter', function() {
    // Your event listener logic here...
    document.getElementById('subscription-details-menu').classList.remove('hidden');
    document.getElementById('subscription-details-menu').classList.replace('opacity-0', 'opacity-100');
  });
} else {
  // console.error("Element with ID 'subscription-details-show' not found.");
}
// Check if the element exists before adding the event listener
const subscriptionDetailsShowMouseLeave = document.getElementById('subscription-details-show');
if (subscriptionDetailsShowMouseLeave) {
  subscriptionDetailsShowMouseLeave.addEventListener('mouseleave', function() {
    // Your event listener logic here...
    document.getElementById('subscription-details-menu').classList.replace('opacity-100', 'opacity-0');
    setTimeout(() => {
      document.getElementById('subscription-details-menu').classList.add('hidden');
    }, 100);
  });
} else {
  // console.error("Element with ID 'subscription-details-show' not found.");
}