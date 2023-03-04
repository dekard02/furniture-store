import { createSelector } from "@reduxjs/toolkit";
const cartItemsSelector = (state) => state.cart.cartItems;
// count number of products in cart
export const cartItemsCountSelector = createSelector(
  cartItemsSelector,
  (cartItems) =>
    cartItems.reduce((count, item) => {
      return count + item.quantity;
    }, 0)
);
// caculate total of cart
export const cartItemsTotalSelector = createSelector(
  cartItemsSelector,
  (cartItems) =>
    cartItems.reduce((total, item) => {
      return total + item.salePrice * item.quantity;
    }, 0)
);
