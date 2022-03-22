import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
  Inject,
} from '@angular/core';
import { LearningInfo, LearningStatus } from '../../learnings.model';
import {
  DELETED_LEARNING,
  LEARNINGS_SEARCH_TOKEN,
} from '../../learnings.token';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-learning-archive-card',
  templateUrl: './learning-archive-card.component.html',
  styleUrls: ['./learning-archive-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LearningArchiveCardComponent implements OnInit {
  @Input() learning: LearningInfo;

  @Output() changeLearningStatus = new EventEmitter();
  @Output() editUsersList = new EventEmitter();
  @Output() deleteClick = new EventEmitter();

  learningStatus = LearningStatus;

  constructor(
    @Inject(LEARNINGS_SEARCH_TOKEN)
    public searchValue$: BehaviorSubject<string>,
    @Inject(DELETED_LEARNING) public deletedLearningId$: BehaviorSubject<string>
  ) {}

  ngOnInit(): void {}
}
