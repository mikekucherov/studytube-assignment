import { Injectable } from '@angular/core';
import { filterNil, Query } from '@datorama/akita';
import {LearningsState, LearningsStore} from "./learnings.store";

@Injectable({ providedIn: 'root' })
export class LearningsQuery extends Query<LearningsState> {
  learnings$ = this.select('learnings').pipe(filterNil);

  constructor(protected store: LearningsStore) {
    super(store);
  }
}
