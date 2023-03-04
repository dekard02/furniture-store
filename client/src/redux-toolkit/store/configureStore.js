import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartReducer from "../cartSlice/cartSlice";
import globalReducer from "../global/globalSlice";
import wishlistReducer from "../wishlistSlice/wishlistSlice";
const reducer = combineReducers({
  cart: cartReducer,
  global: globalReducer,
  wishlist: wishlistReducer,
});
const store = configureStore({
  reducer,
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
export default store;
