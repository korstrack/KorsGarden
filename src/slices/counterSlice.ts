import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  count: number;
}

const localCount = localStorage.getItem("Count");
const checkedCount = localCount == null ? 0 : parseInt(localCount);
const defaultCounterState = {
  count: checkedCount,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState: defaultCounterState,
  reducers: {
    increment: (state: CounterState, action: PayloadAction<number>) => {
      state.count += parseInt((1 * action.payload).toPrecision(1));
      localStorage.setItem("Count", state.count.toString());
    },
    decrement: (state: CounterState, action: PayloadAction<number>) => {
      if (state.count < action.payload) {
        console.error(
          "why are we subtracting to the negatives right now??? current coutn: ",
          state.count,
          " current decrement: ",
          action.payload
        );
        state.count = 0;
      } else {
        state.count -= action.payload;
        localStorage.setItem("Count", state.count.toString());
      }
    },
    clearCount: (state: CounterState) => {
      state.count = 0;
      localStorage.setItem("Count", "0");
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, clearCount } = counterSlice.actions;

export default counterSlice.reducer;
