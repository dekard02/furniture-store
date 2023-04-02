import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userApi from "../../service/userApi";
const StorageKeys = {
  USER: "user",
  TOKEN: "access_token",
  ORDER_ID: "order_id",
};
const initialState = {
  currentUser: localStorage.getItem(StorageKeys.USER)
    ? JSON.parse(localStorage.getItem(StorageKeys.USER))
    : {},
};
export const register = createAsyncThunk("user/register", async (payload) => {
  //call api to register
  const data = await userApi.register(payload);
  //save data to localstorage
  if (data.token) {
    localStorage.setItem(StorageKeys.TOKEN, data.token);
  }
  if (data.user) {
    localStorage.setItem(StorageKeys.USER, JSON.stringify(data.user));
  }
  //return info user
  return data;
});
export const login = createAsyncThunk("user/login", async (payload) => {
  //call api to login
  const data = await userApi.login(payload);
  // console.log("data login", data);
  //save data to localstorage
  if (data.token) {
    localStorage.setItem(StorageKeys.TOKEN, data.token);
  }

  if (data) {
    localStorage.setItem(StorageKeys.USER, JSON.stringify(data));
  }
  //return info user
  return data;
});
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLogout: (state) => {
      localStorage.removeItem(StorageKeys.USER);
      localStorage.removeItem(StorageKeys.TOKEN);
      state.currentUser = {};
    },
  },
  extraReducers: {
    [register.fulfilled]: (state, action) => {
      state.currentUser = action.payload;
    },
    [login.fulfilled]: (state, action) => {
      state.currentUser = action.payload;
    },
  },
});

const { reducer, actions } = userSlice;
export const { setLogout } = actions;
export default reducer;
