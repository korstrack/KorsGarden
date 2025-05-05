import { Dictionary } from "lodash";
import { ProgressionNode, ProgressionType } from "../helperStructs";

// The list of progression that gets sent over to the slice.
export const TemplateProgressionNodeList: Dictionary<ProgressionNode> = {};

// Set the type here so that it automatically matches for all nodes in this list.
const progressionType: ProgressionType = ProgressionType.userInterface;

// Uncomment for easier readying. Probably comment the unannotated one for fewer red lines too.
// const Name: string = "NameOfNode"; // This will be the name of the node, both used in code and displayed to the user.
// const LocalName = localStorage.getItem(Name); // This is the value stored locally if there is one.
// TemplateProgressionNodeList[Name] = {
//   name: Name, // stores the name of the node.
//   description:
//     "This is just a template value you can copy and paste when making a new progression node!", // description of the node.
//   multiplier: 0.0, // the multiplier added when this progression is earned.
//   cost: 1000000, // the cost to buy this progression node.
//   isEarned: LocalName != null && LocalName === "true" ? true : false, // if this progression node has been earned.
//   progressionType, // the type of progression this is, what tab the node shows up in.
//   blockingNodes: [] // list of progression nodes that block this node appearing, each blocking node entry will have
//      the progression type and name of the node that blocks it. You have to earn all blocking nodes before this node will be visible to the player
//   hiddenUntilEarned: false // this will means that until this node has been earned it wont appear
// }; // the node itself.
// if (!LocalName) {
//   // if there isn't a local version of this node yet, make one.
//   localStorage.setItem(Name, "false");
// }

// Unannotated for cleaner copy paste.

const TempName: string = "TempNameOfNode";
const TempLocalName = localStorage.getItem(TempName);
TemplateProgressionNodeList[TempName] = {
  name: TempName,
  description:
    "This is just a template value you can copy and paste when making a new progression node!",
  multiplier: 0.0,
  cost: 1000000,
  isEarned: TempLocalName != null && TempLocalName === "true" ? true : false,
  progressionType,
  blockingNodes: [],
  hiddenUntilEarned: false,
};
if (!TempLocalName) {
  localStorage.setItem(TempName, "false");
}
