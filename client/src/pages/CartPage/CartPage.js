import React, { useEffect } from "react";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import Button from "../../components/Button/Button";
import CartItem from "../../components/cartItem/CartItem";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { cartItemsTotalSelector } from "../../store/cartSlice/Selector";
import { useNavigate } from "react-router-dom";
const CartPage = () => {
  const navigate = useNavigate();
  const { cartItems } = useSelector((state) => state.cart);

  const cartItemsTotal = useSelector(cartItemsTotalSelector);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <StyledCart className="cart-page">
      <BreadCrumb heading="Shopping Cart" title="Home - Shopping Cart" />
      <div className="wrapper-layout py-14">
        <div className="relative">
          <h3 style={{ textAlign: "left" }} className="section-title">
            Shopping Cart
          </h3>
          <div className="flex flex-col">
            <div className="cart-list-container">
              <div className="flex items-center py-2 ">
                <div className="w-5/12 text-lg font-bold text-center text-secondary">
                  PRODUCT
                </div>
                <div className="grid w-full grid-cols-4 gap-x-3">
                  <div className="text-lg font-bold text-center text-secondary">
                    PRICE
                  </div>
                  <div className="text-lg font-bold text-center text-secondary">
                    QUANTITY
                  </div>
                  <div className="text-lg font-bold text-center text-secondary">
                    TOTAL
                  </div>
                  <div className="text-lg font-bold text-center text-secondary">
                    REMOVE
                  </div>
                </div>
              </div>
              {cartItems.length > 0 ? (
                cartItems.map((item, index) => {
                  return <CartItem key={item._id} item={item} />;
                })
              ) : (
                <div className="my-3 text-2xl font-semibold text-center text-textPrimary">
                  No product in the cart
                </div>
              )}
            </div>
            <div className="flex justify-between mt-7">
              <div className="flex items-center font-semibold gap-x-3 text-secondary">
                Tổng tiền:
                <span className="text-lg font-medium text-bgPrimary">
                  {cartItemsTotal.toLocaleString()}
                </span>
              </div>
              <div className="flex items-center gap-x-3">
                <span className="text-base italic font-light text-gray-400">
                  Vận chuyển và thuế được tính khi thanh toán
                </span>
                <Button onClick={() => navigate(`/checkout`)}>
                  Thanh Toán
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledCart>
  );
};

export default CartPage;
const StyledCart = styled.div`
  .btn-primary {
    border: 0;
    background-color: #f51c1c;
    color: #fff;
    &:hover {
      background-color: #121a25;
    }
  }
`;
