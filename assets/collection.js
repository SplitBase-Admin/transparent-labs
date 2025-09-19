// Sort
Shopify.queryParams = {};

if (location.search.length) {
  const params = new URLSearchParams(location.search);

  for (let param of params) {
    Shopify.queryParams[param[0]] = param[1];
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const sortByElement = document.getElementById('sort-by');

  if (sortByElement) {
    sortByElement.addEventListener('change', function(e) {
      try {
        const { value } = e.target;

        if (!value) {
          console.error("Sort value is undefined or empty.");
          return;
        }

        if (!Shopify.queryParams) {
          console.error("Shopify.queryParams is undefined.");
          return;
        }

        Shopify.queryParams.sort_by = value;
        location.search = new URLSearchParams(Shopify.queryParams).toString();
      } catch (error) {
        console.error("Error updating sort option:", error);
      }
    });
  } 
});
