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
};
if (!LocalMoreNubby) {
  localStorage.setItem(MoreNubby, "false");
}
