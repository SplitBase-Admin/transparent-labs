class Accordion extends HTMLElement {
  constructor() {
    super();

    const button = this.querySelector('button');
    const container = this.querySelector('div[role="region"]');
    const plusIcon = this.querySelector('.plus-icon');

    if (button && container && plusIcon) {
      button.addEventListener('click', function() {
        if (container.classList.contains('max-h-0')) {
          container.classList.remove('max-h-0');
          plusIcon.classList.add('rotate-45');
        } else {
          container.classList.add('max-h-0');
          plusIcon.classList.remove('rotate-45');
        }
      });
    }
  }
}

class CategoryQuickAdd extends HTMLElement {
  constructor() {
    super();

    const closeButton = this.querySelector('button.dialog-close');
    const modal = this.querySelector('div[role="dialog"]');
    const openButton = this.querySelector('button.dialog-open');
    const submitButton = this.querySelector('button[type="submit"]');

    if (closeButton && modal && openButton) {
      closeButton.addEventListener('click', function() {
        modal.classList.replace('opacity-100', 'opacity-0');

        setTimeout(() => {
          modal.classList.replace('block', 'hidden');
        }, 200);
      });

      openButton.addEventListener('click', function() {
        modal.classList.replace('hidden', 'block');

        setTimeout(() => {
          modal.classList.replace('opacity-0', 'opacity-100');
        }, 200);
      });
    }

    this.querySelector('select[name="id"]').addEventListener('change', function() {
      const option = this.options[this.selectedIndex];

      if (option.dataset.available === 'true') {
        submitButton.classList.add('border-blue-400', 'text-blue-400');
        submitButton.classList.remove('border-gray-400', 'opacity-70', 'text-gray-400');

        submitButton.removeAttribute('disabled');

        submitButton.innerHTML = 'Quick Add';
      } else {
        submitButton.classList.remove('border-blue-400', 'text-blue-400');
        submitButton.classList.add('border-gray-400', 'opacity-70', 'text-gray-400');

        submitButton.setAttribute('disabled', 'disabled');

        submitButton.innerHTML = 'Sold Out';
      }
    });

    this.querySelector('form[action="/cart/add"]').addEventListener('submit', function(event) {
      event.preventDefault();

      const config = {
        headers: {
          'Accept': 'application/javascript',
          'Content-Type': 'application/json',
        },
        method: 'POST',
        'X-Requested-With': 'XMLHttpRequest',
      };

      config.body = JSON.stringify({
        id: this.querySelector('select[name="id"]').value,
        quantity: this.querySelector('input[name="quantity"]').value,
      });

      fetch('/cart/add', config)
        .then((response) => response.json())
        .then((response) => {
          if (response.status) {
            console.error(response);

            return;
          }
        })
        .catch((e) => {
          console.error(e);
        })
        .finally(() => {
          if (submitButton) {
            submitButton.classList.add('bg-blue-400', 'text-white');
            submitButton.classList.remove('text-blue-400');

            submitButton.innerHTML = 'ADDED!';

            setTimeout(() => {
              submitButton.classList.remove('bg-blue-400', 'text-white');
              submitButton.classList.add('text-blue-400');

              submitButton.innerHTML = 'Quick Add';
            }, 1000);
          }

          openCartMenu();
        });
    });
  }
}

class CustomSelect extends HTMLElement {
  constructor() {
    super();

    this.init();
    console.log("CustomSelect::::: ", this)
  }
  
  connectedCallback() {
    // console.log("Custom element added to page.");
  }

