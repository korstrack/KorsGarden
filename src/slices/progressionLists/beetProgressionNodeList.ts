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
