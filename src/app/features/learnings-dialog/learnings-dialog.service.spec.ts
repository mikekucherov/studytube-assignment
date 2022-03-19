import { TestBed } from '@angular/core/testing';

import { LearningsDialogService } from './learnings-dialog.service';

describe('LearningsDialogService', () => {
  let service: LearningsDialogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LearningsDialogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
