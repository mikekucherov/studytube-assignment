import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent implements OnInit {
  @Input() value = '';
  @Input() isAllowClear = true;
  @Input() type: 'search' | 'default' = 'search';

  @Output() valueChange = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
