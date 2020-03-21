import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from '@app/pages/pages-routing.module';

import { ProfileComponent } from '@app/pages/containers';

@NgModule({
  declarations: [ProfileComponent],
  imports: [CommonModule, PagesRoutingModule],
})
export class PagesModule {}
