import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserInfo } from './users.model';
import { UsersService } from './users.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users$: Observable<UserInfo[]> = this.usersService.users$;

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
}
