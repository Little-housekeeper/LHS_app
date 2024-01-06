import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem("formProgress")
  ? { nthStep: JSON.parse(localStorage.getItem("formProgress")!) }
  : { nthStep: 1 };

const formProgressSlice = createSlice({
  name: "formProgress",
  initialState,
  reducers: {
    incrementStep: (state) => {
      localStorage.setItem("formProgress", JSON.stringify(state.nthStep + 1));
      state.nthStep += 1;
    },
    reset: (state) => {
      state.nthStep = 1;
      localStorage.removeItem("formProgress");
    },
  },
});

export const { incrementStep, reset } = formProgressSlice.actions;
export default formProgressSlice.reducer;