  init() {
    const button = this.querySelector('button');
    const list = this.querySelector('ul');
    const select = this.querySelector('select');
    const variantDrawerWrapper = this.querySelector('[variant-drawer-wrapper]');
    const closeVariantDrawer = this.querySelector('.close-variant-drawer');
    const documentBody = document.body;

    function closeList() {
      button?.classList.remove('border-blue-400');
      button?.classList.add('border-gray-400', 'border-opacity-20');

      list.classList.replace('opacity-100', 'opacity-0');
      variantDrawerWrapper?.classList.replace('opacity-100', 'opacity-0');
      documentBody.classList.remove("variant-drawer-open")
      setTimeout(function(){
        list.classList.add('hidden');
        variantDrawerWrapper?.classList.add('hidden')
      }, 150)
      // setTimeout(() => list.classList.add('hidden'), 150);
    }

    function openList() {
      button?.classList.add('border-blue-400');
      button?.classList.remove('border-gray-400', 'border-opacity-20');

      list.classList.remove('hidden');
      variantDrawerWrapper?.classList.remove('hidden');
      documentBody.classList.add("variant-drawer-open")
      setTimeout(function(){
        list.classList.replace('opacity-0', 'opacity-100');
        variantDrawerWrapper?.classList.replace('opacity-0', 'opacity-100')
      }, 50)
      // setTimeout(() => list.classList.replace('opacity-0', 'opacity-100'), 50);
    }    

    if (button && list && select) {
      button.addEventListener('click', function() {
        if (list.classList.contains('hidden')) {
          openList();
        } else {
          closeList();
        }
      });
 
      window.addEventListener('click', function(event) {
        try {
          const isTriggerBtnClicked = event.target.closest('button[aria-haspopup="listbox"]');
          const isInsideDrawerWrapper = event.target.closest('.variant-drawer-wrapper');
          const hasDrawerWrapperClass = event.target.classList?.contains('variant-drawer-wrapper'); // removed extra '.'
      
          // Safely check elements before accessing classList
          const listVisible = list?.classList?.contains('hidden') === false;
          const drawerVisible = variantDrawerWrapper?.classList?.contains('hidden') === false;
      
          if (!isTriggerBtnClicked && !hasDrawerWrapperClass && !isInsideDrawerWrapper && (listVisible || drawerVisible)) {
            closeList();
          }
        } catch (error) {
          console.error('Error handling click event:', error);
        }
      });


      closeVariantDrawer?.addEventListener("click", function(){
        console.log("Close called from close button!!");
        closeList()
      });
    }

     this.querySelectorAll('li').forEach((elem) => {
      elem.addEventListener('click', function() {
        const { value } = this.dataset;

        select.value = value;
        select.dispatchEvent(new Event('change'));

        if(button){
          button.querySelector('.text').innerHTML = this.innerHTML;
        }

        list.querySelectorAll('li').forEach((option) => {
          if (option.dataset.value === elem.dataset.value) {
            option.classList.add('select-option--active');
            option.setAttribute('aria-selected', 'true');
          } else {
            option.classList.remove('select-option--active');
            option.setAttribute('aria-selected', 'false');
          }
        });
        closeList();
      });
    });

    this.querySelector(`li[data-value="${select.value}"]`).dispatchEvent(new Event('click'));
  }
}

class LazyImage extends HTMLElement {
  constructor() {
    super();

    const lazyImage = this.querySelector('img[data-src]');
    const placeholderImage = this.querySelector('img[data-placeholder]');

    const intersectionObserver = new IntersectionObserver(function(entries) {
      if (entries[0].intersectionRatio <= 0) return;

      if (lazyImage.getAttribute('src')) {
        return;
      }

      lazyImage.addEventListener('load', function() {
        placeholderImage.classList.replace('z-10', 'z-0');
        lazyImage.classList.replace('z-0', 'z-10');
        lazyImage.classList.replace('opacity-0', 'opacity-100');

        setTimeout(() => {
          placeholderImage.classList.add('opacity-0');
        }, 200);
      });

      lazyImage.setAttribute('src', lazyImage.dataset.src);
    });

    if (this.closest('.swiper-wrapper')) {
      intersectionObserver.observe(this.closest('.swiper-wrapper'));
    } else {
      intersectionObserver.observe(placeholderImage);
    }
  }
}


// class ProductGridItem extends HTMLElement {
//   constructor() {
//     super();

//     const button = this.querySelector('button[type="submit"]');
//     const images = this.querySelectorAll('.swiper-slide');
//     const prices = this.querySelectorAll('.variant-price');
//     const swiperElem = this.querySelector('.swiper');

//     this.querySelector('select[name="id"]').addEventListener('change', function() {
//       const option = this.options[this.selectedIndex];
//       let index = -1;

