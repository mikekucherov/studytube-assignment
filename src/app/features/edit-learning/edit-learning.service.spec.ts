import { TestBed } from '@angular/core/testing';

import { EditLearningService } from './edit-learning.service';
import { MatSnackBar } from '@angular/material/snack-bar';

describe('EditLearningService', () => {
  let service: EditLearningService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: MatSnackBar,
          useValue: () => {},
        },
      ],
    });
    service = TestBed.inject(EditLearningService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
