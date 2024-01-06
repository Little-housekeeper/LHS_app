import { configureStore } from "@reduxjs/toolkit";
import formProgressReducer from "./slices/formProgressSlice";

export const store = configureStore({
  reducer: { formProgress: formProgressReducer },
});

export type RootState = ReturnType<typeof store.getState>;
