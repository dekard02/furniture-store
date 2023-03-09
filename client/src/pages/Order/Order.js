import React from "react";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import styled from "styled-components";
const Order = () => {
  const date = new Date();
  console.log(date);
  return (
    <StyledOrder className="order-page">
      <BreadCrumb heading="My Account" title="Home -  My Account" />
      <div className="wrapper-layout py-14">
        <div className="my-order bg-white p-3 rounded-md flex gap-x-4">
          <div className="flex w-full flex-col gap-y-4">
            <h3 className="text-secondary text-2xl font-semibold">
              Lịch sử đơn hàng
            </h3>
            <span>Ngày Đặt hàng:{date.toString()}</span>
            <div className="border gap-y-4 p-3 w-full border-gray-200">
              <div className="flex h-[300px] has-scrollbar flex-col gap-y-3">
                <div className="flex items-center px-2 py-2 bg-white border-b border-gray-300 rounded-md">
                  <div className="relative">
                    <div className="relative overflow-hidden bg-white border border-gray-300 rounded-md w-14 h-14">
                      <img
                        className="object-cover w-full rounded-md"
                        src="https://risingtheme.com/html/demo-furea/furea/assets/img/product/product13.webp"
                        alt=""
                      />
                    </div>
                    <span className="absolute -top-[10px] -right-2 w-5 h-5 flex justify-center items-center text-sm font-light leading-[0] text-white bg-gray-600 rounded-full ">
                      20
                    </span>
                  </div>
                  <div className="flex items-center justify-between w-full pl-4">
                    <div className="relative ">
                      <span className="text-base font-light text-textPrimary">
                        ghe
                      </span>
                      <p className="text-xs font-light text-textColor">
                        COLOR: Blue
                      </p>
                    </div>
                    <span className="text-sm font-light text-textPrimary">
                      202200
                    </span>
                  </div>
                </div>
                <div className="flex items-center px-2 py-2 bg-white border-b border-gray-300 rounded-md">
                  <div className="relative">
                    <div className="relative overflow-hidden bg-white border border-gray-300 rounded-md w-14 h-14">
                      <img
                        className="object-cover w-full rounded-md"
                        src="https://risingtheme.com/html/demo-furea/furea/assets/img/product/product13.webp"
                        alt=""
                      />
                    </div>
                    <span className="absolute -top-[10px] -right-2 w-5 h-5 flex justify-center items-center text-sm font-light leading-[0] text-white bg-gray-600 rounded-full ">
                      20
                    </span>
                  </div>
                  <div className="flex items-center justify-between w-full pl-4">
                    <div className="relative ">
                      <span className="text-base font-light text-textPrimary">
                        ghe
                      </span>
                      <p className="text-xs font-light text-textColor">
                        COLOR: Blue
                      </p>
                    </div>
                    <span className="text-sm font-light text-textPrimary">
                      202200
                    </span>
                  </div>
                </div>
                <div className="flex items-center px-2 py-2 bg-white border-b border-gray-300 rounded-md">
                  <div className="relative">
                    <div className="relative overflow-hidden bg-white border border-gray-300 rounded-md w-14 h-14">
                      <img
                        className="object-cover w-full rounded-md"
                        src="https://risingtheme.com/html/demo-furea/furea/assets/img/product/product13.webp"
                        alt=""
                      />
                    </div>
                    <span className="absolute -top-[10px] -right-2 w-5 h-5 flex justify-center items-center text-sm font-light leading-[0] text-white bg-gray-600 rounded-full ">
                      20
                    </span>
                  </div>
                  <div className="flex items-center justify-between w-full pl-4">
                    <div className="relative ">
                      <span className="text-base font-light text-textPrimary">
                        ghe
                      </span>
                      <p className="text-xs font-light text-textColor">
                        COLOR: Blue
                      </p>
                    </div>
                    <span className="text-sm font-light text-textPrimary">
                      202200
                    </span>
                  </div>
                </div>
                <div className="flex items-center px-2 py-2 bg-white border-b border-gray-300 rounded-md">
                  <div className="relative">
                    <div className="relative overflow-hidden bg-white border border-gray-300 rounded-md w-14 h-14">
                      <img
                        className="object-cover w-full rounded-md"
                        src="https://risingtheme.com/html/demo-furea/furea/assets/img/product/product13.webp"
                        alt=""
                      />
                    </div>
                    <span className="absolute -top-[10px] -right-2 w-5 h-5 flex justify-center items-center text-sm font-light leading-[0] text-white bg-gray-600 rounded-full ">
                      20
                    </span>
                  </div>
                  <div className="flex items-center justify-between w-full pl-4">
                    <div className="relative ">
                      <span className="text-base font-light text-textPrimary">
                        ghe
                      </span>
                      <p className="text-xs font-light text-textColor">
                        COLOR: Blue
                      </p>
                    </div>
                    <span className="text-sm font-light text-textPrimary">
                      202200
                    </span>
                  </div>
                </div>
                <div className="flex items-center px-2 py-2 bg-white border-b border-gray-300 rounded-md">
                  <div className="relative">
                    <div className="relative overflow-hidden bg-white border border-gray-300 rounded-md w-14 h-14">
                      <img
                        className="object-cover w-full rounded-md"
                        src="https://risingtheme.com/html/demo-furea/furea/assets/img/product/product13.webp"
                        alt=""
                      />
                    </div>
                    <span className="absolute -top-[10px] -right-2 w-5 h-5 flex justify-center items-center text-sm font-light leading-[0] text-white bg-gray-600 rounded-full ">
                      20
                    </span>
                  </div>
                  <div className="flex items-center justify-between w-full pl-4">
                    <div className="relative ">
                      <span className="text-base font-light text-textPrimary">
                        ghe
                      </span>
                      <p className="text-xs font-light text-textColor">
                        COLOR: Blue
                      </p>
                    </div>
                    <span className="text-sm font-light text-textPrimary">
                      202200
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex gap-x-3 items-center justify-end">
                <span>Tổng tiền:</span>
                <span>7.500.000</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledOrder>
  );
};

export default Order;
const StyledOrder = styled.div`
  .my-order {
    box-shadow: 0 2px 22px rgb(0 0 0 / 16%);
  }
`;
