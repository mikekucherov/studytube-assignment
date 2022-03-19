import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-confirmation-menu',
  templateUrl: './confirmation-menu.component.html',
  styleUrls: ['./confirmation-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfirmationMenuComponent implements OnInit {
  @Input() title;
  @Input() message;

  @Output() confirmClick = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
