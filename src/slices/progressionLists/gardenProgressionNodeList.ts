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
  description: "LET THERE BE SKYBOX", // description of the node.
  multiplier: 10.0,
  cost: 100,
  isEarned: LocalSky != null && LocalSky === "true" ? true : false,
  progressionType,
  blockingNodes: [],
  hiddenUntilEarned: false,
};
if (!LocalSky) {
  localStorage.setItem(Sky, "false");
}

// Node unlocked for reading the about me page
const AboutMe: string = "AboutMe";
const LocalAboutMe = localStorage.getItem(AboutMe);
GardenProgressionNodeList[AboutMe] = {
  name: AboutMe,
  description: "Thank you for at least clicking on the about me page :D", // description of the node.
  multiplier: 1,
  cost: 0,
  isEarned: LocalAboutMe != null && LocalAboutMe === "true" ? true : false,
  progressionType,
  blockingNodes: [],
  hiddenUntilEarned: true,
};
if (!LocalAboutMe) {
  localStorage.setItem(AboutMe, "false");
}
