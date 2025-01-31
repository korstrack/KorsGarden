import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import pointReducer from "./slices/pointSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    point: pointReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
