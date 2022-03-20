import {Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter} from '@angular/core';
import {LearningInfo} from "../../learnings.model";
import {DELETE_MESSAGE_TOKEN} from "../../../../components/delete-button/delete.token";
import {BehaviorSubject} from "rxjs";
import {UserShort} from "../../../users/users.model";

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
        message: 'Do you want to delete learning? And detach users from it?'
      }
    }
  ]
})
export class LearningsTableComponent implements OnInit {
  @Input() learnings: LearningInfo[];

  @Output() changeLearningStatus = new EventEmitter();

  editableLearningId$: BehaviorSubject<string> = new BehaviorSubject('');
  editableLearningsUsers$: BehaviorSubject<UserShort[]> = new BehaviorSubject([]);

  constructor() { }

  ngOnInit(): void {
  }

  changeLearningStatusHandler(status, learningId) {
    this.changeLearningStatus.emit({
      status,
      learningId
    });
  }

  openUsersDialog(users, learningId) {
    this.editableLearningId$.next(learningId);
    this.editableLearningsUsers$.next(users);
  }

}
