import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';
import {UserInfo} from "../../../pages/users/users.model";

@Component({
  selector: 'app-user-info-widget',
  templateUrl: './user-info-widget.component.html',
  styleUrls: ['./user-info-widget.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserInfoWidgetComponent implements OnInit {

  @Input() user: UserInfo;

  constructor() { }

  ngOnInit(): void {
  }

}
