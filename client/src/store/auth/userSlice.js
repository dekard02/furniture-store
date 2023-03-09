import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userApi from "../../service/userApi";

const initialState = {
  currentUser: {},
};
export const register = createAsyncThunk("user/register", async (payload) => {
  //call api to register
  const data = await userApi.register(payload);
  //save data to localstorage
  localStorage.setItem("access_token", data.token);
  localStorage.setItem("user", JSON.stringify(data.user));
  //return info user
  return data;
});
export const login = createAsyncThunk("user/login", async (payload) => {
  //call api to login
  const data = await userApi.login(payload);
  //save data to localstorage
  localStorage.setItem("access_token", data.token);
  localStorage.setItem("user", JSON.stringify(data.user));
  //return info user
  return data;
});
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {
    [register.fulfilled]: (state, action) => {
      state.currentUser = action.payload;
    },
    [login.fulfilled]: (state, action) => {
      state.currentUser = action.payload;
    },
  },
});

const { reducer } = userSlice;
export default reducer;
