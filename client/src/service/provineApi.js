import axios from "axios";

export const provineApi = {
  getAllProvine() {
    return `https://provinces.open-api.vn/api/?depth=2`;
  },
};
