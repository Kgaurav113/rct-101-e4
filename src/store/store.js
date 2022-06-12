// TODO: use this store variable to create a store.

import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { productReducer } from "../store/product/product.reducer";
import { authReducer } from "./auth/auth.reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  product: productReducer,
});
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
// reducers are not ready

// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.store = store;
}
