import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../slices/apiSlice.js";
import dashboardSlice from "../slices/dashboardSlice.js";
import authSlice from "../slices/authSlice.js";

const store = configureStore({
  reducer: {
    dashboardSlice: dashboardSlice,
    auth:authSlice,
    [apiSlice.reducerPath]:apiSlice.reducer
  },
    middleware:(defaultMiddleWare)=>defaultMiddleWare().concat(apiSlice.middleware),
    devTools:true
});
export default store;
 