import { combineReducers } from "redux";
import productReducer from "./Product/reducer";
//import developersReducer from "./developerReducer";
//import postReducer from "./post/reducer";
//function havingFunReducer(state = "yes", action) {
//switch (action.type) {
//     case "SET_HAVING_FUN": {
//       return action.payload;
//     }
//     default: {
//       return state;
//     }
//   }
// }
export default combineReducers({
  products: productReducer
  // developers: developersReducer,
  // havingFun: havingFunReducer,
  // post: postReducer
  // we can add more "slice" subreducers here later on...
});
