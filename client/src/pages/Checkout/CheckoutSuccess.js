import React, { useCallback, useEffect, useState } from "react";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import thankyou from "../../assets/thankyou.gif";
import { NavLink, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import getCreatedAt from "../../utils/getCreatedAt";
import orderApi from "../../service/orderApi";
import styled from "styled-components";
import Button from "../../components/Button/Button";
import LoadingCircle from "../../components/Loading/LoadingCircle";
const CheckoutSuccess = () => {
  const [orders, setOrders] = useState(null);
  const [order, setOrder] = useState(null);
  const [value, setValue] = useState("");
  const [submit, setSearchSubmit] = useState(false);
  const [orderId, setOrderId] = useState("");
  const [loading, setLoading] = useState(false);
  const { currentUser } = useSelector((state) => state.user);
  const { id } = useParams();
  const handleSearchOrder = useCallback(
    (e) => {
      e.preventDefault();
      setSearchSubmit(!submit);
      setOrderId(value);
      setOrders(null);
    },
    [value]
  );

  useEffect(() => {
    setLoading(true);
    const fetchProducts = async () => {
      try {
        if (orderId) {
          const res = await orderApi.getOrder(orderId);

          if (res) {
            setOrder(res.order);
            setLoading(false);
            setOrders([]);
          }
        } else {
          if (currentUser?.user) {
            const res = await orderApi.getOrders();
            if (res && res.orders) {
              setOrders(res.orders);
              setLoading(false);
            }
          } else {
            const res = await orderApi.getOrder(id);
            if (res) {
              setOrder(res.order);
              setLoading(false);
            }
          }
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetchProducts();
  }, [submit]);
  console.log(order, orders);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <StyledCheckoutSuccess className="checkout-success">
      <BreadCrumb heading="Checkout Success" title="Home - Checkout Success" />
      <div style={{ paddingTop: "40px" }} className="wrapper-layout section">
        <div className="relative mb-4">
          <h3 style={{ margin: 0 }} className="section-title">
            Đặt hàng thành công
          </h3>

          <div className="flex flex-col gap-y-4">
            <div className="flex justify-center">
              <img className="w-80" src={thankyou} alt="" />
            </div>
          </div>
        </div>

        <div className="flex px-3 py-3 bg-white my-order rounded-md flex-col gap-y-2">
          <div className="search-order gap-x-3 flex">
            <input
              onChange={(e) => setValue(e.target.value)}
              value={value}
              className="py-2 w-[180px] text-xs px-2 border border-gray-300 outline-none"
              type="text"
              placeholder="Tìm lịch sử đơn hàng"
            />
            <Button onClick={handleSearchOrder} className="btn-search-order">
              Tìm
            </Button>
          </div>
          <div className=" bg-white rounded-md flex gap-x-4">
            <div className="flex w-full flex-col gap-y-4">
              <h3 className="text-secondary text-2xl font-semibold">
                Lịch sử đơn hàng
              </h3>
              <div className="order-list gap-y-3 flex flex-col">
                {loading && <LoadingCircle />}
                {!order && !orders?.length && (
                  <div>Không tìm thấy lịch sử đặt hàng</div>
                )}

                {currentUser?.user &&
                  orders &&
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
                                          src={product?.images?.[0]}
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
                {!currentUser?.user && order && (
                  <div className="relative flex flex-col gap-y-2">
                    <div className="flex flex-col gap-y-1">
                      <div className="flex items-center gap-x-3">
                        <span>Mã đơn hàng:</span>
                        <span>{order._id}</span>
                      </div>
                      <div className="flex items-center gap-x-3">
                        <span>Trạng thái:</span>
                        <span>{order.status}</span>
                      </div>
                      <div className="flex items-center gap-x-3">
                        <span>Ngày tạo:</span>
                        <span>{getCreatedAt(order.createdAt) || ""}</span>
                      </div>
                    </div>
                    <div className="border gap-y-4 p-3 w-full border-gray-200">
                      <div className="flex h-[150px] has-scrollbar flex-col gap-y-3">
                        {order.products &&
                          order.products.length > 0 &&
                          order.products.map((item) => {
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
                                      src={product?.images[0]}
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
                )}
                {currentUser?.user && order && (
                  <div className="relative flex flex-col gap-y-2">
                    <div className="flex flex-col gap-y-1">
                      <div className="flex items-center gap-x-3">
                        <span>Mã đơn hàng:</span>
                        <span>{order._id}</span>
                      </div>
                      <div className="flex items-center gap-x-3">
                        <span>Trạng thái:</span>
                        <span>{order.status}</span>
                      </div>
                      <div className="flex items-center gap-x-3">
                        <span>Ngày tạo:</span>
                        <span>{getCreatedAt(order.createdAt) || ""}</span>
                      </div>
                    </div>
                    <div className="border gap-y-4 p-3 w-full border-gray-200">
                      <div className="flex h-[150px] has-scrollbar flex-col gap-y-3">
                        {order.products &&
                          order.products.length > 0 &&
                          order.products.map((item) => {
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
                                      src={product?.images[0]}
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
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledCheckoutSuccess>
  );
};

export default CheckoutSuccess;
const StyledCheckoutSuccess = styled.div`
  .my-order {
    box-shadow: 0 2px 22px rgb(0 0 0 / 16%);
  }
  .btn-search-order {
    border: none;
    color: #fff;
    background: #f51c1c;
    user-select: none;
  }
`;
