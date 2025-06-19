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
  description:
    "The second point of progression! Significantly less bang for your Kors.",
  multiplier: 1,
  cost: 100,
  isEarned:
    localSecondPoint != null && localSecondPoint === "true" ? true : false,
  progressionType,
  blockingNodes: [
    { progressionType: ProgressionType.carrot, name: "GotThePoint" },
  ],
  hiddenUntilEarned: false,
};
if (!localSecondPoint) {
  localStorage.setItem(SecondPoint, "false");
}

const BiggerRoots = "BiggerRoots";
const localBiggerRoots = localStorage.getItem(BiggerRoots);
CarrotProgressionNodeList[BiggerRoots] = {
  name: BiggerRoots,
  description: "We swear the roots got bigger, you just can't tell. Trust.",
  multiplier: 1,
  cost: 1000,
  isEarned:
    localBiggerRoots != null && localBiggerRoots === "true" ? true : false,
  progressionType,
  blockingNodes: [
    { progressionType: ProgressionType.carrot, name: "SecondPoint" },
  ],
  hiddenUntilEarned: false,
};
if (!localBiggerRoots) {
  localStorage.setItem(BiggerRoots, "false");
}

const GreenerLeaves = "GreenerLeaves";
const localGreenerLeaves = localStorage.getItem(GreenerLeaves);
CarrotProgressionNodeList[GreenerLeaves] = {
  name: GreenerLeaves,
  description: "Yep, those look way healthier.",
  multiplier: 1,
  cost: 10000,
  isEarned:
    localGreenerLeaves != null && localGreenerLeaves === "true" ? true : false,
  progressionType,
  blockingNodes: [
    { progressionType: ProgressionType.carrot, name: "BiggerRoots" },
  ],
  hiddenUntilEarned: false,
};
if (!localGreenerLeaves) {
  localStorage.setItem(GreenerLeaves, "false");
}

const FirstThereIsTheCarrot = "FirstThereIsTheCarrot";
const localFirstThereIsTheCarrot = localStorage.getItem(FirstThereIsTheCarrot);
CarrotProgressionNodeList[FirstThereIsTheCarrot] = {
  name: FirstThereIsTheCarrot,
  description: "You don't want me to have to go get the stick.",
  multiplier: 1,
  cost: 30000,
  isEarned:
    localFirstThereIsTheCarrot != null && localFirstThereIsTheCarrot === "true"
      ? true
      : false,
  progressionType,
  blockingNodes: [
    { progressionType: ProgressionType.carrot, name: "GreenerLeaves" },
  ],
  hiddenUntilEarned: false,
};
if (!localFirstThereIsTheCarrot) {
  localStorage.setItem(FirstThereIsTheCarrot, "false");
}

const JKTheStickIsGreat = "JKTheStickIsGreat";
const localJKTheStickIsGreat = localStorage.getItem(JKTheStickIsGreat);
CarrotProgressionNodeList[JKTheStickIsGreat] = {
  name: JKTheStickIsGreat,
  description: "I lied the stick is amazing, you really wanted this.",
  multiplier: 15,
  cost: 100000,
  isEarned:
    localJKTheStickIsGreat != null && localJKTheStickIsGreat === "true"
      ? true
      : false,
  progressionType,
  blockingNodes: [
    { progressionType: ProgressionType.carrot, name: "FirstThereIsTheCarrot" },
  ],
  hiddenUntilEarned: false,
};
if (!localJKTheStickIsGreat) {
  localStorage.setItem(JKTheStickIsGreat, "false");
}

// has to be lowercase because we use string stuff to find it later.
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

const CarrotProduction = "CarrotProduction!";
const localCarrotProduction = localStorage.getItem(CarrotProduction);
CarrotProgressionNodeList[CarrotProduction] = {
  name: CarrotProduction,
  description:
    "You've earned a nice reputation selling plants. Keep at it. Now you're price will go up as you sell more.",
  multiplier: 5,
  cost: 100,
  isEarned:
    localCarrotProduction != null && localCarrotProduction === "true"
      ? true
      : false,
  progressionType,
  blockingNodes: [
    { progressionType: ProgressionType.garden, name: "MassProduction" },
  ],
  hiddenUntilEarned: false,
};
if (!localCarrotProduction) {
  localStorage.setItem(CarrotProduction, "false");
}

// has to be lowercase because we use string stuff to find it later.
const CarrotSun = "carrotSun";
const localCarrotSun = localStorage.getItem(CarrotSun);
CarrotProgressionNodeList[CarrotSun] = {
  name: CarrotSun,
  description:
    "Allow your carrots to embrace the gentle caress of the great Sol.",
  multiplier: 5,
  cost: 5000,
  isEarned: localCarrotSun != null && localCarrotSun === "true" ? true : false,
  progressionType,
  blockingNodes: [
    { progressionType: ProgressionType.garden, name: "LET THERE BE LIGHT" },
  ],
  hiddenUntilEarned: false,
};
if (!localCarrotSun) {
  localStorage.setItem(CarrotSun, "false");
}

// has to be lowercase because we use string stuff to find it later.
const CarrotSprinkler = "carrotSprinkler";
const localCarrotSprinkler = localStorage.getItem(CarrotSprinkler);
CarrotProgressionNodeList[CarrotSprinkler] = {
  name: CarrotSprinkler,
  description:
    "Add a sprinkler that will automatically water your Carrot plot every 3 seconds! (it will trigger a 'click' every 3 seconds)",
  multiplier: 1,
  cost: 1500,
  isEarned:
    localCarrotSprinkler != null && localCarrotSprinkler === "true"
      ? true
      : false,
  progressionType,
  blockingNodes: [
    { progressionType: ProgressionType.garden, name: "Sprinkler" },
  ],
  hiddenUntilEarned: false,
};
if (!localCarrotSprinkler) {
  localStorage.setItem(CarrotSprinkler, "false");
}
