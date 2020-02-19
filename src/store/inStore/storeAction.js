export function productsFetched(products) {
  return {
    type: "PRODUCTS_FETCHED",
    payload: product //how you see the real data, arr of objs
  };
}
