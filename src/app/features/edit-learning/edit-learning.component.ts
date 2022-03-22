import {Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {EditLearningService} from "./edit-learning.service";

@Component({
  selector: 'app-edit-learning',
  templateUrl: './edit-learning.component.html',
  styleUrls: ['./edit-learning.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditLearningComponent implements OnInit {

  learningForm: FormGroup;

  @Output() closeForm = new EventEmitter();

  constructor(private formBuilder: FormBuilder, private createLearningService: EditLearningService) { }

  ngOnInit(): void {
    this.initLearningForm();
  }

  initLearningForm() {
    const { required } = Validators;

    this.learningForm = this.formBuilder.group({
      title: ['', [required]],
      description: [''],
      duration: [''],
      cover: ['']
    });
  }

  createLearning(learningForm: FormGroup) {
    if (learningForm?.value) {
      this.createLearningService.addLearning(learningForm.value);
    }
    this.closeForm.emit();
  }

}
