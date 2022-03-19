import { Injectable } from '@angular/core';
import { filterNil, Query } from '@datorama/akita';
import {UsersState, UsersStore} from "./users.store";

@Injectable({ providedIn: 'root' })
export class UsersQuery extends Query<UsersState> {
  users$ = this.select('users').pipe(filterNil);

  constructor(protected store: UsersStore) {
    super(store);
  }
}
