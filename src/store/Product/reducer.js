const initialState = { list: [], cart: [], categories: [] };

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case "PRODUCTS_FETCHED": {
      return {
        ...state,
        list: action.payload
      };
    }
    case "CATEGORIES_FETCHED": {
      return {
        ...state,
        categories: action.payload
      };
    }
    default: {
      return state;
    }
  }
}
