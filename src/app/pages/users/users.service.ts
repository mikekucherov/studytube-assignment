import { Injectable } from '@angular/core';
import { UsersQuery } from './state/users.query';
import { UsersStore } from './state/users.store';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { UserInfo } from './users.model';
import { delay, take, tap } from 'rxjs/operators';
import { RequestService } from '../../core/request.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  get users$(): Observable<UserInfo[]> {
    return this.usersQuery.users$;
  }

  requestDelay = 2000;

  deletedUserId$ = new BehaviorSubject(null);

  constructor(
    private usersQuery: UsersQuery,
    private usersStore: UsersStore,
    private requestService: RequestService,
    private notifications: MatSnackBar
  ) {}

  async initUsers() {
    // TODO Add pagintation to user getting request
    const users = await this.requestService
      .getUsersList()
      .pipe(take(1))
      .toPromise();

    this.usersStore.update({
      users,
    });
  }

  async fakeUpdateUsersLearnings(editedUser) {
    const currentUsers = this.usersStore.getValue().users;

    const users = await of(
      currentUsers.map((user) =>
        user.id === editedUser.id ? editedUser : user
      )
    )
      .pipe(
        take(1),
        tap(() => {
          this.notifications.open('Users learnings list updated!');
        })
      )
      .toPromise();

    this.usersStore.update({
      users,
    });
  }

  async createUser(userInfo) {
    const currentUsers = this.usersStore.getValue().users;

    const users = await of([
      ...currentUsers,
      {
        ...userInfo,
        id: (currentUsers.length + 1).toString(),
      },
    ])
      .pipe(
        delay(this.requestDelay),
        take(1),
        tap(() => {
          this.notifications.open('User successfully created!');
        })
      )
      .toPromise();

    this.usersStore.update({
      users,
    });
  }

  async fakeDeleteUser(userId) {
    const currentUsers = this.usersStore.getValue().users;

    this.deletedUserId$.next(userId);

    const users = await of(currentUsers.filter((user) => user.id !== userId))
      .pipe(
        delay(this.requestDelay),
        take(1),
        tap(() => {
          this.notifications.open('User successfully deleted');
          this.deletedUserId$.next(null);
        })
      )
      .toPromise();

    this.usersStore.update({
      users,
    });
  }
}
