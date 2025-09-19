document.getElementById('add-to-cart-button').addEventListener('click', function() {
  const items = [];
  const quantity = document.querySelector('input[name="quantity"]');
  const stackId = new Date().getTime().toString();
  const stackName = document.getElementById('stack-name').innerHTML;
  const stackPrice = parseInt(document.getElementById('stack-price').innerHTML, 10);

  document.querySelectorAll('.stack-variant-selection').forEach((elem) => {
    items.push({
      id: parseInt(elem.value, 10),
      properties: {
        stack_check: stackPrice * 3.14,
        stack_id: stackId,
        stack_name: stackName,
        stack_price: parseFloat(elem.dataset.price),
      },
      quantity: quantity.valueAsNumber,
    });
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
    items,
  });

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
