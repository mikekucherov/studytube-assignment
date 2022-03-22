import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { UserInfo } from '../../users.model';
import { LearningShort } from '../../../learnings/learnings.model';
import { DELETE_MESSAGE_TOKEN } from '../../../../components/delete-button/delete.token';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: DELETE_MESSAGE_TOKEN,
      useValue: {
        title: 'Delete user?',
        message: 'Are you sure you want to delete this user?!',
      },
    },
  ],
})
export class UsersTableComponent implements OnInit, AfterViewInit {
  @Input() set users(value: UserInfo[]) {
    this.dataSource = new MatTableDataSource<UserInfo>(value);
    this.dataSource.paginator = this.paginator;
  }
  @Input() deletingUserId;

  @Output() editLearnings = new EventEmitter();
  @Output() deleteUser = new EventEmitter();
  @Output() createUser = new EventEmitter();

  displayedColumns: string[] = [
    'avatar',
    'fullname',
    'email',
    'learnings',
    'edit',
  ];
  dataSource;

  searchValue = '';

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild('chipsList') chipsListEl: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  filterUsersByQuery(query: string) {
    this.dataSource.filter = query;
    this.searchValue = query;
  }

  sortLearnings(learnings: LearningShort[]) {
    return learnings?.sort((a, b) => (a.title > b.title ? 1 : -1));
  }
}
