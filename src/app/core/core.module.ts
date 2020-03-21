import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '@app/material';

import { AppComponent } from '@app/core/containers';

@NgModule({
  declarations: [AppComponent],
  imports: [CommonModule, RouterModule, FlexLayoutModule, MaterialModule],
})
export class CoreModule {}
