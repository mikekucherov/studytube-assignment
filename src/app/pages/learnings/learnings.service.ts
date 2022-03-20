import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, take, tap } from 'rxjs/operators';
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

  async fakeUpdateLearningStatus(learningInfo) {
    const { learningId, status } = learningInfo;

    const currentLearnings = this.learningsStore.getValue().learnings;

    const learnings = await of(
      currentLearnings.map((learning) =>
        learning.id === learningId ? { ...learning, status } : learning
      )
    )
      .pipe(delay(2000), take(1))
      .toPromise();

    this.learningsStore.update({
      learnings,
    });
  }
}
