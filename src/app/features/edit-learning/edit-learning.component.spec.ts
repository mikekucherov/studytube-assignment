import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditLearningComponent } from './edit-learning.component';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

describe('EditLearningComponent', () => {
  let component: EditLearningComponent;
  let fixture: ComponentFixture<EditLearningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditLearningComponent],
      providers: [
        {
          provide: FormBuilder,
          useValue: {
            group: () => {},
          },
        },
        {
          provide: MatSnackBar,
          useValue: () => {},
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditLearningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
