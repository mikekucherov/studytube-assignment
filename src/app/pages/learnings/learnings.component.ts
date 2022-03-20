import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { LearningsService } from './learnings.service';
import { LearningStatus } from './learnings.model';
import { UsersService } from '../users/users.service';

@Component({
  selector: 'app-learnings',
  templateUrl: './learnings.component.html',
  styleUrls: ['./learnings.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LearningsComponent implements OnInit {
  learnings$ = this.learningsService.learnings$;
  users$ = this.usersService.users$;

  constructor(
    private learningsService: LearningsService,
    private usersService: UsersService
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
}
