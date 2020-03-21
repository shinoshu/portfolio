import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileComponent } from '@app/pages/containers';
import { SkillsComponent } from '@app/pages/containers';
import { WorkListComponent } from '@app/pages/containers';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'profile',
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
