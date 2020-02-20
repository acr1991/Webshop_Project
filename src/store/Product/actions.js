export function fetchProductsAndCategories() {
  return (dispatch, getState) => {
    fetch("http://localhost:4000/products")
      .then(response => response.json())
      .then(products => {
        dispatch(productsFetched(products));
      });
    fetch("http://localhost:4000/categories")
      .then(response => response.json())
      .then(categories => {
        dispatch(categoryFetched(categories));
      });
  };
}

export function productsFetched(products) {
  return {
    type: "PRODUCTS_FETCHED",
    payload: products //how you see the real data, arr of objs
  };
}

export function categoryFetched(categories) {
  return {
    type: "CATEGORIES_FETCHED",
    payload: categories //how you see the real data, arr of objs
  };
}
