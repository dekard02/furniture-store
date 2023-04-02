import React, { useEffect, useState } from "react";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import styled from "styled-components";
import orderApi from "../../service/orderApi";
import getCreatedAt from "../../utils/getCreatedAt";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
const Order = () => {
  const [orders, setOrders] = useState([]);
  const { currentUser } = useSelector((state) => state.user);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        if (currentUser.email) {
          const res = await orderApi.getOrders();
          if (res && res.orders) {
            setOrders(res.orders);
          }
        } else {
          const id = localStorage.getItem("order_id");
          const res = await orderApi.getOrder("642462ee1bf04ddf868edb35");
          if (res && res.orders) {
            setOrders(res.orders);
            console.log(res.orders);
          }
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <StyledOrder className="order-page">
      <BreadCrumb heading="My Account" title="Home -  My Account" />
      <div className="wrapper-layout py-14">
        <div className="my-order bg-white p-3 rounded-md flex gap-x-4">
          <div className="flex w-full flex-col gap-y-4">
            <h3 className="text-secondary text-2xl font-semibold">
              Lịch sử đơn hàng
            </h3>
            <div className="order-list gap-y-3 flex flex-col">
              {orders &&
                orders.length > 0 &&
                orders.map((order) => {
                  const { products, createdAt } = order;

                  return (
                    <div
                      key={order._id}
                      className="relative flex flex-col gap-y-2"
                    >
                      <div className="flex flex-col gap-y-1">
                        <div className="flex items-center gap-x-3">
                          <span>Trạng thái:</span>
                          <span>{order.status}</span>
                        </div>
                        <div className="flex items-center gap-x-3">
                          <span>Ngày tạo:</span>
                          <span>{getCreatedAt(createdAt)}</span>
                        </div>
                      </div>
                      <div className="border gap-y-4 p-3 w-full border-gray-200">
                        <div className="flex h-[150px] has-scrollbar flex-col gap-y-3">
                          {products &&
                            products.length > 0 &&
                            products.map((item) => {
                              const { product, price, amount } = item;
                              return (
                                <div
                                  key={item._id}
                                  className="flex items-center px-2 py-2 bg-white border-b border-gray-300 rounded-md"
                                >
                                  <div className="relative">
                                    <div className="relative overflow-hidden bg-white border border-gray-300 rounded-md w-14 h-14">
                                      <img
                                        className="object-cover w-full rounded-md"
                                        src={product?.images?.shift()}
                                        alt=""
                                      />
                                    </div>
                                    <span className="absolute -top-[10px] -right-2 w-5 h-5 flex justify-center items-center text-sm font-light leading-[0] text-white bg-gray-600 rounded-full ">
                                      {item?.amount}
                                    </span>
                                  </div>
                                  <div className="flex items-center justify-between w-full pl-4">
                                    <div className="relative ">
                                      <span className="text-base font-light text-textPrimary">
                                        {product?.name}
                                      </span>
                                    </div>
                                    <span className="text-sm font-light text-textPrimary">
                                      {(amount * price).toLocaleString()} VND
                                    </span>
                                  </div>
                                </div>
                              );
                            })}
                        </div>
                      </div>
                    </div>
                  );
                })}
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
