import {Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter} from '@angular/core';
import {UserShort} from "../../../users/users.model";

@Component({
  selector: 'app-edit-users-dialog',
  templateUrl: './edit-users-dialog.component.html',
  styleUrls: ['./edit-users-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditUsersDialogComponent implements OnInit {

  @Input() users: UserShort[];

  @Output() selectUsers = new EventEmitter();
  @Output() closeDialog = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
