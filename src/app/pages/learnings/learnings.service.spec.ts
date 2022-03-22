import { TestBed } from '@angular/core/testing';

import { LearningsService } from './learnings.service';
import { RequestService } from '../../core/request.service';
import { of } from 'rxjs';
import { delay, filter } from 'rxjs/operators';
import {
  LEARNING_TO_ADD,
  LEARNINGS_LIST,
  USERS_LIST,
} from '../../shared/mock.data';
import { LearningStatus } from './learnings.model';

describe('LearningsService', () => {
  let service: LearningsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: RequestService,
          useValue: {
            getLearningsList: () => {
              return of(LEARNINGS_LIST);
            },
          },
        },
      ],
    });
    service = TestBed.inject(LearningsService);
    service.requestDelay = 100;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should init learnings list', (done) => {
    service.initLearnings();
    service.learnings$
      .pipe(filter((v) => !!v.length))
      .subscribe((learnings) => {
        expect(learnings.length).toBeGreaterThan(0);
        done();
      });
  });

  it('should add learning', (done) => {
    service.fakeAddLearning(LEARNING_TO_ADD);
    service.learnings$
      .pipe(filter((v) => !!v.length))
      .subscribe((learnings) => {
        // TODO Replace when backend logic will be available
        expect(
          learnings.find(
            (learning) => learning.id === learnings.length.toString()
          )
        ).toBeDefined();
        done();
      });
  });

  it('should delete learning', (done) => {
    const deletedLearningId = '1';
    service.initLearnings().then(() => {
      service.fakeDeleteLearning(deletedLearningId).then(() => {
        service.learnings$
          .pipe(filter((v) => !!v.length))
          .subscribe((learnings) => {
            expect(
              learnings.find((learning) => learning.id === deletedLearningId)
            ).toBeUndefined();
            done();
          });
      });
    });
  });

  it('should change learning status', (done) => {
    service.initLearnings().then(() => {
      const updateParams = {
        id: '1',
        status: LearningStatus.Inactive,
      };
      service.fakeUpdateLearningStatus(updateParams).then(() => {
        service.learnings$
          .pipe(
            filter((v) => !!v.length),
            delay(1000)
          )
          .subscribe((learnings) => {
            const editableLearning = learnings.find(
              (learning) => learning.id === updateParams.id
            );
            expect(editableLearning.status).toEqual(LearningStatus.Inactive);
            done();
          });
      });
    });
  });

  it('should change learnings users list', (done) => {
    service.initLearnings().then(() => {
      const updateParams = {
        id: '1',
        usersIds: ['1'],
      };
      service.fakeUpdateLearningUsers(updateParams, USERS_LIST).then(() => {
        service.learnings$
          .pipe(
            filter((v) => !!v.length),
            delay(1000)
          )
          .subscribe((learnings) => {
            const editableLearning = learnings.find(
              (learning) => learning.id === updateParams.id
            );
            expect(
              editableLearning.users.find(
                (user) => user.id === updateParams.usersIds[0]
              )
            ).toBeDefined();
            done();
          });
      });
    });
  });
});
