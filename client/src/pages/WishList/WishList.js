import React from "react";
import { useSelector } from "react-redux";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import Button from "../../components/Button/Button";
import CartItem from "../../components/cartItem/CartItem";
import { NavLink } from "react-router-dom";
const WishList = () => {
  const { wishlists } = useSelector((state) => state.wishlist);

  return (
    <div className="wish-list-page">
      <BreadCrumb heading="Wishlist" title="Home - Wishlist" />
      <div className="wrapper-layout py-14">
        <div className="relative">
          <h3 style={{ textAlign: "left" }} className="section-title">
            Wish List
          </h3>
          <div className="flex flex-col">
            <div className="cart-list-container">
              <div className="flex items-center py-2 ">
                <div className="w-5/12 text-lg font-bold text-center text-secondary">
                  PRODUCT
                </div>
                <div className="grid w-full grid-cols-3 gap-x-3">
                  <div className="text-lg font-bold text-center text-secondary">
                    PRICE
                  </div>
                  <div className="text-lg font-bold text-center text-secondary">
                    STOCK STATUS
                  </div>

                  <div className="text-lg font-bold text-center text-secondary">
                    Thêm Vào Giỏ Hàng
                  </div>
                </div>
              </div>
              {wishlists.length > 0 ? (
                wishlists.map((item, index) => {
                  return <CartItem isWishList key={item._id} item={item} />;
                })
              ) : (
                <div className="my-3 text-2xl font-semibold text-center text-textPrimary">
                  No product in the wishlish
                </div>
              )}
            </div>
            <div className="flex justify-between mt-7">
              <NavLink
                to={"/"}
                className="flex items-center font-semibold gap-x-3 text-bgPrimary cursor-pointer"
              >
                Continue shopping
              </NavLink>
              <div className="flex items-center gap-x-3">
                <NavLink
                  to={"/products"}
                  className="text-base cursor-pointer text-bgPrimary italic font-light "
                >
                  View All Product
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishList;
