import { Component } from '@angular/core';

import { ContactDialogComponent } from '@app/pages/components';
import { DialogService } from '@app/core/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private dialogService: DialogService) {}

  openDialog() {
    this.dialogService.openDialog(ContactDialogComponent);
  }
}
