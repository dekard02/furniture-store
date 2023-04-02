import axiosClient from "./axiosClient";

const orderApi = {
  createOrder(data) {
    const url = `/orders`;
    return axiosClient.post(url, data);
  },
  getOrders() {
    const url = `/orders`;
    return axiosClient.get(url);
  },
  getOrder(orderId) {
    const url = `/orders/${orderId}`;
    return axiosClient.get(url);
  },
};
export default orderApi;
