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
    // return this.http.get(this.BASE_API_URL + '/users') as Observable<UserInfo[]>;
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
        id: '3',
        avatar:
          '',
        fullname: 'Igor Kucherov',
        email: 'igor@gmail.com',
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
        id: '4',
        avatar:
          'https://www.materiell.com/wp-content/uploads/2015/03/bill-full.png',
        fullname: 'User 4',
        email: 'mikekucherov92@gmail.com',
        learnings: [],
      },
      {
        id: '5',
        avatar:
          'https://www.materiell.com/wp-content/uploads/2015/03/bill-full.png',
        fullname: 'User 5',
        email: 'mikekucherov92@gmail.com',
        learnings: [],
      },
      {
        id: '6',
        avatar:
          'https://www.materiell.com/wp-content/uploads/2015/03/bill-full.png',
        fullname: 'User 6',
        email: 'mikekucherov92@gmail.com',
        learnings: [],
      },
      {
        id: '7',
        avatar:
          'https://www.materiell.com/wp-content/uploads/2015/03/bill-full.png',
        fullname: 'User 7',
        email: 'mikekucherov92@gmail.com',
        learnings: [],
      },
      {
        id: '8',
        avatar:
          'https://www.materiell.com/wp-content/uploads/2015/03/bill-full.png',
        fullname: 'User 8',
        email: 'mikekucherov92@gmail.com',
        learnings: [],
      },
      {
        id: '9',
        avatar:
          '',
        fullname: 'User 9',
        email: 'mikekucherov92@gmail.com',
        learnings: [],
      },
    ]);
  }

  getLearningsList(): Observable<LearningInfo[]> {
    return of([
      {
        id: '0',
        title: '123',
        description: '123',
        duration: '12 h',
        cover: '',
        status: LearningStatus.Active,
        users: []
      },
      {
        id: '1',
        title: 'Angular',
        description: 'The best front-end framework course',
        duration: '12 h',
        cover:
          'https://angular.io/assets/images/logos/angularjs/AngularJS-Shield.svg',
        status: LearningStatus.Active,
        users: [
          {
            id: '1',
            fullname: 'Mikhail',
            avatar: 'https://www.materiell.com/wp-content/uploads/2015/03/bill-full.png'
          }
        ]
      },
      {
        id: '2',
        title: 'RxJs',
        description: 'The best front-end framework course',
        duration: '12 h',
        cover:
          'https://seeklogo.com/images/R/rxjs-logo-DD3DF87EEF-seeklogo.com.png',
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
      },
      {
        id: '5',
        title: 'D3.js',
        description: 'The worst front-end framework course',
        duration: '12 h',
        cover:
          'https://angular.io/assets/images/logos/angularjs/AngularJS-Shield.svg',
        status: LearningStatus.Active
      },
      {
        id: '6',
        title: 'Vue.js',
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
