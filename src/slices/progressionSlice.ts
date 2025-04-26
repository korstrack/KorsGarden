import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProgressionNode, ProgressionType } from "./helperStructs";
import { CarrotProgressionNodeList } from "./progressionLists/carrotProgressionNodeList";
import { Dictionary } from "lodash";
import { GardenProgressionNodeList } from "./progressionLists/gardenProgressionNodeList";
import { NewButtonsProgressionNodeList } from "./progressionLists/newButtonsProgressionNodeList";
import { UserInterfaceProgressionNodeList } from "./progressionLists/userInterfaceProgressionNodeList";
import { PotatoProgressionNodeList } from "./progressionLists/potatoProgressionNodeList";
import { BeetProgressionNodeList } from "./progressionLists/beetProgressionNodeList";
import { TurnipProgressionNodeList } from "./progressionLists/turnipProgressionNodeList";

interface ProgressionState {
  gardenMultiplier: number;
  carrotMultiplier: number;
  potatoMultiplier: number;
  beetMultiplier: number;
  turnipMultiplier: number;
  gardenProgression: Dictionary<ProgressionNode>;
  newButtonsProgression: Dictionary<ProgressionNode>;
  userInterfaceProgression: Dictionary<ProgressionNode>;
  carrotProgression: Dictionary<ProgressionNode>;
  potatoProgression: Dictionary<ProgressionNode>;
  beetProgression: Dictionary<ProgressionNode>;
  turnipProgression: Dictionary<ProgressionNode>;
}

// get local values of multipliers if they exist.
// garden multiplier
const localGardenMultiplier: string = localStorage.getItem("GardenMultiplier");
const ParsedLocalGardenMultiplier: number =
  localGardenMultiplier == null ? 5 : parseFloat(localGardenMultiplier);
//carrot multiplier
const localCarrotMultiplier: string = localStorage.getItem("CarrotMultiplier");
const ParsedLocalCarrotMultiplier: number =
  localCarrotMultiplier == null ? 1 : parseFloat(localCarrotMultiplier);
//potato multiplier
const localPotatoMultiplier: string = localStorage.getItem("PotatoMultiplier");
const ParsedLocalPotatoMultiplier: number =
  localPotatoMultiplier == null ? 2 : parseFloat(localPotatoMultiplier);
//beet multiplier
const localBeetMultiplier: string = localStorage.getItem("BeetMultiplier");
const ParsedLocalBeetMultiplier: number =
  localBeetMultiplier == null ? 4 : parseFloat(localBeetMultiplier);
//turnip multiplier
const localTurnipMultiplier: string = localStorage.getItem("TurnipMultiplier");
const ParsedLocalTurnipMultiplier: number =
  localTurnipMultiplier == null ? 8 : parseFloat(localTurnipMultiplier);

const defaultProgressionState: ProgressionState = {
  gardenMultiplier: ParsedLocalGardenMultiplier,
  carrotMultiplier: ParsedLocalCarrotMultiplier,
  potatoMultiplier: ParsedLocalPotatoMultiplier,
  beetMultiplier: ParsedLocalBeetMultiplier,
  turnipMultiplier: ParsedLocalTurnipMultiplier,
  gardenProgression: GardenProgressionNodeList,
  newButtonsProgression: NewButtonsProgressionNodeList,
  userInterfaceProgression: UserInterfaceProgressionNodeList,
  carrotProgression: CarrotProgressionNodeList,
  potatoProgression: PotatoProgressionNodeList,
  beetProgression: BeetProgressionNodeList,
  turnipProgression: TurnipProgressionNodeList,
};

