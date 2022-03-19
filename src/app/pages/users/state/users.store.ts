import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import {UserInfo} from "../users.model";

export interface UsersState {
  users: UserInfo[];
}

export function createInitialState(): UsersState {
  return {
    users: []
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'settings' })
export class UsersStore extends Store<UsersState> {
  constructor() {
    super(createInitialState());
  }
}
