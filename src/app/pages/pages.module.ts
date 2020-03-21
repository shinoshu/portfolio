import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '@app/material';
import { PagesRoutingModule } from '@app/pages/pages-routing.module';

import { ProfileComponent } from '@app/pages/containers';
import { WorkListComponent } from '@app/pages/containers';

@NgModule({
  declarations: [ProfileComponent, WorkListComponent],
  imports: [CommonModule, FlexLayoutModule, MaterialModule, PagesRoutingModule],
})
export class PagesModule {}
