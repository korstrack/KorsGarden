import { Dictionary } from "lodash";
import { ProgressionNode, ProgressionType } from "../helperStructs";

export const PotatoProgressionNodeList: Dictionary<ProgressionNode> = {};
const progressionType: ProgressionType = ProgressionType.potato;

const MoreNubby: string = "MoreNubby";
const LocalMoreNubby = localStorage.getItem(MoreNubby);
PotatoProgressionNodeList[MoreNubby] = {
  name: MoreNubby,
  description:
    "What if, and hear me out, we made these taters even NUBBIER, than they were before!",
  multiplier: 2.0,
  cost: 50,
  isEarned: LocalMoreNubby != null && LocalMoreNubby === "true" ? true : false,
  progressionType,
  blockingNodes: [],
  hiddenUntilEarned: false,
};
if (!LocalMoreNubby) {
  localStorage.setItem(MoreNubby, "false");
}

const RounderNubs: string = "RounderNubs";
const LocalRounderNubs = localStorage.getItem(RounderNubs);
PotatoProgressionNodeList[RounderNubs] = {
  name: RounderNubs,
  description: "Lets round out our taters a bit.",
  multiplier: 1.0,
  cost: 200,
  isEarned:
    LocalRounderNubs != null && LocalRounderNubs === "true" ? true : false,
  progressionType,
  blockingNodes: [
    { progressionType: ProgressionType.potato, name: "MoreNubby" },
  ],
  hiddenUntilEarned: false,
};
if (!LocalRounderNubs) {
  localStorage.setItem(RounderNubs, "false");
}

const SpottyNubs: string = "SpottyNubs";
const LocalSpottyNubs = localStorage.getItem(SpottyNubs);
PotatoProgressionNodeList[SpottyNubs] = {
  name: SpottyNubs,
  description: "These are the good type of spots.",
  multiplier: 1.0,
  cost: 500,
  isEarned:
    LocalSpottyNubs != null && LocalSpottyNubs === "true" ? true : false,
  progressionType,
  blockingNodes: [
    { progressionType: ProgressionType.potato, name: "RounderNubs" },
  ],
  hiddenUntilEarned: false,
};
if (!LocalSpottyNubs) {
  localStorage.setItem(SpottyNubs, "false");
}

const PoooooEmphasisOnTheToes: string = "Pooooo-emphasis-on-the-toes";
const LocalPoooooEmphasisOnTheToes = localStorage.getItem(
  PoooooEmphasisOnTheToes
);
PotatoProgressionNodeList[PoooooEmphasisOnTheToes] = {
  name: PoooooEmphasisOnTheToes,
  description:
    "Look if we market them this way some people just really want to spend more Kors on them for some reason.",
  multiplier: 15.0,
  cost: 15000,
  isEarned:
    LocalPoooooEmphasisOnTheToes != null &&
    LocalPoooooEmphasisOnTheToes === "true"
      ? true
      : false,
  progressionType,
  blockingNodes: [
    { progressionType: ProgressionType.potato, name: "SpottyNubs" },
  ],
  hiddenUntilEarned: false,
};
if (!LocalPoooooEmphasisOnTheToes) {
  localStorage.setItem(PoooooEmphasisOnTheToes, "false");
}

// has to be lowercase because we use string stuff to find it later.
const Skybox = "botatobox!";
const localSkybox = localStorage.getItem(Skybox);
PotatoProgressionNodeList[Skybox] = {
  name: Skybox,
  description: "Exposes your growing potato to the elements!",
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

const PotatoProduction = "PotatoProduction!";
const localPotatoProduction = localStorage.getItem(PotatoProduction);
PotatoProgressionNodeList[PotatoProduction] = {
  name: PotatoProduction,
  description:
    "You've earned a nice reputation selling plants. Keep at it. Now you're price will go up as you sell more.",
  multiplier: 5,
  cost: 100,
  isEarned:
    localPotatoProduction != null && localPotatoProduction === "true"
      ? true
      : false,
  progressionType,
  blockingNodes: [
    { progressionType: ProgressionType.garden, name: "MassProduction" },
  ],
  hiddenUntilEarned: false,
};
if (!localPotatoProduction) {
  localStorage.setItem(PotatoProduction, "false");
}

// has to be lowercase because we use string stuff to find it later.
const PotatoSun = "potatoSun";
const localPotatoSun = localStorage.getItem(PotatoSun);
PotatoProgressionNodeList[PotatoSun] = {
  name: PotatoSun,
  description: "It works just as well as the other Suns on the market.",
  multiplier: 5,
  cost: 5000,
  isEarned: localPotatoSun != null && localPotatoSun === "true" ? true : false,
  progressionType,
  blockingNodes: [
    { progressionType: ProgressionType.garden, name: "LET THERE BE LIGHT" },
  ],
  hiddenUntilEarned: false,
};
if (!localPotatoSun) {
  localStorage.setItem(PotatoSun, "false");
}

// has to be lowercase because we use string stuff to find it later.
const potatoSprinkler = "potatoSprinkler";
const localpotatoSprinkler = localStorage.getItem(potatoSprinkler);
PotatoProgressionNodeList[potatoSprinkler] = {
  name: potatoSprinkler,
  description:
    "Add a sprinkler that will automatically water your Potato plot every 3 seconds! (it will trigger a 'click' every 3 seconds)",
  multiplier: 5,
  cost: 2000,
  isEarned:
    localpotatoSprinkler != null && localpotatoSprinkler === "true"
      ? true
      : false,
  progressionType,
  blockingNodes: [
    { progressionType: ProgressionType.garden, name: "Sprinkler" },
  ],
  hiddenUntilEarned: false,
};
if (!localpotatoSprinkler) {
  localStorage.setItem(potatoSprinkler, "false");
}
