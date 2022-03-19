import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningsAttachTableComponent } from './learnings-attach-table.component';

describe('LearningsAttachTableComponent', () => {
  let component: LearningsAttachTableComponent;
  let fixture: ComponentFixture<LearningsAttachTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearningsAttachTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningsAttachTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
