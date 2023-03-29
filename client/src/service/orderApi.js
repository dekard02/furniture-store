import axiosClient from "./axiosClient";

const orderApi = {
  createOrder(data) {
    const url = `/orders`;
    return axiosClient.post(url, data);
  },
  getOrder(data) {
    const url = `/orders`;
    return axiosClient.get(url, data);
  },
};
export default orderApi;
