const initialState = {};
export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case "PRODUCTS_FETCHED": {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
