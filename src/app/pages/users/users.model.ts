import {LearningShort} from "../learnings/learnings.model";

export interface UserInfo {
  avatar: string;
  fullname: string;
  email: string;
  id: string;
  learnings: LearningShort[]; // TODO Replace with an interface of learning
}
