import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from '@app/pages/pages-routing.module';

import { ProfileComponent } from '@app/pages/containers';
import { WorkComponent } from './containers/work/work.component';

@NgModule({
  declarations: [ProfileComponent, WorkComponent],
  imports: [CommonModule, PagesRoutingModule],
})
export class PagesModule {}
