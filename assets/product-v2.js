(function e(){var e=document.createElement("script");e.type="text/javascript",e.async=true,e.src="//staticw2.yotpo.com/BTTbhJYlSrhgxyxq7pzHkXai0lo0iExD0uiVbjEZ/widget.js";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)})();

// Loop & wait for Swiper global variable to become available
var productimages = document.getElementById('product-images');
  if(productimages == null)
  {
    
  } 
else
  {
    const interval = setInterval(() => {
  if (window.Swiper) {
    clearInterval(interval);

    const imageSwiper = new Swiper('#product-images', {
      breakpoints: {
        640: {
          slidesPerView: 2.5,
        },
        1024: {
          slidesPerView: 3.5,
        },
        1280: {
          slidesPerView: 1,
        },
      },
      centeredSlides: true,
      slidesPerView: 1.5,
    });

    const thumbnailSwiper = new Swiper('#product-thumbnails', {
      direction: 'vertical',
      navigation: {
        nextEl: '.swiper-next',
        prevEl: '.swiper-prev',
      },
      slidesPerView: 'auto',
      spaceBetween: 16,
    });

    imageSwiper.thumbs.swiper = thumbnailSwiper;
    imageSwiper.thumbs.init();

    document.querySelector('select[name="id"]').dispatchEvent(new Event('change'));
  }
}, 200);
  }


