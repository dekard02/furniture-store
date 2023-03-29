import { addToCart } from "../store/cartSlice/cartSlice";
import getMessage from "./getMessage";

function handleAddToCart(product, quantity = 1, dispatch) {
  dispatch(
    addToCart({
      ...product,
      quantity: quantity,
    })
  );
  getMessage("Sản phẩm đã được thêm vào giỏ hàng 😍", "success");
}
export default handleAddToCart;
