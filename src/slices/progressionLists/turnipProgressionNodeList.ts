import { Dictionary } from "lodash";
import { ProgressionNode, ProgressionType } from "../helperStructs";

// The list of progression that gets sent over to the slice.
export const TurnipProgressionNodeList: Dictionary<ProgressionNode> = {};

// Set the type here so that it automatically matches for all nodes in this list.
const progressionType: ProgressionType = ProgressionType.turnip;

const TurnipForWhat: string = "TurnipForWhat";
const LocalTurnipForWhat = localStorage.getItem(TurnipForWhat);
TurnipProgressionNodeList[TurnipForWhat] = {
  name: TurnipForWhat,
  description: "Double leafed up on a Tuesday night.",
  multiplier: 2.0,
  cost: 1000,
  isEarned:
    LocalTurnipForWhat != null && LocalTurnipForWhat === "true" ? true : false,
  progressionType,
  blockingNodes: [],
  hiddenUntilEarned: false,
};
if (!LocalTurnipForWhat) {
  localStorage.setItem(TurnipForWhat, "false");
}

const TurnIn: string = "TurnIn";
const LocalTurnIn = localStorage.getItem(TurnIn);
TurnipProgressionNodeList[TurnIn] = {
  name: TurnIn,
  description: "More like we can turn these in for more Kors now amIRight???",
  multiplier: 1.0,
  cost: 2000,
  isEarned: LocalTurnIn != null && LocalTurnIn === "true" ? true : false,
  progressionType,
  blockingNodes: [
    { progressionType: ProgressionType.turnip, name: "TurnipForWhat" },
  ],
  hiddenUntilEarned: false,
};
if (!LocalTurnIn) {
  localStorage.setItem(TurnIn, "false");
}

const Bleach: string = "Bleach";
const LocalBleach = localStorage.getItem(Bleach);
TurnipProgressionNodeList[Bleach] = {
  name: Bleach,
  description: "It's organic tho, I swear.",
  multiplier: 1.0,
  cost: 5000,
  isEarned: LocalBleach != null && LocalBleach === "true" ? true : false,
  progressionType,
  blockingNodes: [{ progressionType: ProgressionType.turnip, name: "TurnIn" }],
  hiddenUntilEarned: false,
};
if (!LocalBleach) {
  localStorage.setItem(Bleach, "false");
}

const TurnUpTheGMO: string = "TurnUpTheGMO";
const LocalTurnUpTheGMO = localStorage.getItem(TurnUpTheGMO);
TurnipProgressionNodeList[TurnUpTheGMO] = {
  name: TurnUpTheGMO,
  description: "All naturally enchanced with science!",
  multiplier: 15.0,
  cost: 500000,
  isEarned:
    LocalTurnUpTheGMO != null && LocalTurnUpTheGMO === "true" ? true : false,
  progressionType,
  blockingNodes: [{ progressionType: ProgressionType.turnip, name: "Bleach" }],
  hiddenUntilEarned: false,
};
if (!LocalTurnUpTheGMO) {
  localStorage.setItem(TurnUpTheGMO, "false");
}

// has to be lowercase because we use string stuff to find it later.
const Skybox = "turnipbox!";
const localSkybox = localStorage.getItem(Skybox);
TurnipProgressionNodeList[Skybox] = {
  name: Skybox,
  description: "It's a bit nippier out now, aye?",
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

const TurnipProduction = "TurnipProduction!";
const localTurnipProduction = localStorage.getItem(TurnipProduction);
TurnipProgressionNodeList[TurnipProduction] = {
  name: TurnipProduction,
  description:
    "You've earned a nice reputation selling plants. Keep at it. Now you're price will go up as you sell more.",
  multiplier: 5,
  cost: 100,
  isEarned:
    localTurnipProduction != null && localTurnipProduction === "true"
      ? true
      : false,
  progressionType,
  blockingNodes: [
    { progressionType: ProgressionType.garden, name: "MassProduction" },
  ],
  hiddenUntilEarned: false,
};
if (!localTurnipProduction) {
  localStorage.setItem(TurnipProduction, "false");
}

// has to be lowercase because we use string stuff to find it later.
const TurnipSun = "turnipSun";
const localTurnipSun = localStorage.getItem(TurnipSun);
TurnipProgressionNodeList[TurnipSun] = {
  name: TurnipSun,
  description:
    "If you add spaces to the title you get 'Turn IP Sun', which is neat ain't it?",
  multiplier: 5,
  cost: 5000,
  isEarned: localTurnipSun != null && localTurnipSun === "true" ? true : false,
  progressionType,
  blockingNodes: [
    { progressionType: ProgressionType.garden, name: "LET THERE BE LIGHT" },
  ],
  hiddenUntilEarned: false,
};
if (!localTurnipSun) {
  localStorage.setItem(TurnipSun, "false");
}
