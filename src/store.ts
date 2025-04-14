import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import progressionReducer from "./slices/progressionSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    progression: progressionReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
