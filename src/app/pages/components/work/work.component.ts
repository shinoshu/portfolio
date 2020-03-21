import { Component, Input } from '@angular/core';

import { Work } from '@app/models';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss'],
})
export class WorkComponent {
  @Input() work?: Work;
}
