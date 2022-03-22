import { TestBed } from '@angular/core/testing';

import { EditLearningService } from './create-learning.service';

describe('CreateLearningService', () => {
  let service: EditLearningService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditLearningService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
