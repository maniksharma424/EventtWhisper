import { createSlice } from "@reduxjs/toolkit";

const dashboardSlice = createSlice({
  name: "dashboardSlice",
  initialState: {
    opacity: "",
    blur: "",
    eventScheduler:false
  },
  reducers: {
    changeOpacity: (state) => {
      state.opacity = "opacity-70";
    },
    defaultOpacity: (state) => {
      state.opacity = "";
    },
    setBlur: (state) => {
      state.blur = "blur-sm";
    },
    removeBlur: (state) => {
      state.blur = "";
    }
  },
});
export default dashboardSlice.reducer;
export const { changeOpacity, defaultOpacity, setBlur, removeBlur} =
  dashboardSlice.actions;
