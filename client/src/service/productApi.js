import axiosClient from "./axiosClient";

const productApi = {
  getAllProduct(params) {
    const url = "/products/?inStock[gt]=0&isDeleted=false";
    return axiosClient.get(url, {
      params: params,
    });
  },
  searchProduct(params) {
    const url = `/products/?inStock[gt]=0&isDeleted=false&q=${params}`;
    return axiosClient.get(url);
  },
  getProduct(slug) {
    const url = `/products/?slug=${slug}`;
    return axiosClient.get(url);
  },
  remove(id) {
    const url = `products/${id}`;
    return axiosClient.delete(url);
  },
};
export default productApi;
