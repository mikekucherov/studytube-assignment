import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'users',
    pathMatch: 'full'
  },
  {
    path: 'users',
    loadChildren: () =>
      import('./pages/users/users.module').then((m) => m.UsersModule),
  },
  {
    path: 'learnings',
    loadChildren: () =>
      import('./pages/learnings/learnings.module').then(
        (m) => m.LearningsModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
