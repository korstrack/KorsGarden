import { Dictionary } from "lodash";
import { ProgressionNode } from "./helperStructs";

export const PointProgressionNodeList: Dictionary<ProgressionNode> = {};

// Start of the hardish coded Point Progression List

const GotThePoint: string = "GotThePoint";
const localGotThePoint = localStorage.getItem(GotThePoint);
PointProgressionNodeList[GotThePoint] = {
  name: GotThePoint,
  description:
    "The first POINT of Progression! Pay 10 score and earn DOUBLE THE REWARDS!",
  multiplier: 1,
  cost: 10,
  isEarned:
    localGotThePoint != null && localGotThePoint === "true" ? true : false,
};
if (!localGotThePoint) {
  localStorage.setItem(GotThePoint, "false");
}

const SecondPoint = "SecondPoint";
const localSecondPoint = localStorage.getItem(SecondPoint);
PointProgressionNodeList[SecondPoint] = {
  name: SecondPoint,
  description: "The second point of progression! Worth significantly less.",
  multiplier: 0.1,
  cost: 100,
  isEarned:
    localSecondPoint != null && localSecondPoint === "true" ? true : false,
};
if (!localSecondPoint) {
  localStorage.setItem(SecondPoint, "false");
}

const NewButton = "2ndButton";
const localNewButton = localStorage.getItem(NewButton);
PointProgressionNodeList[NewButton] = {
  name: NewButton,
  description: "The second button you can unlock!",
  multiplier: 0.0,
  cost: 15,
  isEarned: localNewButton != null && localNewButton === "true" ? true : false,
};
if (!localNewButton) {
  localStorage.setItem(NewButton, "false");
}

// export function getPointProgressionNodeList(): Dictionary<ProgressionNode> {
//   return PointProgressionNodeList;
// }