//       if (option.dataset.available === 'true') {
//         button.classList.add('border-blue-400', 'text-blue-400');
//         button.classList.remove('border-gray-400', 'opacity-70', 'text-gray-400');

//         button.removeAttribute('disabled');

//         button.innerHTML = 'Quick Add';
//       } else {
//         button.classList.remove('border-blue-400', 'text-blue-400');
//         button.classList.add('border-gray-400', 'opacity-70', 'text-gray-400');

//         button.setAttribute('disabled', 'disabled');

//         button.innerHTML = 'Sold Out';
//       }

//       for (let i = 0; i < prices.length; i += 1) {
//         prices[i].classList.add('hidden');

//         if (prices[i].dataset.variantId === this.value) {
//           prices[i].classList.remove('hidden');
//         }
//       }

//       for (let i = 0; i < images.length; i += 1) {
//         if (images[i].dataset.variantId === this.value) {
//           index = i;
//         }
//       }

//       if (index > -1) {
//         swiperElem.swiper.slideTo(index);
//       }
//     });

//     this.querySelector('form[action="/cart/add"]').addEventListener('submit', function(event) {
//       event.preventDefault();

//       const config = {
//         headers: {
//           'Accept': 'application/javascript',
//           'Content-Type': 'application/json',
//         },
//         method: 'POST',
//         'X-Requested-With': 'XMLHttpRequest',
//       };

//       config.body = JSON.stringify({
//         id: this.querySelector('select[name="id"]').value,
//         quantity: this.querySelector('input[name="quantity"]').value,
//       });

//       fetch('/cart/add', config)
//         .then((response) => response.json())
//         .then((response) => {
//           if (response.status) {
//             console.error(response);

//             return;
//           }
//         })
//         .catch((e) => {
//           console.error(e);
//         })
//         .finally(() => {
//           if (button) {
//             button.classList.add('bg-blue-400', 'text-white');
//             button.classList.remove('text-blue-400');

//             button.innerHTML = 'ADDED!';

//             setTimeout(() => {
//               button.classList.remove('bg-blue-400', 'text-white');
//               button.classList.add('text-blue-400');

//               button.innerHTML = 'Quick Add';
//             }, 1000);
//           }

//           openCartMenu();
//         });
//     });
//   }
// }

class QuantityInput extends HTMLElement {
  constructor() {
    super();

    const input = this.querySelector('input');
    const allowZero = this.dataset.allowZero !== undefined;

    if (input && this.querySelectorAll('button').length === 2) {
      const minus = this.querySelectorAll('button')[0];
      const plus = this.querySelectorAll('button')[1];

      minus.addEventListener('click', function() {
        const value = parseInt(input.value, 10);
        let min = 0;

        if (allowZero) {
          min = 0;
        }

        if (value > min) {
          input.value = value - 1;
          input.dispatchEvent(new Event('change'));
        }
      });

      plus.addEventListener('click', function() {
        const value = parseInt(input.value, 10);

        input.value = value + 1;
        input.dispatchEvent(new Event('change'));
      });
    }
  }
}

class Tabs extends HTMLElement {
  constructor() {
    super();

    const altMode = this.dataset.mode === 'alt';

    const tabControls = this.querySelectorAll('div[role="tablist"] button');
    const tabPanels = this.querySelectorAll('div[role="tabpanel"]');

    tabControls.forEach((elem) => {
      elem.addEventListener('click', function() {
        tabPanels.forEach((elem) => elem.classList.add('hidden'));
        tabControls.forEach((elem) => {
          if (altMode) {
            if (elem.id === this.id) {
              this.classList.replace('border-transparent', 'border-blue-light');
            } else {
              elem.classList.replace('border-blue-light', 'border-transparent');
            }
          } else if (elem.id === this.id) {
            this.classList.add('tab-header--active');
          } else {
            elem.classList.remove('tab-header--active');
          }
        });

        document.getElementById(`${this.getAttribute('aria-controls')}`).classList.remove('hidden');
      });
    });

    if (altMode && window.innerWidth >= 768 && tabPanels.length > 0) {
      tabPanels[0].classList.remove('hidden');
    }
  }
}

