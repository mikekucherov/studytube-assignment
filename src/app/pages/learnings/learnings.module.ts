import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LearningsComponent } from './learnings.component';
import { LearningsRoutingModule } from './learnings-routing.module';
import { LearningsTableComponent } from './components/learnings-table/learnings-table.component';
import { ComponentsModule } from '../../components/components.module';
import { LearningArchiveCardComponent } from './components/learning-archive-card/learning-archive-card.component';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from '../../shared/shared.module';
import { MatChipsModule } from '@angular/material/chips';
import { MatMenuModule } from '@angular/material/menu';
import { EditUsersDialogComponent } from './components/edit-users-dialog/edit-users-dialog.component';
import {ClickOutsideModule} from "ng-click-outside";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatButtonModule} from "@angular/material/button";
import {MatTooltipModule} from "@angular/material/tooltip";

@NgModule({
  declarations: [
    LearningsComponent,
    LearningsTableComponent,
    LearningArchiveCardComponent,
    EditUsersDialogComponent,
  ],
  imports: [
    CommonModule,
    LearningsRoutingModule,
    ComponentsModule,
    MatIconModule,
    SharedModule,
    MatChipsModule,
    MatMenuModule,
    ClickOutsideModule,
    MatCheckboxModule,
    MatPaginatorModule,
    MatButtonModule,
    MatTooltipModule
  ],
})
export class LearningsModule {}
