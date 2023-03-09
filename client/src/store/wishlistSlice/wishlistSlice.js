import { createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";
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
        (item) => item.id === newWishlist.id
      );
      if (index !== -1) {
        Swal.fire({
          icon: "error",
          text: "Sản phẩm này đã được thêm vào danh sách yêu thích!",
        });
      } else {
        state.wishlists.push(newWishlist);
        Swal.fire({
          icon: "success",
          text: "Sản phẩm thêm vào danh sách yêu thích thành công!",
        });
      }
      localStorage.setItem("wishlist_items", JSON.stringify(state.wishlists));
    },
    removeFromWishlist: (state, action) => {
      let productNeedRemove = action.payload;
      state.wishlists = state.wishlists.filter(
        (item) => item.id !== productNeedRemove.id
      );
      localStorage.setItem("wishlist_items", JSON.stringify(state.wishlists));
    },
  },
});

export const { addToWishlist, removeFromWishlist } = wishlistSLice.actions;

export default wishlistSLice.reducer;
