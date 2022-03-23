import {ChangeDetectionStrategy, Component, inject, OnInit} from '@angular/core';
import { LearningsService } from './learnings.service';
import { LearningStatus } from './learnings.model';
import { UsersService } from '../users/users.service';
import { ActivatedRoute, Router } from '@angular/router';
import {map} from 'rxjs/operators';
import {DELETED_LEARNING} from "./learnings.token";

@Component({
  selector: 'app-learnings',
  templateUrl: './learnings.component.html',
  styleUrls: ['./learnings.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: DELETED_LEARNING,
      useFactory: () => {
        const learningsComponent = inject(LearningsComponent);
        return learningsComponent.deletedLearningId$;
      }
    }
  ]
})
export class LearningsComponent implements OnInit {
  learnings$ = this.learningsService.learnings$;
  users$ = this.usersService.users$;
  isEditLearningModal$ = this.activatedRoute.queryParamMap.pipe(
    map((queryParamMap) => queryParamMap.get('learning'))
  );
  deletedLearningId$ = this.learningsService.deletedLearningId$;

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

  /**
   * users parameter won't be needed when real API will be available
   */
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

  deleteLearningHandler(learningId: string) {
    this.learningsService.fakeDeleteLearning(learningId);
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
}
