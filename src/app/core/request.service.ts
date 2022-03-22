import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";
import {UserInfo} from "../pages/users/users.model";
import {LearningInfo} from "../pages/learnings/learnings.model";
import {environment} from "../../environments/environment";
import {LEARNINGS_LIST, USERS_LIST} from "../shared/mock.data";

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor() { }

  getUsersList(): Observable<UserInfo[]> {
    return of(USERS_LIST);
  }

  getLearningsList(): Observable<LearningInfo[]> {
    return of(LEARNINGS_LIST);
  }
}
