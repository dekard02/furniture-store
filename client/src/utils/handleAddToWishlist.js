import { addToWishlist } from "../store/wishlistSlice/wishlistSlice";

function handleAddToWishlist(product, dispatch) {
  dispatch(addToWishlist(product));
}

export default handleAddToWishlist;
