import axios from "axios";

export const axioAuth = axios.create({
  baseURL: process.env.REACT_APP_BASEURL,
});

export const AuthorizationHeader = (token) => {
  if (token) {
    axioAuth.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete axioAuth.defaults.headers.common["Authorization"];
  }
};
