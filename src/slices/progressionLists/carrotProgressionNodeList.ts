import { Dictionary } from "lodash";
import { ProgressionNode, ProgressionType } from "../helperStructs";

export const CarrotProgressionNodeList: Dictionary<ProgressionNode> = {};
const progressionType: ProgressionType = ProgressionType.carrot;

// Start of the hardish coded Point Progression List

const GotThePoint: string = "GotThePoint";
const localGotThePoint = localStorage.getItem(GotThePoint);
CarrotProgressionNodeList[GotThePoint] = {
  name: GotThePoint,
  description:
    "The first POINT of Progression! Pay 10 score and earn DOUBLE THE REWARDS!",
  multiplier: 1,
  cost: 10,
  isEarned:
    localGotThePoint != null && localGotThePoint === "true" ? true : false,
  progressionType,
};
if (!localGotThePoint) {
  localStorage.setItem(GotThePoint, "false");
}

const SecondPoint = "SecondPoint";
const localSecondPoint = localStorage.getItem(SecondPoint);
CarrotProgressionNodeList[SecondPoint] = {
  name: SecondPoint,
  description: "The second point of progression! Worth significantly less.",
  multiplier: 0.1,
  cost: 100,
  isEarned:
    localSecondPoint != null && localSecondPoint === "true" ? true : false,
  progressionType,
};
if (!localSecondPoint) {
  localStorage.setItem(SecondPoint, "false");
}

// export function getPointProgressionNodeList(): Dictionary<ProgressionNode> {
//   return PointProgressionNodeList;
// }