customElements.define('category-quick-add', CategoryQuickAdd);
customElements.define('custom-accordion', Accordion);
customElements.define('custom-select', CustomSelect);
customElements.define('lazy-image', LazyImage);
// customElements.define('product-grid-item', ProductGridItem);
customElements.define('quantity-input', QuantityInput);
customElements.define('custom-tabs', Tabs);

function check_option_(collection_pid) 
{
  var id= $("#product-select_"+collection_pid+"").val();
  if(id == '000')
  {
      $(".submit-stack-products_"+collection_pid+"").text("Unavailable"); 
      $(".submit-stack-products_"+collection_pid+"").addClass("opacity-70"); 
      $(".submit-stack-products_"+collection_pid+"").prop('disabled', true);
  }
  else if(id == '')
  {
    $(".submit-stack-products_"+collection_pid+"").text("Sold Out"); 
      $(".submit-stack-products_"+collection_pid+"").addClass("opacity-70"); 
      $(".submit-stack-products_"+collection_pid+"").prop('disabled', true);
  }
  else
  {
    var selling_plan_val = $("input[name='purchase_option_"+collection_pid+"']:checked").val();
    if(selling_plan_val == "onetime")
    {
        $(".p1_selling_plan_"+collection_pid+" [data-stack]").each(function(i,Data)
        {
          var vid = parseInt($(Data).data("stack"));
          if(vid == id)
          {
              var otpprice = $(Data).data("otp");
              var new_price = $(Data).data("price");
              $(".real_price_"+collection_pid+"").text("");
              $(".com_price_"+collection_pid+"").text(otpprice);  
          }
      });
      var avail = $("#product-available_"+collection_pid+"").val();
      if(avail == 'true') 
      {
        $(".submit-stack-products_"+collection_pid+"").text("Add to Cart"); 
        $(".submit-stack-products_"+collection_pid+"").removeClass("opacity-70"); 
        $(".submit-stack-products_"+collection_pid+"").prop('disabled', false);
      }
      else
      {
        $(".submit-stack-products_"+collection_pid+"").text("Sold Out"); 
        $(".submit-stack-products_"+collection_pid+"").addClass("opacity-70"); 
        $(".submit-stack-products_"+collection_pid+"").prop('disabled', true);
      }
    }
    else if(selling_plan_val == "subsave")
    {
      $(".p1_selling_plan_"+collection_pid+" [data-stack]").each(function(i,Data)
      {
         var vid = parseInt($(Data).data("stack"));
         if(vid == id)
         {
            var otpprice = $(Data).data("otp");
            var new_price = $(Data).data("price");
            $(".real_price_"+collection_pid+"").text(otpprice);
            $(".com_price_"+collection_pid+"").text(new_price);  
          }
       });
      var avail = $("#product-available_"+collection_pid+"").val();
      if(avail == 'true') 
      {
        $(".submit-stack-products_"+collection_pid+"").text("Subscribe"); 
        $(".submit-stack-products_"+collection_pid+"").removeClass("opacity-70"); 
        $(".submit-stack-products_"+collection_pid+"").prop('disabled', false);
      }
      else
      {
        $(".submit-stack-products_"+collection_pid+"").text("Sold Out"); 
        $(".submit-stack-products_"+collection_pid+"").addClass("opacity-70"); 
        $(".submit-stack-products_"+collection_pid+"").prop('disabled', true);
      }
    }
    else
    {
      var avail = $("#product-available_"+collection_pid+"").val();
      if(avail == 'true') 
      {
        $(".submit-stack-products_"+collection_pid+"").text("Add to Cart"); 
        $(".submit-stack-products_"+collection_pid+"").removeClass("opacity-70"); 
        $(".submit-stack-products_"+collection_pid+"").prop('disabled', false);
      }
      else
      {
        $(".submit-stack-products_"+collection_pid+"").text("Sold Out"); 
        $(".submit-stack-products_"+collection_pid+"").addClass("opacity-70"); 
        $(".submit-stack-products_"+collection_pid+"").prop('disabled', true);
      }
    }
      
  }
}


