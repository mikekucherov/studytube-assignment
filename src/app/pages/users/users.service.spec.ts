import { TestBed } from '@angular/core/testing';

import { UsersService } from './users.service';
import {MatSnackBar} from "@angular/material/snack-bar";

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{
        provide: MatSnackBar,
        useValue: () => {}
      }]
    });
    service = TestBed.inject(UsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
