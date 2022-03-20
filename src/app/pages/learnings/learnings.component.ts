import { Component, OnInit } from '@angular/core';
import { LearningsService } from './learnings.service';
import { LearningStatus } from './learnings.model';

@Component({
  selector: 'app-learnings',
  templateUrl: './learnings.component.html',
  styleUrls: ['./learnings.component.scss'],
})
export class LearningsComponent implements OnInit {
  learnings$ = this.learningsService.learnings$;

  constructor(private learningsService: LearningsService) {}

  ngOnInit(): void {
    this.learningsService.initLearnings();
  }

  changeLearningStatusHandler(learningInfo: {
    learningId: string;
    status: LearningStatus;
  }) {
    this.learningsService.fakeUpdateLearningStatus(learningInfo);
  }
}
