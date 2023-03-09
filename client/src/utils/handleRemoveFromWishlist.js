import Swal from "sweetalert2";
import { removeFromWishlist } from "../store/wishlistSlice/wishlistSlice";

function handleRemoveFromWishlist(productNeedRemove, dispatch) {
  Swal.fire({
    text: "Bạn muốn xóa sản phẩm này khỏi danh sách yêu thích?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      dispatch(removeFromWishlist(productNeedRemove));
      Swal.fire({
        text: "Sản phẩm đã được xóa khỏi danh sách yêu thích!",
        icon: "success",
      });
    }
  });
}
export default handleRemoveFromWishlist;
