import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  count: number;
}

const localCount = localStorage.getItem("count");
const checkedCount = localCount == null ? 0 : parseInt(localCount);
const defaultCounterState = {
  count: checkedCount,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState: defaultCounterState,
  reducers: {
    increment: (state: CounterState, action: PayloadAction<number>) => {
      state.count += 1 * action.payload;
      localStorage.setItem("count", state.count.toString());
    },
    clearCount: (state: CounterState) => {
      state.count = 0;
      localStorage.setItem("count", "0");
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, clearCount } = counterSlice.actions;

export default counterSlice.reducer;
