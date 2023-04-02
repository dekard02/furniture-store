import { createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";
import getMessage from "../../utils/getMessage";
const initialState = {
  wishlists: localStorage.getItem("wishlist_items")
    ? JSON.parse(localStorage.getItem("wishlist_items"))
    : [],
};

export const wishlistSLice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      let newWishlist = action.payload;
      let index = state.wishlists.findIndex(
        (item) => item._id === newWishlist._id
      );
      if (index !== -1) {
        getMessage(
          "Sản phẩm này đã được thêm vào danh sách yêu thích!",
          "error"
        );
      } else {
        state.wishlists.push(newWishlist);
        getMessage(
          "Sản phẩm thêm vào danh sách yêu thích thành công 😍",
          "success"
        );
      }
      localStorage.setItem("wishlist_items", JSON.stringify(state.wishlists));
    },
    removeFromWishlist: (state, action) => {
      let productNeedRemove = action.payload;
      state.wishlists = state.wishlists.filter(
        (item) => item._id !== productNeedRemove._id
      );
      localStorage.setItem("wishlist_items", JSON.stringify(state.wishlists));
    },
  },
});

export const { addToWishlist, removeFromWishlist } = wishlistSLice.actions;

export default wishlistSLice.reducer;
