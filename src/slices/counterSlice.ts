import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  count: number;
  totalSold: number;
  totalCarrotsSold: number;
  totalPotatoSold: number;
  totalBeetsSold: number;
  totalTurnipsSold: number;
  totalKorsEarned: number;
}

const localCount = localStorage.getItem("Count");
const checkedCount = localCount == null ? 0 : parseInt(localCount);
const localtotalSold = localStorage.getItem("TotalSold");
const checkedtotalSold = localtotalSold == null ? 0 : parseInt(localtotalSold);
const localtotalCarrotsSold = localStorage.getItem("TotalCarrotsSold");
const checkedtotalCarrotsSold =
  localtotalCarrotsSold == null ? 0 : parseInt(localtotalCarrotsSold);
const localtotalPotatoSold = localStorage.getItem("TotalPotatosSold");
const checkedtotalPotatoSold =
  localtotalPotatoSold == null ? 0 : parseInt(localtotalPotatoSold);
const localtotalBeetsSold = localStorage.getItem("TotalBeetsSold");
const checkedtotalBeetsSold =
  localtotalBeetsSold == null ? 0 : parseInt(localtotalBeetsSold);
const localtotalTurnipsSold = localStorage.getItem("TotalTurnipsSold");
const checkedtotalTurnipsSold =
  localtotalTurnipsSold == null ? 0 : parseInt(localtotalTurnipsSold);
const localtotalKorsEarned = localStorage.getItem("TotalKorsEarned");
const checkedtotalKorsEarned =
  localtotalKorsEarned == null ? 0 : parseInt(localtotalKorsEarned);

const defaultCounterState = {
  count: checkedCount,
  totalSold: checkedtotalSold,
  totalCarrotsSold: checkedtotalCarrotsSold,
  totalPotatoSold: checkedtotalPotatoSold,
  totalBeetsSold: checkedtotalBeetsSold,
  totalTurnipsSold: checkedtotalTurnipsSold,
  totalKorsEarned: checkedtotalKorsEarned,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState: defaultCounterState,
  reducers: {
    increment: (state: CounterState, action: PayloadAction<number>) => {
      state.count += action.payload;
      state.totalKorsEarned += action.payload;
      localStorage.setItem("Count", state.count.toString());
      localStorage.setItem("TotalKorsEarned", state.totalKorsEarned.toString());
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
    incrementCarrot: (state: CounterState) => {
      state.totalCarrotsSold += 1;
      localStorage.setItem(
        "TotalCarrotsSold",
        state.totalCarrotsSold.toString()
      );
      state.totalSold += 1;
      localStorage.setItem("TotalSold", state.totalSold.toString());
    },
    incrementPotato: (state: CounterState) => {
      state.totalPotatoSold += 1;
      localStorage.setItem(
        "TotalPotatosSold",
        state.totalPotatoSold.toString()
      );
      state.totalSold += 1;
      localStorage.setItem("TotalSold", state.totalSold.toString());
    },
    incrementBeet: (state: CounterState) => {
      state.totalBeetsSold += 1;
      localStorage.setItem("TotalBeetsSold", state.totalBeetsSold.toString());
      state.totalSold += 1;
      localStorage.setItem("TotalSold", state.totalSold.toString());
    },
    incrementTurnip: (state: CounterState) => {
      state.totalTurnipsSold += 1;
      localStorage.setItem("TotalTurnipsSold", state.totalBeetsSold.toString());
      state.totalSold += 1;
      localStorage.setItem("TotalSold", state.totalSold.toString());
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  increment,
  decrement,
  clearCount,
  incrementCarrot,
  incrementPotato,
  incrementBeet,
  incrementTurnip,
} = counterSlice.actions;

export default counterSlice.reducer;
