import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LearningsDialogComponent} from "./learnings-dialog.component";

const routes: Routes = [{ path: '', component: LearningsDialogComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LearningsDialogRoutingModule {}
