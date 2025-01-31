import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProgressionNode } from "./helperStructs";
import { PointProgressionNodeList } from "./pointProgressionNodeList";
import { Dictionary } from "lodash";

interface PointState {
  multiplier: number;
  pointProgression: Dictionary<ProgressionNode>;
}

const localMultiplier: string = localStorage.getItem("pointMultiplier");
const ParsedLocalMultiplier: number =
  localMultiplier == null ? 1 : parseFloat(localMultiplier);

const defaultPointState: PointState = {
  multiplier: ParsedLocalMultiplier,
  pointProgression: PointProgressionNodeList,
};

export const pointSlice = createSlice({
  name: "counter",
  initialState: defaultPointState,
  reducers: {
    addProgression: (state: PointState, action: PayloadAction<string>) => {
      let node = state.pointProgression[action.payload];
      if (node) {
        state.multiplier += node.multiplier;
        localStorage.setItem("pointMultiplier", state.multiplier.toString());
        node.isEarned = true;
        state.pointProgression[action.payload] = node;
        localStorage.setItem(action.payload, "true");
      } else {
        console.error(
          "What progress are you trying to earn??? We don't even have a box to check for that!! You earned?!?!?! : ",
          action.payload
        );
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addProgression } = pointSlice.actions;

export default pointSlice.reducer;
