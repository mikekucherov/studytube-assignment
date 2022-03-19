import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import {LearningInfo} from "../learnings.model";

export interface LearningsState {
  learnings: LearningInfo[];
}

export function createInitialState(): LearningsState {
  return {
    learnings: []
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'settings' })
export class LearningsStore extends Store<LearningsState> {
  constructor() {
    super(createInitialState());
  }
}
