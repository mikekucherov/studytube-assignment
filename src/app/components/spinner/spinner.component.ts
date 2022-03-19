import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpinnerComponent implements OnInit {
  @Input() size: 's' | 'm' | 'l' = 's';
  @Input() color: 'white' | 'accent' = 'white';

  constructor() { }

  ngOnInit(): void {
  }

}
