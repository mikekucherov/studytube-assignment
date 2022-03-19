export enum LearningStatus {
  Active = 'active',
  Archive = 'archive'
}

export type LearningInfo = {
  id: string;
  title: string;
  description: string;
  duration: string;
  cover: string;
  status: LearningStatus
}

export type LearningShort = Partial<LearningInfo>;

export interface LearningSelection extends LearningInfo {
  isSelected: boolean;
}
