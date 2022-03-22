import {Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormModalComponent implements OnInit {

  @Input() fGroup: FormGroup;

  @Output() submitForm = new EventEmitter();

  isConfirmClosing$ = new BehaviorSubject(false);

  constructor() { }

  ngOnInit(): void {
  }

  closeFormHandler(isDirty, isConfirmed) {
    if (!isDirty || isConfirmed) {
      this.submitForm.emit();
    } else {
      this.isConfirmClosing$.next(true);
    }
  }

}
