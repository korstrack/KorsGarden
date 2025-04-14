import { Dictionary } from "lodash";
import { ProgressionNode, ProgressionType } from "../helperStructs";

export const UserInterfaceProgressionNodeList: Dictionary<ProgressionNode> = {};
const progressionType: ProgressionType = ProgressionType.userInterface;

const ButtonsCanSpin: string = "YouSpinMeRightRound";
const LocalButtonsCanSpin = localStorage.getItem(ButtonsCanSpin);
UserInterfaceProgressionNodeList[ButtonsCanSpin] = {
  name: ButtonsCanSpin,
  description: "This unlocks the button progression that lets them spin.",
  multiplier: 0.0,
  cost: 1000000,
  isEarned:
    LocalButtonsCanSpin != null && LocalButtonsCanSpin === "true"
      ? true
      : false,
  progressionType,
};
if (!LocalButtonsCanSpin) {
  localStorage.setItem(ButtonsCanSpin, "false");
}