function submit_onclick(collection_pid) 
{
    var selling_plan_val= "";
    var items = [];
    var selling_plan_val = $(".selling_plan_"+collection_pid+"").val();
    var choosen_option = $("input[name='purchase_option_"+collection_pid+"']:checked").val();
  
  
    if(choosen_option == 'onetime')
    {
        $(".stack-products_"+collection_pid+"").find(".stack-text").each(function (i,data)
        {
            items.push({
                id: parseInt($(data).find('.stack_vid3').val()),
                quantity:$("#stack-products_qty_"+collection_pid+"").val()
            });
        });
    }
    else if(choosen_option == 'subsave')
    {
        $(".stack-products_"+collection_pid+"").find(".stack-text").each(function (i,data)
        {
          console.log(data);
            //var stack_id = new Date().getTime().toString();
        	var stack_id = $(data).find('.'+selling_plan_val).attr('data-stack');
           
            var ssselling_plan = parseInt($(data).find('.'+selling_plan_val).val());
            
            items.push({
                id: parseInt($(data).find('.stack_vid3').val()),
                quantity:$("#stack-products_qty_"+collection_pid+"").val(),
                selling_plan: parseInt($(data).find('.'+selling_plan_val).val())
        	});
        }); 
      }
      else
      {
          $(".stack-products_"+collection_pid+"").find(".stack-text").each(function (i,data)
          {
              items.push({
                    id: parseInt($(data).find('.stack_vid3').val()),
                    quantity:$("#stack-products_qty_"+collection_pid+"").val()
                });
            });  
      }

          //     console.log("Items",items); 
                  Shopify.queue = [];
                  Shopify.queue = items;
                  var quantity = 1;
              	Shopify.moveAlong = function() {
                  // If we still have requests in the queue, let's process the next one.
                  if (Shopify.queue.length) 
                  {
                  	var request = Shopify.queue.shift();
                    //console.log("request",request); 
                      var data = 'id='+ request.variantId + '&quantity=1'
                      $.ajax({
                      	type: 'POST',
                          url: '/cart/add.js',
                          dataType: 'json',
                          data: request,
                          success: function(res)
                        	{
                                var butn_text = $(".submit-stack-products_"+collection_pid+"").text();
                                 console.log(res);
                                // if(butn_text == "Add to Cart")
                                // {
                                //     $(".submit-stack-products_"+collection_pid+"").text("Adding");
                                // }
                                // else
                                // {
                                //     $(".submit-stack-products_"+collection_pid+"").text("Subscribing...");
                                // }
                                
                          	Shopify.moveAlong();
                              quantity += 1;
                          },
                          error: function()
                        	{
                          	// if it's not last one Move Along else update the cart number with the current quantity
                              if (Shopify.queue.length)
                              {
                              	Shopify.moveAlong()
                              } 
                            	else 
                              {
                                $.getJSON('/cart.js', function(cart) 
                                {
                                  if(cart.item_count < 1 )
                                  {
                                    $('#cart-count').html("");
                                  }
                                  else
                                  {
                                    $('#cart-count').html("<number class='number'>"+cart.item_count+"</number>");
                                  }
                                    
                                });
                              	//window.location="/cart";
                                  openCartMenu();
                              }
                        	}
              		});
              	}
              	// If the queue is empty, we add 1 to cart
                  else 
                  {
                  	quantity += 1;
                    	
                      $.getJSON('/cart.js', function(cart) 
                      {
                        if(cart.item_count < 1 )
                        {
                          $('#cart-count').html("");
                        }
                        else
                        {
                          $('#cart-count').html("<number class='number'>"+cart.item_count+"</number>");
                        }
                          
                      });
                      //window.location="/cart";
                      openCartMenu();
                     var butn_text = $(".submit-stack-products_"+collection_pid+"").text();
                        
                        // if(butn_text == "Adding")
                        // {
                        //     console.log(butn_text);
                        //     $(".submit-stack-products_"+collection_pid+"").text("Add to Cart");
                        // }
                        // else
                        // {
                        //     console.log(butn_text);
                        //     $(".submit-stack-products_"+collection_pid+"").text("Subscribe");  
                        // }
              	}
              };
              Shopify.moveAlong();
};
  
