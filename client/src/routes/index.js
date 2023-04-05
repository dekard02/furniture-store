import DefaultLayout from "../Admin/layouts/DefaultLayout";
import AllCategory from "../Admin/pages/Category/AllCategory";
import AddProduct from "../Admin/pages/Product/AddProduct";
import AllProduct from "../Admin/pages/Product/AllProduct";
import RecentlyProduct from "../Admin/pages/Product/RecentlyProduct";
import About from "../pages/About/About";
import CartPage from "../pages/CartPage/CartPage";
import CheckoutPage from "../pages/Checkout/CheckoutPage";
import CheckoutSuccess from "../pages/Checkout/CheckoutSuccess";
import Home from "../pages/Home/Home";
import { default as HomeAdmin } from "../Admin/pages/Home";
import ProductDetail from "../pages/ProductDetail/ProductDetail";
import Products from "../pages/Products/Products";
import Profile from "../pages/Profile/Profile";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import WishList from "../pages/WishList/WishList";
import OrderPending from "../Admin/pages/Order/OrderPending";
import OrderDetail from "../Admin/components/OrderDetail";
import AllOrder from "../Admin/pages/Order/AllOrder";

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
    path: "/checkout-success/:id",
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
    path: "/profile",
    component: Profile,
  },
];

export const privateRouter = [
  {
    path: "/admin",
    component: <DefaultLayout></DefaultLayout>,
  },
  {
    path: "/admin/category",
    component: (
      <DefaultLayout>
        <AllCategory></AllCategory>
      </DefaultLayout>
    ),
  },
  {
    path: "admin/product",
    component: (
      <DefaultLayout>
        <AllProduct></AllProduct>
      </DefaultLayout>
    ),
  },
  {
    path: "/admin",
    component: (
      <DefaultLayout>
        <HomeAdmin></HomeAdmin>
      </DefaultLayout>
    ),
  },
  {
    path: "/admin/category",
    component: (
      <DefaultLayout>
        <AllCategory></AllCategory>
      </DefaultLayout>
    ),
  },
  {
    path: "admin/product",
    component: (
      <DefaultLayout>
        <AllProduct></AllProduct>
      </DefaultLayout>
    ),
  },
  {
    path: "admin/add-product",
    component: (
      <DefaultLayout>
        <AddProduct></AddProduct>
      </DefaultLayout>
    ),
  },
  {
    path: "admin/recently-product",
    component: (
      <DefaultLayout>
        <RecentlyProduct></RecentlyProduct>
      </DefaultLayout>
    ),
  },

  {
    path: "admin/order-all",
    component: (
      <DefaultLayout>
        <AllOrder></AllOrder>
      </DefaultLayout>
    ),
  },
  {
    path: "admin/order-pending",
    component: (
      <DefaultLayout>
        <OrderPending></OrderPending>
      </DefaultLayout>
    ),
  },
  {
    path: "admin/order-detail/:id",
    component: (
      <DefaultLayout>
        <OrderDetail></OrderDetail>
      </DefaultLayout>
    ),
  },
];
