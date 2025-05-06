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
  blockingNodes: [],
  hiddenUntilEarned: false,
};
if (!localGotThePoint) {
  localStorage.setItem(GotThePoint, "false");
}

const SecondPoint = "SecondPoint";
const localSecondPoint = localStorage.getItem(SecondPoint);
CarrotProgressionNodeList[SecondPoint] = {
  name: SecondPoint,
  description: "The second point of progression! Worth significantly less.",
  multiplier: 1,
  cost: 100,
  isEarned:
    localSecondPoint != null && localSecondPoint === "true" ? true : false,
  progressionType,
  blockingNodes: [],
  hiddenUntilEarned: false,
};
if (!localSecondPoint) {
  localStorage.setItem(SecondPoint, "false");
}

const Skybox = "carrotbox!";
const localSkybox = localStorage.getItem(Skybox);
CarrotProgressionNodeList[Skybox] = {
  name: Skybox,
  description: "Lets your carrots see the open air!",
  multiplier: 5,
  cost: 100,
  isEarned: localSkybox != null && localSkybox === "true" ? true : false,
  progressionType,
  blockingNodes: [{ progressionType: ProgressionType.garden, name: "Skybox!" }],
  hiddenUntilEarned: false,
};
if (!localSkybox) {
  localStorage.setItem(Skybox, "false");
}

// export function getPointProgressionNodeList(): Dictionary<ProgressionNode> {
//   return PointProgressionNodeList;
// }
