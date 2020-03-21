import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileComponent } from '@app/pages/containers';
import { SkillsComponent } from '@app/pages/containers';
import { WorkListComponent } from '@app/pages/containers';

const routes: Routes = [
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'skills',
    component: SkillsComponent,
  },
  {
    path: 'work',
    component: WorkListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
