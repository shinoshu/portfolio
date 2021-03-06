import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MarkdownModule } from 'ngx-markdown';

import { MaterialModule } from '@app/material';
import { PagesRoutingModule } from '@app/pages/pages-routing.module';

import { ProfileComponent } from '@app/pages/containers';
import { WorkListComponent } from '@app/pages/containers';
import { WorkComponent } from './components/work/work.component';
import { SkillsComponent } from './containers/skills/skills.component';
import { ContactDialogComponent } from './components/contact-dialog/contact-dialog.component';

@NgModule({
  declarations: [
    ProfileComponent,
    WorkListComponent,
    WorkComponent,
    SkillsComponent,
    ContactDialogComponent,
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MarkdownModule.forChild(),
    MaterialModule,
    PagesRoutingModule,
  ],
})
export class PagesModule {}
