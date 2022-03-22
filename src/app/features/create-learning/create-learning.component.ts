import {Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CreateLearningService} from "./create-learning.service";

@Component({
  selector: 'app-create-learning',
  templateUrl: './create-learning.component.html',
  styleUrls: ['./create-learning.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateLearningComponent implements OnInit {

  learningForm: FormGroup;

  @Output() closeForm = new EventEmitter();

  constructor(private formBuilder: FormBuilder, private createLearningService: CreateLearningService) { }

  ngOnInit(): void {
    this.initLearningForm();
  }

  initLearningForm(learningData?) {
    const { required } = Validators;

    this.learningForm = this.formBuilder.group({
      title: ['', [required]],
      description: [''],
      duration: [''],
      cover: ['']
    });
  }

  onLoadCover(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.learningForm.patchValue({
        coverPath: file
      });
    }
  }

  createLearning(learningForm: FormGroup) {
    this.createLearningService.addLearning(learningForm.value);
    this.closeForm.emit();
  }

}
