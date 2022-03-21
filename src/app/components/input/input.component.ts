import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent implements OnInit {
  @Input() value = '';
  @Input() isAllowClear = true;
  @Input() isError = false;
  @Input() errorMessage = '';
  @Input() fControlName = '';
  @Input() fGroup: FormGroup = null;
  @Input() placeholder = '';

  @Output() valueChange = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
