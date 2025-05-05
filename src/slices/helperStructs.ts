export interface ProgressionNode {
  name: string;
  description: string;
  multiplier: number;
  cost: number;
  isEarned: boolean;
  progressionType: ProgressionType;
  blockingNodes: BlockingNode[];
  hiddenUntilEarned: boolean;
}

interface BlockingNode {
  progressionType: ProgressionType;
  name: string;
}

export enum ProgressionType {
  garden = "garden", // this is progression for the garden as a whole
  newButtons = "newButtons", // these progression nodes unlock new buttons
  userInterface = "userInterface", // this is progression that augments the users interaction with the UI
  carrot = "carrot",
  potato = "potato",
  beet = "beet",
  turnip = "turnip",
}
