import {UserShort} from "../users/users.model";

export enum LearningStatus {
  Active = 'active',
  Inactive = 'inactive'
}

export type LearningInfo = {
  id: string;
  title: string;
  description: string;
  duration: string;
  cover: string;
  status: LearningStatus;
  users?: UserShort[];
}

export type LearningShort = Pick<LearningInfo, 'id' | 'title' | 'description' | 'duration' | 'cover' | 'status'>;

export interface LearningSelection extends LearningInfo {
  isSelected: boolean;
}
