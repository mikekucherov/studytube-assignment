import {Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter} from '@angular/core';
import {LearningInfo} from "../../learnings.model";

@Component({
  selector: 'app-learnings-table',
  templateUrl: './learnings-table.component.html',
  styleUrls: ['./learnings-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LearningsTableComponent implements OnInit {
  @Input() learnings: LearningInfo[];

  @Output() changeLearningStatus = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  changeLearningStatusHandler(learningStatus, learningId) {
    this.changeLearningStatus.emit({
      learningStatus,
      learningId
    });
  }

}
