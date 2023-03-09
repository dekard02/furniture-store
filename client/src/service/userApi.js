import axiosClient from "./axiosClient";

const userApi = {
  register(data) {
    const url = "/signup";
    return axiosClient.post(url, data);
  },
  login(data) {
    const url = "/login";
    return axiosClient.post(url, data);
  },
};
export default userApi;
