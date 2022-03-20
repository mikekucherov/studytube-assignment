import {Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter} from '@angular/core';
import {LearningInfo, LearningStatus} from "../../learnings.model";

@Component({
  selector: 'app-learning-archive-card',
  templateUrl: './learning-archive-card.component.html',
  styleUrls: ['./learning-archive-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LearningArchiveCardComponent implements OnInit {

  @Input() learning: LearningInfo;

  @Output() changeLearningStatus = new EventEmitter();
  @Output() editUsersList = new EventEmitter();

  learningStatus = LearningStatus;

  constructor() { }

  ngOnInit(): void {
  }

}
