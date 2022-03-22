import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningsDialogComponent } from './learnings-dialog.component';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('LearningsDialogComponent', () => {
  let component: LearningsDialogComponent;
  let fixture: ComponentFixture<LearningsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LearningsDialogComponent],
      imports: [RouterTestingModule.withRoutes([])],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: '',
        },
      ],
    }).compileComponents();
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
