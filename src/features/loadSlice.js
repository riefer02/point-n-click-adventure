import { createSlice } from "@reduxjs/toolkit";

export const loadSlice = createSlice({
  name: "load",
  initialState: {
    loading: true,
  },
  reducers: {
    toggleLoad: (state) => {
      state.loading = !state.loading;
    },
  },
});

export const { toggleLoad } = loadSlice.actions;

export default loadSlice.reducer;
