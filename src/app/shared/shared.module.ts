import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CallPipe } from './call.pipe';
import { InitDirective } from './init.directive';
import { HighlightPipe } from './highlight.pipe';

@NgModule({
  declarations: [CallPipe, InitDirective, HighlightPipe],
  imports: [CommonModule],
  exports: [CallPipe, InitDirective, HighlightPipe],
})
export class SharedModule {}
