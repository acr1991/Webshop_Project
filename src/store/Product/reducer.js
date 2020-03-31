const initialState = { list: [], cart: [], categories: [], search: [] };

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
    case "YOUR_FILTER_QUERY": {
      const SearchResult = action.payload;
      return {
        ...state,
        search: state.list.filer(result => {
          return result.name.includes(SearchResult);
        })
      };
    }
    default: {
      return state;
    }
  }
}
