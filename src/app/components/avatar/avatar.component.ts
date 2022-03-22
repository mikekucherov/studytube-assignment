import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvatarComponent implements OnInit {
  @Input() image;
  @Input() altLabel;
  @Input() size: 's' | 'm' | 'l' = 's';

  constructor() {}

  ngOnInit(): void {}

  generateAvatar(title) {
    return `${title?.split(' ')[0]?.substr(0, 1)}`;
  }
}
