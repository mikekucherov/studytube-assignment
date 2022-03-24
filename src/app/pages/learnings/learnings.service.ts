import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { delay, take, tap } from 'rxjs/operators';
import { LearningInfo, LearningStatus } from './learnings.model';
import { LearningsQuery } from './state/learnings.query';
import { LearningsStore } from './state/learnings.store';
import { RequestService } from '../../core/request.service';
import { UserShort } from '../users/users.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class LearningsService {
  get learnings$(): Observable<LearningInfo[]> {
    return this.learningsQuery.learnings$;
  }

  requestDelay = 2000;

  deletedLearningId$ = new BehaviorSubject(null);

  constructor(
    private learningsQuery: LearningsQuery,
    private learningsStore: LearningsStore,
    private requestService: RequestService,
    private notifications: MatSnackBar
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
      .pipe(
        delay(this.requestDelay),
        take(1),
        tap(() => {
          this.notifications?.open('Learning added!');
        })
      )
      .toPromise();

    this.learningsStore.update({
      learnings,
    });
  }

  async fakeDeleteLearning(learningId: string) {
    const currentLearnings = this.learningsStore.getValue().learnings;

    this.deletedLearningId$.next(learningId);

    const learnings = await of(
      currentLearnings.filter((learning) => learning.id !== learningId)
    )
      .pipe(
        delay(this.requestDelay),
        take(1),
        tap(() => {
          this.notifications?.open('Learning successfully deleted');
          this.deletedLearningId$.next(null);
        })
      )
      .toPromise();

    this.learningsStore.update({
      learnings,
    });
  }

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
      .pipe(
        delay(this.requestDelay),
        take(1),
        tap(() => {
          this.notifications?.open('Learning status updated');
        })
      )
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
      .pipe(
        delay(this.requestDelay),
        take(1),
        tap(() => {
          this.notifications?.open('Learning users list updated!');
        })
      )
      .toPromise();

    this.learningsStore.update({
      learnings,
    });
  }
}