export const progressionSlice = createSlice({
  name: "progression",
  initialState: defaultProgressionState,
  reducers: {
    addGardenProgression: (
      state: ProgressionState,
      action: PayloadAction<ProgressionNode>
    ) => {
      // make sure this is the correct progression type being added
      if (action.payload.progressionType != ProgressionType.garden) {
        console.error(
          "For some reason we tried to update Carrot Progression with this progression type? : ",
          action.payload.progressionType,
          "Here is the entire node passed in : ",
          action.payload
        );
        return;
      }
      let node = state.gardenProgression[action.payload.name];
      if (node) {
        state.gardenMultiplier += node.multiplier;
        localStorage.setItem(
          "GardenMultiplier",
          state.gardenMultiplier.toString()
        );
        node.isEarned = true;
        state.gardenProgression[action.payload.name] = node;
        localStorage.setItem(action.payload.name, "true");
      } else {
        console.error(
          "What progress are you trying to earn??? We don't even have a box to check for that!! You earned?!?!?! : ",
          action.payload
        );
      }
    },
    addNewButtonProgression: (
      state: ProgressionState,
      action: PayloadAction<ProgressionNode>
    ) => {
      // make sure this is the correct progression type being added
      if (action.payload.progressionType != ProgressionType.newButtons) {
        console.error(
          "For some reason we tried to update Carrot Progression with this progression type? : ",
          action.payload.progressionType,
          "Here is the entire node passed in : ",
          action.payload
        );
        return;
      }
      let node = state.newButtonsProgression[action.payload.name];
      if (node) {
        node.isEarned = true;
        state.newButtonsProgression[action.payload.name] = node;
        localStorage.setItem(action.payload.name, "true");
      } else {
        console.error(
          "What progress are you trying to earn??? We don't even have a box to check for that!! You earned?!?!?! : ",
          action.payload
        );
      }
    },
    addUserInterfaceProgression: (
      state: ProgressionState,
      action: PayloadAction<ProgressionNode>
    ) => {
      // make sure this is the correct progression type being added
      if (action.payload.progressionType != ProgressionType.userInterface) {
        console.error(
          "For some reason we tried to update Carrot Progression with this progression type? : ",
          action.payload.progressionType,
          "Here is the entire node passed in : ",
          action.payload
        );
        return;
      }
      let node = state.userInterfaceProgression[action.payload.name];
      if (node) {
        state.gardenMultiplier += node.multiplier;
        localStorage.setItem(
          "GardenMultiplier",
          state.gardenMultiplier.toString()
        );
        node.isEarned = true;
        state.userInterfaceProgression[action.payload.name] = node;
        localStorage.setItem(action.payload.name, "true");
      } else {
        console.error(
          "What progress are you trying to earn??? We don't even have a box to check for that!! You earned?!?!?! : ",
          action.payload
        );
      }
    },
    addCarrotProgression: (
      state: ProgressionState,
      action: PayloadAction<ProgressionNode>
    ) => {
      // make sure this is the correct progression type being added
      if (action.payload.progressionType != ProgressionType.carrot) {
        console.error(
          "For some reason we tried to update Carrot Progression with this progression type? : ",
          action.payload.progressionType,
          "Here is the entire node passed in : ",
          action.payload
        );
        return;
      }
      let node = state.carrotProgression[action.payload.name];
      if (node) {
        state.carrotMultiplier += node.multiplier;
        localStorage.setItem(
          "CarrotMultiplier",
          state.carrotMultiplier.toString()
        );
        node.isEarned = true;
        state.carrotProgression[action.payload.name] = node;
        localStorage.setItem(action.payload.name, "true");
      } else {
        console.error(
          "What progress are you trying to earn??? We don't even have a box to check for that!! You earned?!?!?! : ",
          action.payload
        );
      }
    },
    addPotatoProgression: (
      state: ProgressionState,
      action: PayloadAction<ProgressionNode>
    ) => {
      // make sure this is the correct progression type being added
      if (action.payload.progressionType != ProgressionType.potato) {
        console.error(
          "For some reason we tried to update Potato Progression with this progression type? : ",
          action.payload.progressionType,
          "Here is the entire node passed in : ",
          action.payload
        );
        return;
      }
      let node = state.potatoProgression[action.payload.name];
      if (node) {
        state.potatoMultiplier += node.multiplier;
        localStorage.setItem(
          "PotatoMultiplier",
          state.potatoMultiplier.toString()
        );
        node.isEarned = true;
        state.potatoProgression[action.payload.name] = node;
        localStorage.setItem(action.payload.name, "true");
      } else {
        console.error(
          "What progress are you trying to earn??? We don't even have a box to check for that!! You earned?!?!?! : ",
          action.payload,
          state.potatoProgression
        );
      }
    },
    addBeetProgression: (
      state: ProgressionState,
      action: PayloadAction<ProgressionNode>
    ) => {
      // make sure this is the correct progression type being added
      if (action.payload.progressionType != ProgressionType.beet) {
        console.error(
          "For some reason we tried to update Beet Progression with this progression type? : ",
          action.payload.progressionType,
          "Here is the entire node passed in : ",
          action.payload
        );
        return;
      }
      let node = state.beetProgression[action.payload.name];
      if (node) {
        state.beetMultiplier += node.multiplier;
        localStorage.setItem("BeetMultiplier", state.beetMultiplier.toString());
        node.isEarned = true;
        state.beetProgression[action.payload.name] = node;
        localStorage.setItem(action.payload.name, "true");
      } else {
        console.error(
          "What progress are you trying to earn??? We don't even have a box to check for that!! You earned?!?!?! : ",
          action.payload,
          state.potatoProgression
        );
      }
    },
    addTurnipProgression: (
      state: ProgressionState,
      action: PayloadAction<ProgressionNode>
    ) => {
      // make sure this is the correct progression type being added
      if (action.payload.progressionType != ProgressionType.turnip) {
        console.error(
          "For some reason we tried to update Beet Progression with this progression type? : ",
          action.payload.progressionType,
          "Here is the entire node passed in : ",
          action.payload
        );
        return;
      }
      let node = state.turnipProgression[action.payload.name];
      if (node) {
        state.turnipMultiplier += node.multiplier;
        localStorage.setItem(
          "TurnipMultiplier",
          state.turnipMultiplier.toString()
        );
        node.isEarned = true;
        state.turnipProgression[action.payload.name] = node;
        localStorage.setItem(action.payload.name, "true");
      } else {
        console.error(
          "What progress are you trying to earn??? We don't even have a box to check for that!! You earned?!?!?! : ",
          action.payload,
          state.potatoProgression
        );
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addGardenProgression,
  addNewButtonProgression,
  addUserInterfaceProgression,
  addCarrotProgression,
  addPotatoProgression,
  addBeetProgression,
  addTurnipProgression,
} = progressionSlice.actions;

export default progressionSlice.reducer;
