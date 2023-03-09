import axiosClient from "./axiosClient";

const productApi = {
  getAllProduct(params) {
    const url = "/products";
    return axiosClient.get(url, {
      params: params,
    });
  },
  getProduct(id) {
    const url = `/products/${id}`;
    return axiosClient.get(url);
  },
  remove(id) {
    const url = `products/${id}`;
    return axiosClient.delete(url);
  },
};
export default productApi;
