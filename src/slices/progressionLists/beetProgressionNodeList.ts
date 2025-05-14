import { Dictionary } from "lodash";
import { ProgressionNode, ProgressionType } from "../helperStructs";

// The list of progression that gets sent over to the slice.
export const BeetProgressionNodeList: Dictionary<ProgressionNode> = {};

// Set the type here so that it automatically matches for all nodes in this list.
const progressionType: ProgressionType = ProgressionType.beet;

const BeetsMe: string = "BeetsMe!";
const LocalBeetsMe = localStorage.getItem(BeetsMe);
BeetProgressionNodeList[BeetsMe] = {
  name: BeetsMe,
  description: "Please don't go around beating yourself with your produce.",
  multiplier: 5.0,
  cost: 500,
  isEarned: LocalBeetsMe != null && LocalBeetsMe === "true" ? true : false,
  progressionType,
  blockingNodes: [],
  hiddenUntilEarned: false,
};
if (!LocalBeetsMe) {
  localStorage.setItem(BeetsMe, "false");
}

const BeetsByMe: string = "BeetsByMe!";
const LocalBeetsByMe = localStorage.getItem(BeetsByMe);
BeetProgressionNodeList[BeetsByMe] = {
  name: BeetsByMe,
  description:
    "Well I mean you're growing them, but it's still my farm, yaknow?",
  multiplier: 1.0,
  cost: 5000,
  isEarned: LocalBeetsByMe != null && LocalBeetsByMe === "true" ? true : false,
  progressionType,
  blockingNodes: [{ progressionType: ProgressionType.beet, name: "BeetsMe!" }],
  hiddenUntilEarned: false,
};
if (!LocalBeetsByMe) {
  localStorage.setItem(BeetsByMe, "false");
}

const BeetUpTheCompetition: string = "BeetUpTheCompetition!";
const LocalBeetUpTheCompetition = localStorage.getItem(BeetUpTheCompetition);
BeetProgressionNodeList[BeetUpTheCompetition] = {
  name: BeetUpTheCompetition,
  description:
    "We can't all be winners, but with produce like these their heads can't handle us!",
  multiplier: 15.0,
  cost: 35000,
  isEarned:
    LocalBeetUpTheCompetition != null && LocalBeetUpTheCompetition === "true"
      ? true
      : false,
  progressionType,
  blockingNodes: [
    { progressionType: ProgressionType.beet, name: "BeetsByMe!" },
  ],
  hiddenUntilEarned: false,
};
if (!LocalBeetUpTheCompetition) {
  localStorage.setItem(BeetUpTheCompetition, "false");
}

// has to be lowercase because we use string stuff to find it later.
const Skybox = "beetbox!";
const localSkybox = localStorage.getItem(Skybox);
BeetProgressionNodeList[Skybox] = {
  name: Skybox,
  description: "Boots and cats! Boots and cats!",
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

const BeetProduction = "BeetProduction!";
const localBeetProduction = localStorage.getItem(BeetProduction);
BeetProgressionNodeList[BeetProduction] = {
  name: BeetProduction,
  description:
    "You've earned a nice reputation selling plants. Keep at it. Now you're price will go up as you sell more.",
  multiplier: 5,
  cost: 100,
  isEarned:
    localBeetProduction != null && localBeetProduction === "true"
      ? true
      : false,
  progressionType,
  blockingNodes: [
    { progressionType: ProgressionType.garden, name: "MassProduction" },
  ],
  hiddenUntilEarned: false,
};
if (!localBeetProduction) {
  localStorage.setItem(BeetProduction, "false");
}

// has to be lowercase because we use string stuff to find it later.
const BeetSun = "beetSun";
const localBeetSun = localStorage.getItem(BeetSun);
BeetProgressionNodeList[BeetSun] = {
  name: BeetSun,
  description: "This is not a command.",
  multiplier: 5,
  cost: 5000,
  isEarned: localBeetSun != null && localBeetSun === "true" ? true : false,
  progressionType,
  blockingNodes: [
    { progressionType: ProgressionType.garden, name: "LET THERE BE LIGHT" },
  ],
  hiddenUntilEarned: false,
};
if (!localBeetSun) {
  localStorage.setItem(BeetSun, "false");
}
