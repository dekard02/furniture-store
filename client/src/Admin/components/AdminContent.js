import React from "react";
import styled from "styled-components";
const AdminContent = ({ active = 0 }) => {
  return (
    <StyledAdminContent className="w-full relative bg-[#edf2f4]  top-0 h-screen left-0 right-0 pt-20 ml-auto px-6">
      <div className="mt-10 admin-cotainer-layout">
        {active === 0 && (
          <div className="grid grid-cols-3 gap-x-6 px-6">
            <div className="admin-card p-5  rounded-lg bg-[#ecf0f3]">
              <div className="flex items-center justify-between">
                <div className="flex flex-col gap-y-3">
                  <span className="text-2xl font-bold text-secondary">150</span>
                  <span className="text-textPrimary text-sm font-medium">
                    Khách hàng
                  </span>
                </div>
                <i className="bi text-[#ffba08] text-4xl bi-person-hearts"></i>
              </div>
            </div>
            <div className="admin-card card-order p-5  rounded-lg bg-[#ecf0f3]">
              <div className="flex items-center justify-between">
                <div className="flex flex-col gap-y-3">
                  <span className="text-2xl font-bold text-secondary">150</span>
                  <span className="text-textPrimary text-sm font-medium">
                    Đơn đặt hàng
                  </span>
                </div>
                <i className="bi text-[#f72585] text-4xl bi-cart-check-fill"></i>
              </div>
            </div>
            <div className="admin-card card-order card-income p-5  rounded-lg bg-[#ecf0f3]">
              <div className="flex items-center justify-between">
                <div className="flex flex-col gap-y-3">
                  <span className="text-2xl font-bold text-secondary">
                    150 Triệu
                  </span>
                  <span className="text-textPrimary text-sm font-medium">
                    Doanh thu
                  </span>
                </div>
                <i className="bi text-[#06d6a0] text-4xl bi-database-fill-check"></i>
              </div>
            </div>
          </div>
        )}
        {active === 1 && (
          <div className="orders-container">
            <div className=" grid grid-cols-4 py-2 ">
              <div className="whitespace-nowrap text-lg font-bold text-center text-secondary">
                Hình ảnh
              </div>
              <div className="text-lg flex justify-center items-center font-bold text-center text-secondary">
                Tên sản phẩm
              </div>
              <div className="text-lg flex justify-center items-center font-bold text-center text-secondary">
                Số lượng
              </div>
              <div className="text-lg flex justify-center items-center font-bold text-center text-secondary">
                Thông tin khách hàng
              </div>
            </div>
            <div className="grid grid-cols-4  py-3 border-t border-b border-gray-300 order-row">
              <div className="relative flex items-center cursor-pointer">
                <img
                  class="rounded-md w-28"
                  src="https://risingtheme.com/html/demo-furea/furea/assets/img/product/product4.webp"
                  alt=""
                />
              </div>
              <div className="flex flex-col items-center justify-center p-2">
                <h5 class="text-base font-semibold transition-all duration-500 cursor-pointer text-secondary whitespace-nowrap hover:text-primary">
                  Plastic Chair
                </h5>
                <span>COLOR: Blue</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </StyledAdminContent>
  );
};

export default AdminContent;
const StyledAdminContent = styled.div`
  .admin-card {
    box-shadow: 10px 10px 20px #cbced1, -10px -10px 20px #ffffff;
    border-top: 6px solid #ffba08;
  }
  .card-order {
    border-top: 6px solid #f72585;
  }
  .card-income {
    border-top: 6px solid #06d6a0;
  }
`;
