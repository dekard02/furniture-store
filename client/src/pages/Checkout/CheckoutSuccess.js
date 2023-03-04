import React from "react";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";

const CheckoutSuccess = () => {
  return (
    <div className="checkout-success">
      <BreadCrumb heading="Checkout Success" title="Home - Checkout Success" />
      <div className="wrapper-layout section">
        <h3 className="section-title">Đặt hàng thành công</h3>
        <div className="flex flex-col gap-y-4">
          <h3 className="text-xl text-left text-secondary">
            Thông tin đơn hàng
          </h3>
        </div>
      </div>
    </div>
  );
};

export default CheckoutSuccess;
