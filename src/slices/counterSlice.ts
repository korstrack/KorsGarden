import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProgressionType } from "./helperStructs";

interface CounterState {
  count: number;
  selectedProgression: ProgressionType;
}

const localCount = localStorage.getItem("count");
const checkedCount = localCount == null ? 0 : parseInt(localCount);
const defaultCounterState = {
  count: checkedCount,
  selectedProgression: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState: defaultCounterState,
  reducers: {
    increment: (state: CounterState, action: PayloadAction<number>) => {
      state.count += parseInt((1 * action.payload).toPrecision(1));
      localStorage.setItem("count", state.count.toString());
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
        localStorage.setItem("count", state.count.toString());
      }
    },
    clearCount: (state: CounterState) => {
      state.count = 0;
      localStorage.setItem("count", "0");
    },
    setProgressionType: (
      state: CounterState,
      action: PayloadAction<ProgressionType>
    ) => {
      state.selectedProgression = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, clearCount, setProgressionType } =
  counterSlice.actions;

export default counterSlice.reducer;
