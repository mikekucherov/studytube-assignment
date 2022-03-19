import {Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter} from '@angular/core';
import {LearningInfo, LearningSelection} from "../../pages/learnings/learnings.model";

@Component({
  selector: 'app-learning-card',
  templateUrl: './learning-card.component.html',
  styleUrls: ['./learning-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LearningCardComponent implements OnInit {

  @Input() learning: LearningSelection;
  @Input() isSelected: boolean;

  @Output() cardClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
