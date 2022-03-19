import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningArchiveCardComponent } from './learning-archive-card.component';

describe('LearningArchiveCardComponent', () => {
  let component: LearningArchiveCardComponent;
  let fixture: ComponentFixture<LearningArchiveCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearningArchiveCardComponent ]
    })
    .compileComponents();
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
