export function fetchProducts() {
  return (dispatch, getState) => {
    fetch("http://localhost:4000/products")
      .then(response => response.json())
      .then(products => {
        dispatch(productsFetched(products));
      });
  };
}

export function productsFetched(products) {
  return {
    type: "PRODUCTS_FETCHED",
    payload: products //how you see the real data, arr of objs
  };
}
