import { Injectable } from '@angular/core';
import { UsersQuery } from './state/users.query';
import { UsersStore } from './state/users.store';
import { Observable } from 'rxjs';
import { UserInfo } from './users.model';
import { take } from 'rxjs/operators';
import {RequestService} from "../../core/request.service";

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  get users$(): Observable<UserInfo[]> {
    return this.usersQuery.users$;
  }

  constructor(private usersQuery: UsersQuery, private usersStore: UsersStore, private requestService: RequestService) {}

  async initUsers() {
    const users = await this.requestService.getUsersList()
      .pipe(take(1))
      .toPromise();

    this.usersStore.update({
      users,
    });
  }
}
