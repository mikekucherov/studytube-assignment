import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditLearningComponent } from './create-learning.component';
import {FormBuilder} from "@angular/forms";

describe('CreateLearningComponent', () => {
  let component: EditLearningComponent;
  let fixture: ComponentFixture<EditLearningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditLearningComponent ],
      providers: [
        {
          provide: FormBuilder,
          useValue: {
            group: () => {}
          }
        }
      ]
    })
    .compileComponents();
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
