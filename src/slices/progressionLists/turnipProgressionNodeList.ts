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
