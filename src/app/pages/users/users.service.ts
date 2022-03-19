import { Injectable } from '@angular/core';
import { UsersQuery } from './state/users.query';
import { UsersStore } from './state/users.store';
import {BehaviorSubject, Observable, of} from 'rxjs';
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

  deletedUserId$ = new BehaviorSubject(null);

  constructor(
    private usersQuery: UsersQuery,
    private usersStore: UsersStore,
    private requestService: RequestService,
    private notification: MatSnackBar
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

  fakeUpdateUsersLearnings(editedUser) {
    const users = this.usersStore.getValue().users;

    this.usersStore.update({
      users: users.map((user) =>
        user.id === editedUser.id ? editedUser : user
      ),
    });

    setTimeout(() => {
      this.notification.open('Changes saved');
    }, 1000);
  }

  async fakeDeleteUser(userId) {
    const currentUsers = this.usersStore.getValue().users;

    this.deletedUserId$.next(userId);

    // TODO Subscribe to undo action
    const users = await of(currentUsers.filter((user) => user.id !== userId))
      .pipe(
        delay(2000),
        take(1),
        tap(() => {
          this.notification.open('User successfully deleted', 'Undo', {
            duration: 3000,
          });
          this.deletedUserId$.next(null);
        })
      )
      .toPromise();

    this.usersStore.update({
      users,
    });
  }
}
