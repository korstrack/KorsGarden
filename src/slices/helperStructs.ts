export interface ProgressionNode {
  name: string;
  description: string;
  multiplier: number;
  cost: number;
  isEarned: boolean;
}

export enum ProgressionType {
  point,
  ray,
  lineSegment,
  line,
}
