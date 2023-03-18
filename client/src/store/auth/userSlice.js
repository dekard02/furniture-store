import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userApi from "../../service/userApi";
const StorageKeys = {
  USER: "user",
  TOKEN: "access_token",
};
const initialState = {
  currentUser: localStorage.getItem(StorageKeys.USER)
    ? JSON.parse(localStorage.getItem(StorageKeys.USER))
    : {},
  // token: localStorage.getItem(StorageKeys.TOKEN)
  //   ? JSON.parse(localStorage.getItem(StorageKeys.TOKEN))
  //   : "",
};
export const register = createAsyncThunk("user/register", async (payload) => {
  //call api to register
  const data = await userApi.register(payload);
  //save data to localstorage
  localStorage.setItem(StorageKeys.TOKEN, data.token);
  localStorage.setItem(StorageKeys.USER, JSON.stringify(data.user));
  //return info user
  return data;
});
export const login = createAsyncThunk("user/login", async (payload) => {
  //call api to login
  const data = await userApi.login(payload);
  //save data to localstorage
  localStorage.setItem(StorageKeys.TOKEN, data.token);
  localStorage.setItem(StorageKeys.USER, JSON.stringify(data.user));
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
