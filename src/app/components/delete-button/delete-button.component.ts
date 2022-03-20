import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter, Inject,
} from '@angular/core';
import {DELETE_MESSAGE_TOKEN} from "./delete.token";

@Component({
  selector: 'app-delete-button',
  templateUrl: './delete-button.component.html',
  styleUrls: ['./delete-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeleteButtonComponent implements OnInit {
  @Input() isLoading = false;
  @Input() isConfirmation = true;

  @Output() confirmationClick = new EventEmitter();

  constructor(
    @Inject(DELETE_MESSAGE_TOKEN) public deleteMessage: {
      title: string;
      message: string;
    }
  ) {}

  ngOnInit(): void {}

  buttonClickHandler(isConfirmation) {
    if (!isConfirmation) {
      this.confirmationClick.emit();
    }
  }
}
