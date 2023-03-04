import { Component } from '@angular/core';
import { WikipediaService } from './wikipedia.service';

export interface WikiResult {
  title: string;
  wordcount: string;
  snippet: string;
  pageid: number;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pages: WikiResult[] = [];

  constructor(private wikipedia: WikipediaService) {}
  
  onTerm(term: string) {
    this.wikipedia.search(term).subscribe((res: any) => {
      this.pages = res.query.search;
    })
  }
}
