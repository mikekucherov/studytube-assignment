import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextareaComponent implements OnInit {
  @Input() placeholder = 'Input text...';
  @Input() value = '';
  @Input() isAllowClear = true;
  @Input() fControlName = '';
  @Input() fGroup: FormGroup = null;

  @Output() valueChange = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
}
