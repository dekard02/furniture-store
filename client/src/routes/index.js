import Admin from "../Admin/Admin";
import About from "../pages/About/About";
import CartPage from "../pages/CartPage/CartPage";
import CheckoutPage from "../pages/Checkout/CheckoutPage";
import CheckoutSuccess from "../pages/Checkout/CheckoutSuccess";
import Home from "../pages/Home/Home";
import Order from "../pages/Order/Order";
import ProductDetail from "../pages/ProductDetail/ProductDetail";
import Products from "../pages/Products/Products";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import WishList from "../pages/WishList/WishList";

export const publicRoutes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/products",
    component: Products,
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/cart",
    component: CartPage,
  },
  {
    path: "/products/:slug",
    component: ProductDetail,
  },
  {
    path: "/wishlist",
    component: WishList,
  },
  {
    path: "/checkout",
    component: CheckoutPage,
  },
  {
    path: "/checkout-success",
    component: CheckoutSuccess,
  },
  {
    path: "/sign-up",
    component: SignUp,
  },
  {
    path: "/sign-in",
    component: SignIn,
  },
  {
    path: "/order",
    component: Order,
  },
  {
    path: "/admin",
    component: Admin,
    layout: null,
  },
];
