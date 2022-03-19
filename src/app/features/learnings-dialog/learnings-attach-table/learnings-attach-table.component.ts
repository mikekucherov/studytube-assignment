import {Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter} from '@angular/core';
import {LearningSelection} from "../../../pages/learnings/learnings.model";

@Component({
  selector: 'app-learnings-attach-table',
  templateUrl: './learnings-attach-table.component.html',
  styleUrls: ['./learnings-attach-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LearningsAttachTableComponent implements OnInit {
  @Input() learnings: LearningSelection[];

  @Output() checkLearning = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
