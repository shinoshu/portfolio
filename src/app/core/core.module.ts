import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AppComponent } from '@app/core/containers';

@NgModule({
  declarations: [AppComponent],
  imports: [CommonModule, RouterModule],
})
export class CoreModule {}
