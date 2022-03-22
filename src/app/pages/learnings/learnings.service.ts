import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, take } from 'rxjs/operators';
import { LearningInfo, LearningStatus } from './learnings.model';
import { LearningsQuery } from './state/learnings.query';
import { LearningsStore } from './state/learnings.store';
import { RequestService } from '../../core/request.service';
import { UserShort } from '../users/users.model';

@Injectable({
  providedIn: 'root',
})
export class LearningsService {
  get learnings$(): Observable<LearningInfo[]> {
    return this.learningsQuery.learnings$;
  }

  requestDelay = 2000;

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

  async fakeAddLearning(learningInfo: Omit<LearningInfo, 'id'>) {
    const currentLearnings = this.learningsStore.getValue().learnings;

    const learnings = await of([
      ...currentLearnings,
      {
        ...learningInfo,
        id: (currentLearnings.length + 1).toString(),
        status: LearningStatus.Active,
      },
    ])
      .pipe(delay(2000), take(1))
      .toPromise();

    this.learningsStore.update({
      learnings,
    });
  }

  async fakeDeleteLearning(learningId: string) {
    const currentLearnings = this.learningsStore.getValue().learnings;

    const learnings = await of(currentLearnings.filter(learning => learning.id !== learningId))
      .pipe(delay(2000), take(1))
      .toPromise();

    this.learningsStore.update({
      learnings,
    });
  }

  // TODO add removeLearning method

  async fakeUpdateLearningStatus(
    learningInfo: Pick<LearningInfo, 'id' | 'status'>
  ) {
    const { id, status } = learningInfo;

    const currentLearnings = this.learningsStore.getValue().learnings;

    const learnings = await of(
      currentLearnings.map((learning) =>
        learning.id === id ? { ...learning, status } : learning
      )
    )
      .pipe(delay(this.requestDelay), take(1))
      .toPromise();

    this.learningsStore.update({
      learnings,
    });
  }

  async fakeUpdateLearningUsers(
    learningInfo: {
      id: string;
      usersIds: string[];
    },
    users
  ) {
    const { usersIds, id } = learningInfo;
    const performedSelectedUsers: UserShort[] = users
      .filter((user) => usersIds.includes(user.id))
      .map(({ id, avatar, fullname }) => {
        return { id, avatar, fullname };
      });

    const currentLearnings = this.learningsStore.getValue().learnings;

    const learnings = await of(
      currentLearnings.map((learning) =>
        learning.id === id
          ? { ...learning, users: performedSelectedUsers }
          : learning
      )
    )
      .pipe(delay(this.requestDelay), take(1))
      .toPromise();

    this.learningsStore.update({
      learnings,
    });
  }
}