document.querySelectorAll('form[action="/cart/add"]').forEach((form) => {
  form.addEventListener('submit', async function(event) {
    event.preventDefault();

    const bundleId = `${document.querySelector('select[data-productid]')?.dataset.productid}-${new Date().getTime()}`;
    const items = [{
      id: this.querySelector('select[name="id"]').value,
      quantity: this.querySelector('input[name="quantity"]').value,
      properties: {
        bundle_id: bundleId,
        bundle_type: 'PARENT',
      },
    }];

    document.querySelectorAll('.bundle-option:checked').forEach((elem) => {
      const select = elem.parentNode.querySelector('select[name="id"]');

      if (select) {
        items.push({
          id: select.value,
          quantity: 1,
          properties: {
            bundle_id: bundleId,
            bundle_type: 'CHILD',
          },
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

    config.body = JSON.stringify({ items });

    fetch('/cart/add', config)
      .then((response) => response.json())
      .then((response) => {
        if (response.status) {
          console.error(response);

          return;
        }

        console.log(response);
      })
      .catch((e) => {
        console.error(e);
      })
      .finally(() => {
        openCartMenu();
      });
  });
});

document.querySelectorAll('input[data-option-position]', 'select[data-option-position]').forEach((elem) => {
  elem.addEventListener('change', function() {
    const position = this.dataset.optionPosition;
    const option = document.querySelector(`select[name="id"] option[data-option-${position}="${this.value}"]`);

    document.querySelector('select[name="id"]', 'input[name="id"]').value = option.value;
    document.querySelector('select[name="id"]', 'input[name="id"]').dispatchEvent(new Event('change'));
  });
});

document.querySelector('select[name="id"]', 'input[name="id"]').addEventListener('change', function() {
  const value = this.value;
  const button = document.getElementById('add-to-cart-button');
  const selectedOption = this.options[this.selectedIndex];
  var vid = $("input[name='id']").val();

  var selected_op1 = $(selectedOption).attr('data-option-1');
  
  
var data_ids='';
  var dataoption2=[];
  $("select[name='id'] option").each(function(i,item){  
    if(selected_op1 ==  $(this).data('option-1')){
      dataoption2.push($(this).data('option-2'));
      data_ids = $("select[name='id']").data('productid');
    }
  });

  
    $("#select-two2_" + data_ids + " option").each(function(i, newdata) {
      if ($.inArray(newdata.value, dataoption2) !== -1) {
        $(newdata).prop('disabled', false); // Enable option if it matches
      } else {
        if (newdata.value == $("#select-two2_" + data_ids).val()) {
          $("#select-two2_" + data_ids).val(dataoption2[0]);
          $("#select-two2_" + data_ids).trigger('change');
        }
        $(newdata).prop('disabled', true); // Disable option if it doesn't match
      }
    });
  
  function showbackinstock() 
  {
    $("#hideme").show();
  }
    if (vid == '000') 
    {
        // button.classList.add('opacity-70');
        // button.setAttribute('disabled', 'disabled');
        // document.getElementById('product-availability').innerText = 'Unavailable';
    } 
    else if(vid == '')
    {
        button.classList.add('opacity-70');
        button.setAttribute('disabled', 'disabled');
        document.getElementById('product-availability').innerText = 'Sold Out';
       setTimeout(showbackinstock, 1000);
    }
    else
    {
      
      var selling_plan_val = $("input[name='newpurchaseoption']:checked").val();
      if(selling_plan_val == "onetime")
      {
        if (selectedOption.dataset.available === 'true') 
        {
            button.classList.remove('opacity-70');
            button.removeAttribute('disabled');
            document.getElementById('product-availability').innerText = 'Add to Cart';
        }
        else
        {
            button.classList.add('opacity-70');
            button.setAttribute('disabled', 'disabled');
            document.getElementById('product-availability').innerText = 'Sold Out';
        }
      }
      else if(selling_plan_val == "subsave")
      {
        if (selectedOption.dataset.available === 'true') 
        {
          button.classList.remove('opacity-70');
          button.removeAttribute('disabled');
          document.getElementById('product-availability').innerText = 'Subscribe';
        }
        else
        {
            button.classList.add('opacity-70');
            button.setAttribute('disabled', 'disabled');
            document.getElementById('product-availability').innerText = 'Sold Out';
        }
        
      }  
    }

  if (document.querySelector(`div[data-variant-sfp="${value}"]`)) {
    document.querySelectorAll('div[data-variant-sfp]').forEach((elem) => {
      if (elem.dataset.variantSfp === value) {
        
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

  document.querySelectorAll('#product-images div[data-variant]').forEach((elem) => {
    if (elem.dataset.variant === value) {
      elem.classList.remove('hidden');
    } else {
      elem.classList.add('hidden');
    }
  });

  document.querySelectorAll('#product-thumbnails div[data-variant]').forEach((elem) => {
    if (elem.dataset.variant === value) {
      elem.classList.remove('hidden');
    } else {
      elem.classList.add('hidden');
    }
  });

  const hash = window.location.hash;
  const params = new URLSearchParams(window.location.search);
  params.delete('variant');
  params.append('variant', value);

  history.replaceState({}, '', `?${params.toString()}${hash || ''}`);
});

document.querySelectorAll('.accordion-tab').forEach((elem) => {
  elem.addEventListener('click', function() {
    const tab = document.getElementById(this.getAttribute('aria-controls'));
    // console.log("tab",tab.previousSibling);
    tab.classList.toggle('hidden');
  });
});

document.querySelectorAll('.accordion-tab-1').forEach((elem) => {
  elem.addEventListener('click', function() {
    const tab = document.getElementById(this.getAttribute('aria-controls'));
    // console.log("tab",tab.previousSibling);
    
    tab.classList.toggle('hidden');
  });
});

document.querySelectorAll('select[data-option-position]').forEach((elem) => {
  elem.addEventListener('change', function() {
    const position = this.dataset.optionPosition;
    const option = document.querySelector(`select[name="id"] option[data-option-${position}="${this.value}"]`);
    document.querySelector('select[name="id"]').value = option.value;
    document.querySelector('select[name="id"]').dispatchEvent(new Event('change'));
  });
});

function renderFAQ() {
  const faqContent = document.getElementById('raw-faq-content');
  const templateText = document.getElementById('faq-template').textContent;
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

  var element0 = document.getElementById('faq-content');
  if(element0 == null)  
  {
  }  
  else  
  {    
    document.getElementById('faq-content').innerHTML = template({ items });    
  }
  
  
  var element = document.getElementById('faq-content-1');
  if(element == null)  
  {
  }  
  else  
  {    
    document.getElementById('faq-content-1').innerHTML = template({ items });    
  }
  
}

function renderIngredientList() {
  const ingredientsContent = document.getElementById('raw-ingredients-content');
  const templateText = document.getElementById('ingredients-template').textContent;
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

  var element11 = document.getElementById('ingredients-content');
  if(element11 == null)
  {
  }  
  else  
  {  
    document.getElementById('ingredients-content').innerHTML = template({ items });
  }
  
  var element1 = document.getElementById('ingredients-content-1');
  if(element1 == null)
  {
    
  }  
  else  
  {  
    document.getElementById('ingredients-content-1').innerHTML = template({ items });  
  }

  console.log(items.length);
  if (items.length > 6) {
    document.querySelectorAll('#ingredients-content .ingredients-element').forEach((elem, index) => {
      if (index >= 6) {
        elem.classList.add('hidden');
      }
    });

    document.querySelectorAll('#ingredients-content-1 .ingredients-element').forEach((elem, index) => {
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
     document.getElementById('view-more-ingredients-1').addEventListener('click', function() 
    {
      document.querySelectorAll('.ingredients-element').forEach((elem) => {
        elem.classList.remove('hidden');
      });

      this.classList.add('hidden');
    });
    
  } 
  else 
  {
    document.getElementById('view-more-ingredients').classList.add('hidden');
    document.getElementById('view-more-ingredients-1').classList.add('hidden');
  }
}

renderFAQ();
renderIngredientList();

document.querySelectorAll('.product-option-radio:disabled').forEach((elem) => {
  const parentList = elem.parentNode.parentNode;

  parentList.append(elem.parentNode);
});

const intersectionObserver = new IntersectionObserver(function([entry]) {
  if (entry.isIntersecting) {
    document.getElementById('add-to-cart-menu').classList.remove('!fixed', 'bottom-0', 'left-0', '!pt-4', 'right-0', 'z-50');
  } else {
    console.log('test', document.getElementById('add-to-cart-menu'));
    document.getElementById('add-to-cart-menu').classList.add('!fixed', 'bottom-0', 'left-0', '!pt-4', 'right-0', 'z-50');
  }
}, { root: null, threshold: 0 });

if (window.innerWidth <= 1024) {
  intersectionObserver.observe(document.getElementById('intersection-cart'));
}


document.addEventListener('DOMContentLoaded', function() {
  // Function to handle the dynamic dropdown logic
  function handleSelectChange() {
    const value = $("select[name='id']").val();
    console.log(value);
    const button = document.getElementById('add-to-cart-button');
    const selectedOption = $("select[name='id'] option:selected")[0];
    console.log(selectedOption);
    var vid = $("input[name='id']").val();
    console.log(vid);

    var selected_op1 = $(selectedOption).attr('data-option-1');
    
    var data_ids = '';
    var dataoption2 = [];
    $("select[name='id'] option").each(function(i, item) {
      if (selected_op1 == $(this).data('option-1')) {
        dataoption2.push($(this).data('option-2'));
        data_ids = $("select[name='id']").data('productid');
      }
    });

    $("#select-two2_" + data_ids + " option").each(function(i, newdata) {
      if ($.inArray(newdata.value, dataoption2) !== -1) {
        $(newdata).prop('disabled', false); // Enable option if it matches
      } else {
        if (newdata.value == $("#select-two2_" + data_ids).val()) {
          $("#select-two2_" + data_ids).val(dataoption2[0]);
          $("#select-two2_" + data_ids).trigger('change');
        }
        $(newdata).prop('disabled', true); // Disable option if it doesn't match
      }
    });
   
  }

  // Call the function to run on page load
  handleSelectChange();

  // Also attach the function to the select change event, in case of future changes
  $("select[name='id'], input[name='id']").on('change', handleSelectChange);
});
