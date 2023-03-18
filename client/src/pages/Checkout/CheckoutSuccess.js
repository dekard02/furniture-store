import React from "react";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import thankyou from "../../assets/thankyou.gif";
const CheckoutSuccess = () => {
  return (
    <div className="checkout-success">
      <BreadCrumb heading="Checkout Success" title="Home - Checkout Success" />
      <div style={{ paddingTop: "40px" }} className="wrapper-layout section">
        <h3 className="section-title">Đặt hàng thành công</h3>
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
