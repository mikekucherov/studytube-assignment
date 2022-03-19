import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LearningsDialogComponent } from './learnings-dialog.component';
import { LearningsDialogRoutingModule } from './learnings-dialog-routing.module';
import {SharedModule} from "../../shared/shared.module";
import { UserInfoWidgetComponent } from './user-info-widget/user-info-widget.component';
import { LearningsAttachTableComponent } from './learnings-attach-table/learnings-attach-table.component';
import {ComponentsModule} from "../../components/components.module";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  declarations: [LearningsDialogComponent, UserInfoWidgetComponent, LearningsAttachTableComponent],
  imports: [CommonModule, LearningsDialogRoutingModule, SharedModule, ComponentsModule, MatButtonModule, MatIconModule],
})
export class LearningsDialogModule {}
