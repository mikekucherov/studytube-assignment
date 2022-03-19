import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LearningsComponent } from './learnings.component';
import { LearningsRoutingModule } from './learnings-routing.module';

@NgModule({
  declarations: [LearningsComponent],
  imports: [CommonModule, LearningsRoutingModule],
})
export class LearningsModule {}
