import { createSlice } from "@reduxjs/toolkit";

const formProgressSlice = createSlice({
  name: "formProgress",
  initialState: { nthStep: 1 },
  reducers: {
    incrementStep: (state) => {
      state.nthStep += 1;
    },
    reset: (state) => {
      state.nthStep = 1;
    },
  },
});

export const { incrementStep, reset } = formProgressSlice.actions;
export default formProgressSlice.reducer;
