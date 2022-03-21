import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { UserInfo } from './users.model';
import { UsersService } from './users.service';
import { ActivatedRoute, Router } from '@angular/router';
import {map} from "rxjs/operators";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersComponent implements OnInit {
  users$: Observable<UserInfo[]> = this.usersService.users$;
  isEditUserModal$ = this.activatedRoute.queryParamMap.pipe(
    map((queryParamMap) => queryParamMap.get('user'))
  );

  deletedUserId$ = this.usersService.deletedUserId$;

  constructor(
    private usersService: UsersService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.usersService.initUsers();
  }

  openLearningsDialog(userId) {
    this.router.navigate([userId, 'edit-learnings'], {
      relativeTo: this.activatedRoute,
    });
  }

  deleteUserHandler(userId) {
    this.usersService.fakeDeleteUser(userId);
  }

  createUserHandler(userId) {
    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: {
        user: userId,
      },
      queryParamsHandling: 'merge',
    });
  }
}
