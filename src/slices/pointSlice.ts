import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PointProgressionBools {
  GotThePoint: boolean;
}

interface PointProgressionBoolMultipliers {
  GotThePoint: number;
}

interface PointState {
  multiplier: number;
}

const defaultPointState = {
  multiplier: 1,
};

export const pointSlice = createSlice({
  name: "counter",
  initialState: defaultPointState,
  reducers: {
    updateProgression: (state: PointState) => {
      state.multiplier += 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateProgression } = pointSlice.actions;

export default pointSlice.reducer;
