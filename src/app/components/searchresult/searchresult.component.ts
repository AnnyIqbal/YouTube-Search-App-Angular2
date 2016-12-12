import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { SearchResult } from '../../model/search-result';

@Component({
  selector: 'app-search-result',
  templateUrl: './searchresult.component.html',
  styleUrls: ['./searchresult.component.css']
})

export class SearchResultComponent {

  @Input() result: SearchResult;

  constructor(private routes: Router) {}

  routeToVideo(url) {
    // this.routes.navigate(['tasklist']); //navigate to todoapp
    console.log(`https://www.youtube.com/watch?v=${this.result.id}`);
    console.log(url);

    this.routes.navigate(['watch:url']);
  }
}
