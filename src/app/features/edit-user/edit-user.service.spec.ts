import { TestBed } from '@angular/core/testing';

import { EditUserService } from './edit-user.service';
import { MatSnackBar } from '@angular/material/snack-bar';

describe('EditUserService', () => {
  let service: EditUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: MatSnackBar,
          useValue: {
            open: () => {},
          },
        },
      ],
    });
    service = TestBed.inject(EditUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
