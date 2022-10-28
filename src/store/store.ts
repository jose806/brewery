import { configureStore } from "@reduxjs/toolkit";
import brewerySlice from "./brewerySlice";

export const store = configureStore({
  reducer: { brewerySlice },
});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;
