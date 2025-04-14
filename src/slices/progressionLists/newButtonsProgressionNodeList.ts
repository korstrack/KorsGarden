import { Dictionary } from "lodash";
import { ProgressionNode, ProgressionType } from "../helperStructs";

export const NewButtonsProgressionNodeList: Dictionary<ProgressionNode> = {};
const progressionType: ProgressionType = ProgressionType.newButtons;

// unlock the 2nd button
const NewButton = "UnlockPotato";
const localNewButton = localStorage.getItem(NewButton);
NewButtonsProgressionNodeList[NewButton] = {
  name: NewButton,
  description: "Now you can plant a potato!",
  multiplier: 0.0,
  cost: 15,
  isEarned: localNewButton != null && localNewButton === "true" ? true : false,
  progressionType,
};
if (!localNewButton) {
  localStorage.setItem(NewButton, "false");
}
