export interface ProgressionNode {
  name: string;
  description: string;
  multiplier: number;
  cost: number;
  isEarned: boolean;
  progressionType: ProgressionType;
}

export enum ProgressionType {
  garden, // this is progression for the garden as a whole
  newButtons, // these progression nodes unlock new buttons
  userInterface, // this is progression that augments the users interaction with the UI
  carrot,
  potato,
  beet,
  turnip,
}
