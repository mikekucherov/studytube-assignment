import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { LearningInfo } from './learnings.model';
import { LearningsQuery } from './state/learnings.query';
import { LearningsStore } from './state/learnings.store';
import { RequestService } from '../../core/request.service';

@Injectable({
  providedIn: 'root',
})
export class LearningsService {
  get learnings$(): Observable<LearningInfo[]> {
    return this.learningsQuery.learnings$;
  }

  constructor(
    private learningsQuery: LearningsQuery,
    private learningsStore: LearningsStore,
    private requestService: RequestService
  ) {}

  async initLearnings() {
    const learnings = await this.requestService
      .getLearningsList()
      .pipe(take(1))
      .toPromise();

    this.learningsStore.update({
      learnings,
    });
  }
}
