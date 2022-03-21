import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { LearningsService } from './learnings.service';
import { LearningStatus } from './learnings.model';
import { UsersService } from '../users/users.service';
import { ActivatedRoute, Router } from '@angular/router';
import {map, tap} from 'rxjs/operators';

@Component({
  selector: 'app-learnings',
  templateUrl: './learnings.component.html',
  styleUrls: ['./learnings.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LearningsComponent implements OnInit {
  learnings$ = this.learningsService.learnings$;
  users$ = this.usersService.users$;
  isEditLearningModal$ = this.activatedRoute.queryParamMap.pipe(
    map((queryParamMap) => queryParamMap.get('learning'))
  );

  constructor(
    private learningsService: LearningsService,
    private usersService: UsersService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.learningsService.initLearnings();
    this.usersService.initUsers();
  }

  changeLearningStatusHandler(learningInfo: {
    learningId: string;
    status: LearningStatus;
  }) {
    this.learningsService.fakeUpdateLearningStatus({
      id: learningInfo.learningId,
      status: learningInfo.status,
    });
  }

  // TODO When the real API comes get rid of users parameter in fakeUpdate method
  changeLearningUsersHandler(
    learningInfo: {
      learningId: string;
      userIds: string[];
    },
    users
  ) {
    this.learningsService.fakeUpdateLearningUsers(
      {
        id: learningInfo.learningId,
        usersIds: learningInfo.userIds,
      },
      users
    );
  }

  editLearning(learningId: string | 'new' | null) {
    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: {
        learning: learningId,
      },
      queryParamsHandling: 'merge',
    });
  }

  cancelLearningEditing() {
    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: {
        learning: null
      },
      queryParamsHandling: 'merge'
    })
  }
}
