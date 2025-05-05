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

const Skybox = "potatobox!";
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
