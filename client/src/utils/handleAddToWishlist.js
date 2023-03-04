import { addToWishlist } from "../redux-toolkit/wishlistSlice/wishlistSlice";

function handleAddToWishlist(product, dispatch) {
  dispatch(addToWishlist(product));
}

export default handleAddToWishlist;
