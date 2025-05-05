import { Dictionary } from "lodash";
import { ProgressionNode, ProgressionType } from "../helperStructs";

export const NewButtonsProgressionNodeList: Dictionary<ProgressionNode> = {};
const progressionType: ProgressionType = ProgressionType.newButtons;

// unlock the 2nd button
const PotatoButton = "UnlockPotato";
const localPotatoButton = localStorage.getItem(PotatoButton);
NewButtonsProgressionNodeList[PotatoButton] = {
  name: PotatoButton,
  description: "Now you can plant a potato!",
  multiplier: 0.0,
  cost: 5,
  isEarned:
    localPotatoButton != null && localPotatoButton === "true" ? true : false,
  progressionType,
  blockingNodes: [],
  hiddenUntilEarned: false,
};
if (!localPotatoButton) {
  localStorage.setItem(PotatoButton, "false");
}

// unlock the 3rd button
const BeetButton = "UnlockBeet";
const localBeetButton = localStorage.getItem(BeetButton);
NewButtonsProgressionNodeList[BeetButton] = {
  name: BeetButton,
  description: "Now you can plant a beet!",
  multiplier: 0.0,
  cost: 50,
  isEarned:
    localBeetButton != null && localBeetButton === "true" ? true : false,
  progressionType,
  blockingNodes: [],
  hiddenUntilEarned: false,
};
if (!localBeetButton) {
  localStorage.setItem(BeetButton, "false");
}

// unlock the 4th button
const TurnipButton = "UnlockTurnip";
const localTurnipButton = localStorage.getItem(TurnipButton);
NewButtonsProgressionNodeList[TurnipButton] = {
  name: TurnipButton,
  description: "Now you can plant a beet!",
  multiplier: 0.0,
  cost: 500,
  isEarned:
    localTurnipButton != null && localTurnipButton === "true" ? true : false,
  progressionType,
  blockingNodes: [],
  hiddenUntilEarned: false,
};
if (!localTurnipButton) {
  localStorage.setItem(TurnipButton, "false");
}
