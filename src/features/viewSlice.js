import { createSlice } from "@reduxjs/toolkit";

export const viewSlice = createSlice({
  name: "view",
  initialState: {
    views: ["1: home", "2: library", "3: dungeon", "4: cave"],
  },
  reducers: {
    setView: (state, payload) => {
      state.view = payload;
    },
    cycleView: (state) => {
      let shiftView = state.views.splice(0, 1);
      let endViewIndex = state.views.length;
      state.views.splice(endViewIndex, 0, shiftView[0]);
    },
    cycleViewBack: (state) => {
      let endIndex = state.views.length - 1;
      let shiftView = state.views[endIndex];
      let newViews = state.views.slice(0, endIndex);
      newViews.unshift(shiftView);
      state.views = newViews;
    },
  },
});

export const { setView, cycleView, cycleViewBack } = viewSlice.actions;

export default viewSlice.reducer;
