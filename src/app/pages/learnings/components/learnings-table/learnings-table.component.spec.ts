import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningsTableComponent } from './learnings-table.component';

describe('LearningsTableComponent', () => {
  let component: LearningsTableComponent;
  let fixture: ComponentFixture<LearningsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearningsTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
