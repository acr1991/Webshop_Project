const initialState = { list: [], cart: [] };

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case "PRODUCTS_FETCHED": {
      return {
        ...state,
        list: action.payload
      };
    }
    default: {
      return state;
    }
  }
}
