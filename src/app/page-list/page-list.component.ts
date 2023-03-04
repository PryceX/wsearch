import { Component, Input } from '@angular/core';
import { WikiResult } from '../app.component';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent {
  @Input() pages: WikiResult[] = [];
}
