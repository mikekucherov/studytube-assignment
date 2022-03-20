import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { LearningInfo } from '../../learnings.model';
import { DELETE_MESSAGE_TOKEN } from '../../../../components/delete-button/delete.token';
import { BehaviorSubject } from 'rxjs';
import { UserInfo, UserSelection, UserShort } from '../../../users/users.model';
import { isArraysEqual } from '../../../../shared/utils';

@Component({
  selector: 'app-learnings-table',
  templateUrl: './learnings-table.component.html',
  styleUrls: ['./learnings-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: DELETE_MESSAGE_TOKEN,
      useValue: {
        title: 'Delete learning?',
        message: 'Do you want to delete learning? And detach users from it?',
      },
    },
  ],
})
export class LearningsTableComponent implements OnInit {
  @Input() learnings: LearningInfo[];
  @Input() allUsers: UserInfo[];

  @Output() changeLearningStatus = new EventEmitter();
  @Output() changeLearningUsers = new EventEmitter();

  editableLearningId$: BehaviorSubject<string> = new BehaviorSubject('');
  editableLearningsUsers$: BehaviorSubject<UserSelection[]> =
    new BehaviorSubject([]);

  searchValue = '';

  constructor() {}

  ngOnInit(): void {}

  changeLearningStatusHandler(status, learningId) {
    this.changeLearningStatus.emit({
      status,
      learningId,
    });
  }

  openUsersDialog(
    learningUser: UserShort[],
    learningId: string,
    allUsers: UserInfo[]
  ) {
    this.editableLearningId$.next(learningId);
    this.editableLearningsUsers$.next(
      allUsers.map((user) =>
        learningUser?.some((learningUser) => learningUser.id === user.id)
          ? { ...user, isSelected: true }
          : { ...user, isSelected: false }
      )
    );
  }

  updateSelectedUsers(
    selectedUsersIds: string[],
    editableLearningId: string,
    learnings: LearningInfo[]
  ) {
    const editableLearningObject = learnings.find(
      (learning) => learning.id === editableLearningId
    );

    if (
      !isArraysEqual(
        editableLearningObject.users?.map((usr) => usr.id),
        selectedUsersIds
      )
    ) {
      this.changeLearningUsers.emit({
        learningId: editableLearningId,
        userIds: selectedUsersIds,
      });
    }

    this.editableLearningId$.next(null);
  }

  filterLearningsByQuery(learnings: LearningInfo[], query: string) {
    return learnings.filter((learning) =>
      learning.title.toLowerCase().match(query.toLowerCase())
    );
  }
}
