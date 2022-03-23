import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditLearningComponent } from './edit-learning.component';
import { SharedModule } from '../../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from '../../components/components.module';
import { MatIconModule } from '@angular/material/icon';
import { ClickOutsideModule } from 'ng-click-outside';
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [EditLearningComponent],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    ComponentsModule,
    MatIconModule,
    ClickOutsideModule,
    MatButtonModule,
  ],
  exports: [EditLearningComponent],
})
export class EditLearningModule {}
