import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
  Input,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserInfo } from '../../pages/users/users.model';
import {EditUserService} from "./edit-user.service";

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditUserComponent implements OnInit {
  @Input() set editableUser(value: UserInfo) {
    this.initUserFormGroup(value);
  }

  userForm: FormGroup;

  /**
   * Default Angular email validator passes some invalid emails
   */
  emailPattern = '^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$';

  @Output() closeForm = new EventEmitter();

  constructor(private formBuilder: FormBuilder, private editUserService: EditUserService) {}

  ngOnInit(): void {
    if (!this.editableUser) {
      this.initUserFormGroup();
    }
  }

  initUserFormGroup(userInfo?: UserInfo) {
    const { required, pattern } = Validators;

    this.userForm = this.formBuilder.group({
      fullname: [userInfo?.fullname || '', [required]],
      email: [userInfo?.email || '', [required, pattern(this.emailPattern)]],
      avatar: [userInfo?.avatar || ''],
    });
  }

  createUser(userInfo) {
    this.editUserService.createUser(userInfo.value);
    this.closeForm.emit();
  }
}
