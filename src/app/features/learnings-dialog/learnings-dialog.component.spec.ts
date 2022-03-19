import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningsDialogComponent } from './learnings-dialog.component';

describe('LearningsDialogComponent', () => {
  let component: LearningsDialogComponent;
  let fixture: ComponentFixture<LearningsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearningsDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
