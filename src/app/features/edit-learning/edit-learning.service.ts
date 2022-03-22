import { Injectable } from '@angular/core';
import {LearningsService} from "../../pages/learnings/learnings.service";
import {LearningInfo} from "../../pages/learnings/learnings.model";

@Injectable({
  providedIn: 'root'
})
export class EditLearningService {

  constructor(private learningsService: LearningsService) { }

  // TODO Replace with request service call
  addLearning(learningForm: Omit<LearningInfo, 'id'>) {
    this.learningsService.fakeAddLearning(learningForm);
  }
}
