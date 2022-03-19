import { Component, OnInit } from '@angular/core';
import {LearningsService} from "./learnings.service";

@Component({
  selector: 'app-learnings',
  templateUrl: './learnings.component.html',
  styleUrls: ['./learnings.component.scss']
})
export class LearningsComponent implements OnInit {

  learnings$ = this.learningsService.learnings$;

  constructor(
    private learningsService: LearningsService
  ) { }

  ngOnInit(): void {
    this.learningsService.initLearnings();
  }

  changeLearningStatusHandler($event) {
    // TODO Make fake update learning status
  }

}
