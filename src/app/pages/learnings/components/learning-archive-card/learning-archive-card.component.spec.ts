import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningArchiveCardComponent } from './learning-archive-card.component';
import {DELETED_LEARNING, LEARNINGS_SEARCH_TOKEN} from '../../learnings.token';
import { BehaviorSubject } from 'rxjs';

describe('LearningArchiveCardComponent', () => {
  let component: LearningArchiveCardComponent;
  let fixture: ComponentFixture<LearningArchiveCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LearningArchiveCardComponent],
      providers: [
        {
          provide: LEARNINGS_SEARCH_TOKEN,
          useValue: new BehaviorSubject(''),
        },
        {
          provide: DELETED_LEARNING,
          useValue: new BehaviorSubject('')
        }
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningArchiveCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
