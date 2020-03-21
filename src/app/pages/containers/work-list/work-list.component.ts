import { Component } from '@angular/core';

import { Work } from '@app/models';

@Component({
  selector: 'app-work-list',
  templateUrl: './work-list.component.html',
  styleUrls: ['./work-list.component.scss'],
})
export class WorkListComponent {
  workList: Work[] = [
    {
      title: 'ポータルサイトの開発',
      image: '/assets/website_normal.png',
      content: 'ポータルサイトの開発',
    },
  ];
}
