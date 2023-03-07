import Swal from "sweetalert2";
import { addToCart } from "../redux-toolkit/cartSlice/cartSlice";

function handleAddToCart(product, quantity = 1, dispatch) {
  console.log(product);
  dispatch(
    addToCart({
      ...product,
      quantity: quantity,
    })
  );
  Swal.fire({
    icon: "success",
    text: "Sản phẩm đã được thêm vào giỏ hàng!",
  });
}
export default handleAddToCart;
