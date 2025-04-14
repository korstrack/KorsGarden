import { Dictionary } from "lodash";
import { ProgressionNode, ProgressionType } from "../helperStructs";

export const GardenProgressionNodeList: Dictionary<ProgressionNode> = {};
const progressionType: ProgressionType = ProgressionType.garden;

// Start of the hardish coded Garden Progression List

// Node that will unlock the skybox for the garden.
const Sky: string = "Skybox!";
const LocalSky = localStorage.getItem(Sky);
GardenProgressionNodeList[Sky] = {
  name: Sky,
  description:
    "This is just a template value you can copy and paste when making a new progression node!", // description of the node.
  multiplier: 10.0,
  cost: 1000000,
  isEarned: LocalSky != null && LocalSky === "true" ? true : false,
  progressionType,
};
if (!LocalSky) {
  localStorage.setItem(Sky, "false");
}
