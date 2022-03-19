import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users.component';

const childRoutes: Routes = [
  {
    path: ':userId/edit-learnings',
    loadChildren: () =>
      import('../../features/learnings-dialog/learnings-dialog.module').then(
        (m) => m.LearningsDialogModule
      ),
  }
];

const routes: Routes = [{ path: '', component: UsersComponent, children: childRoutes }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
