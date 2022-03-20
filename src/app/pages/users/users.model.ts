import { LearningShort } from '../learnings/learnings.model';

export type UserInfo = {
  avatar: string;
  fullname: string;
  email: string;
  id: string;
  learnings: LearningShort[];
};

export type UserShort = Pick<UserInfo, 'avatar' | 'fullname' | 'id'>;
