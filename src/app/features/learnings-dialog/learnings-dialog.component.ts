import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  HostListener,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { UsersService } from '../../pages/users/users.service';
import { combineLatest, Observable } from 'rxjs';
import { UserInfo } from '../../pages/users/users.model';
import { LearningsService } from '../../pages/learnings/learnings.service';
import { LearningSelection } from '../../pages/learnings/learnings.model';

@Component({
  selector: 'app-learnings-dialog',
  templateUrl: './learnings-dialog.component.html',
  styleUrls: ['./learnings-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LearningsDialogComponent implements OnInit {
  userId$ = this.activatedRoute.paramMap?.pipe(
    map((paramMap) => paramMap.get('userId'))
  );

  user$: Observable<UserInfo> = combineLatest([
    this.userId$,
    this.usersService.users$,
  ]).pipe(
    map(([userId, users]) => {
      return users.find((user) => user.id === userId) || null;
    })
  );

  learnings$: Observable<LearningSelection[]> = combineLatest([
    this.user$,
    this.learningsService.learnings$,
  ]).pipe(
    map(([user, learnings]) => {
      return learnings.map((learning) => {
        return {
          ...learning,
          isSelected: user.learnings.some(
            (userLearning) => userLearning.id === learning.id
          ),
        };
      });
    })
  );

  @HostListener('document:keydown', ['$event'])
  onKeyboardEvent(evt: KeyboardEvent) {
    if (evt.code === 'Escape') {
      this.router.navigate(['../..']);
    }
  }

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private usersService: UsersService,
    private learningsService: LearningsService
  ) {}

  ngOnInit(): void {
    this.learningsService.initLearnings();
  }

  /**
   * In case of working with real API parameter learnings is redundant of course
  **/
  checkLearningHandler(
    learningId: string,
    user: UserInfo,
    learnings?: LearningSelection[]
  ) {
    const updatedUserInfo = {
      ...user,
      learnings: user.learnings.some((learning) => learning.id === learningId)
        ? user.learnings.filter((l) => l.id !== learningId)
        : [...user.learnings, learnings.find((l) => l.id === learningId)],
    };

    this.usersService.fakeUpdateUsersLearnings(updatedUserInfo);
  }
}
