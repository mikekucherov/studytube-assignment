import { Injectable } from '@angular/core';
import {UserInfo} from "../../pages/users/users.model";
import {UsersService} from "../../pages/users/users.service";

@Injectable({
  providedIn: 'root'
})
export class EditUserService {

  constructor(private usersService: UsersService) { }

  createUser(userInfo: Pick<UserInfo, 'fullname' | 'email' | 'avatar'>) {
    this.usersService.createUser(userInfo);
  }
}
