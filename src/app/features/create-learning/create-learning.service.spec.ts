import { TestBed } from '@angular/core/testing';

import { CreateLearningService } from './create-learning.service';

describe('CreateLearningService', () => {
  let service: CreateLearningService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateLearningService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
