import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  scrollValid: false,
  playVideo: false,
  showModalQuickView: false,
  selectedProduct: {},
  loading: false,
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setScrollValue: (state, action) => {
      state.scrollValid = action.payload;
    },
    setPlayVideo: (state, action) => {
      state.playVideo = action.payload;
    },
    setShowModalQuickView: (state, action) => {
      state.showModalQuickView = true;
      state.selectedProduct = action.payload;
    },
    setCloseModalQuickView: (state, action) => {
      state.showModalQuickView = false;
      state.selectedProduct = {};
    },
    setLoadingSkeleton: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const {
  setScrollValue,
  setPlayVideo,
  setShowModalQuickView,
  setCloseModalQuickView,
  setLoadingSkeleton,
} = globalSlice.actions;

export default globalSlice.reducer;
