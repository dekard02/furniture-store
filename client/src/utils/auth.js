import axios from "axios";

export const axioAuth = axios.create({
    baseURL: `http://localhost:8000/api/v1`,
});

export const loginHeader = (token) => {
    if (token) {
        axioAuth.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
        delete axioAuth.defaults.headers.common["Authorization"];
    }
};
