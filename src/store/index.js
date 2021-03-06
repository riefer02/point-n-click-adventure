import { configureStore } from "@reduxjs/toolkit";
import loadReducer from "../features/loadSlice";
import viewReducer from "../features/viewSlice";

export default configureStore({
  reducer: {
    load: loadReducer,
    view: viewReducer,
  },
});
