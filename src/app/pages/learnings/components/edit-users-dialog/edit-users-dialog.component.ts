import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { UserSelection } from '../../../users/users.model';
import { BehaviorSubject } from 'rxjs';
import { skip, take, takeUntil, tap } from 'rxjs/operators';
import { DestroyService } from '../../../../shared/destroy.service';

@Component({
  selector: 'app-edit-users-dialog',
  templateUrl: './edit-users-dialog.component.html',
  styleUrls: ['./edit-users-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [DestroyService],
})
export class EditUsersDialogComponent implements OnInit {
  @Input() users: UserSelection[];

  @Output() closeDialog = new EventEmitter();

  selectedUsers$: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);

  isHintDisplayed = false;

  constructor(private destroy$: DestroyService) {}

  ngOnInit(): void {
    this.selectedUsers$.next(
      this.users.filter((user) => !!user.isSelected).map((user) => user.id)
    );

    this.selectedUsers$.asObservable().pipe(
      skip(1),
      take(1),
      tap(() => this.isHintDisplayed = true),
      takeUntil(this.destroy$)
    ).subscribe();
  }

  getIsUserSelected(userIdList: string[], userId: string) {
    return userIdList.includes(userId);
  }

  clickUserRow(userIdList, userId) {
    this.selectedUsers$.next(
      userIdList.includes(userId)
        ? userIdList.filter((id) => id !== userId)
        : [...userIdList, userId]
    );
  }
}
