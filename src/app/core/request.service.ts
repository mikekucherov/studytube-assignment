import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";
import {UserInfo} from "../pages/users/users.model";
import {LearningInfo, LearningStatus} from "../pages/learnings/learnings.model";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  BASE_API_URL = environment.APIEndpoint;

  constructor(private http: HttpClient) { }

  getUsersList(): Observable<UserInfo[]> {
    return of([
      {
        id: '1',
        avatar:
          'https://www.materiell.com/wp-content/uploads/2015/03/bill-full.png',
        fullname: 'Mikhail Kucherov',
        email: 'mikekucherov92@gmail.com',
        learnings: [
          {
            id: '1',
            title: 'Angular',
            description: 'The best front-end framework course',
            duration: '12 h',
            cover:
              'https://angular.io/assets/images/logos/angularjs/AngularJS-Shield.svg',
            status: LearningStatus.Active,
          },
          {
            id: '2',
            title: 'RxJs',
            description: 'The best front-end framework course',
            duration: '12 h',
            cover:
              'https://angular.io/assets/images/logos/angularjs/AngularJS-Shield.svg',
            status: LearningStatus.Active
          },
          {
            id: '3',
            title: 'Ruby',
            description: 'The best front-end framework course',
            duration: '12 h',
            cover:
              'https://angular.io/assets/images/logos/angularjs/AngularJS-Shield.svg',
            status: LearningStatus.Active
          }
        ],
      },
      {
        id: '2',
        avatar:
          'https://www.materiell.com/wp-content/uploads/2015/03/bill-full.png',
        fullname: 'Mikhail Kucherov',
        email: 'mikekucherov92@gmail.com',
        learnings: [
          {
            id: '1',
            title: 'Angular',
          },
          {
            id: '2',
            title: 'Ruby',
          },
          {
            id: '3',
            title: 'RxJs',
          },
        ],
      },
      {
        id: '3',
        avatar:
          'https://www.materiell.com/wp-content/uploads/2015/03/bill-full.png',
        fullname: 'Igor Kucherov',
        email: 'igor@gmail.com',
        learnings: [
          {
            id: '1',
            title: 'Angular',
          },
          {
            id: '2',
            title: 'Ruby',
          },
          {
            id: '3',
            title: 'RxJs',
          },
        ],
      },
    ]);
  }

  getLearningsList(): Observable<LearningInfo[]> {
    return of([
      {
        id: '1',
        title: 'Angular',
        description: 'The best front-end framework course',
        duration: '12 h',
        cover:
          'https://angular.io/assets/images/logos/angularjs/AngularJS-Shield.svg',
        status: LearningStatus.Active,
      },
      {
        id: '2',
        title: 'RxJs',
        description: 'The best front-end framework course',
        duration: '12 h',
        cover:
          'https://angular.io/assets/images/logos/angularjs/AngularJS-Shield.svg',
        status: LearningStatus.Active
      },
      {
        id: '3',
        title: 'Ruby',
        description: 'The best front-end framework course',
        duration: '12 h',
        cover:
          'https://angular.io/assets/images/logos/angularjs/AngularJS-Shield.svg',
        status: LearningStatus.Active
      },
      {
        id: '4',
        title: 'React.js',
        description: 'The worst front-end framework course',
        duration: '12 h',
        cover:
          'https://angular.io/assets/images/logos/angularjs/AngularJS-Shield.svg',
        status: LearningStatus.Active
      }
    ]);
  }

  updateUsersLearnings(userId: string, learnings: string[]) {

  }
}
