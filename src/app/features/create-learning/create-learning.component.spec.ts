import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLearningComponent } from './create-learning.component';
import {FormBuilder} from "@angular/forms";

describe('CreateLearningComponent', () => {
  let component: CreateLearningComponent;
  let fixture: ComponentFixture<CreateLearningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateLearningComponent ],
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
    fixture = TestBed.createComponent(CreateLearningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
