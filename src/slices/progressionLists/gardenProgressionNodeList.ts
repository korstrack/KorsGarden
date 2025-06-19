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

// Unlock for the Corruption Progression Nodes
const Corruption: string = "Corruption";
const LocalCorruption = localStorage.getItem(Corruption);
GardenProgressionNodeList[Corruption] = {
  name: Corruption,
  description: "With great power comes horrible UI design.", // description of the node.
  multiplier: -1,
  cost: 5000,
  isEarned:
    LocalCorruption != null && LocalCorruption === "true" ? true : false,
  progressionType,
  blockingNodes: [],
  hiddenUntilEarned: true,
};
if (!LocalCorruption) {
  localStorage.setItem(Corruption, "false");
}

// Unlocks the scaling multiplier nodes for each plant
const MassProduction: string = "MassProduction";
const LocalMassProduction = localStorage.getItem(MassProduction);
GardenProgressionNodeList[MassProduction] = {
  name: MassProduction,
  description:
    "Congratulations on selling all those plants! You're way better at it now that you've tried so many times.", // description of the node.
  multiplier: 5,
  cost: 0,
  isEarned:
    LocalMassProduction != null && LocalMassProduction === "true"
      ? true
      : false,
  progressionType,
  blockingNodes: [],
  hiddenUntilEarned: true,
};
if (!LocalMassProduction) {
  localStorage.setItem(MassProduction, "false");
}

// Unlocks the sun
const LETTHEREBELIGHT: string = "LET THERE BE LIGHT";
const LocalLETTHEREBELIGHT = localStorage.getItem(LETTHEREBELIGHT);
GardenProgressionNodeList[LETTHEREBELIGHT] = {
  name: LETTHEREBELIGHT,
  description: "Praise The Sun!",
  multiplier: 5,
  cost: 10000,
  isEarned:
    LocalLETTHEREBELIGHT != null && LocalLETTHEREBELIGHT === "true"
      ? true
      : false,
  progressionType,
  blockingNodes: [{ progressionType: ProgressionType.garden, name: "Skybox!" }],
  hiddenUntilEarned: false,
};
if (!LocalLETTHEREBELIGHT) {
  localStorage.setItem(LETTHEREBELIGHT, "false");
}

// Unlocks Sprinklers
const Sprinkler: string = "Sprinkler";
const LocalSprinkler = localStorage.getItem(Sprinkler);
GardenProgressionNodeList[Sprinkler] = {
  name: Sprinkler,
  description:
    "Unlocks the ability to purchase a sprinkler for a plot. Sprinklers help your plants grow without you having to tend to them yourself!",
  multiplier: 1,
  cost: 1500,
  isEarned: LocalSprinkler != null && LocalSprinkler === "true" ? true : false,
  progressionType,
  blockingNodes: [],
  hiddenUntilEarned: false,
};
if (!LocalSprinkler) {
  localStorage.setItem(Sprinkler, "false");
}
