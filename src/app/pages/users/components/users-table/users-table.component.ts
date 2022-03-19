import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef, EventEmitter,
  Input,
  OnInit, Output,
  ViewChild,
} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { UserInfo } from '../../users.model';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersTableComponent implements OnInit, AfterViewInit {
  @Input() set users(value: UserInfo[]) {
    this.dataSource = new MatTableDataSource<UserInfo>(value);
  }

  @Output() editLearnings = new EventEmitter();

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

  filterUsersByQuery(query) {
    this.dataSource.filter = query;
    this.searchValue = query;
  }
}
