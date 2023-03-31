import React, { useEffect } from "react";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import thankyou from "../../assets/thankyou.gif";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
const CheckoutSuccess = () => {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className="checkout-success">
      <BreadCrumb heading="Checkout Success" title="Home - Checkout Success" />
      <div style={{ paddingTop: "40px" }} className="wrapper-layout section">
        <h3 style={{ margin: 0 }} className="section-title">
          Đặt hàng thành công
        </h3>
        {currentUser.email && (
          <div className="flex items-center gap-x-4 justify-center">
            <span className="text-bgPrimary text-lg font-medium">
              Xem thông tin đơn hàng
            </span>
            <NavLink
              className="cursor-pointer hover:translate-x-2 flex justify-center items-center bg-white shadow-lg w-10 h-10 rounded-full transition-all"
              to={`/order`}
            >
              <i className="bi leading-[0px] text-bgPrimary bi-arrow-right"></i>
            </NavLink>
          </div>
        )}
        <div className="flex flex-col gap-y-4">
          <div className="flex justify-center">
            <img className="w-80" src={thankyou} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutSuccess;
