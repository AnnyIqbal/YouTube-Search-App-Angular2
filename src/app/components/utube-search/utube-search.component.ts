import { Component } from '@angular/core';
import { SearchResult } from '../../model/search-result';

@Component({
  selector: 'app-youtube-search',
  templateUrl: './utube-search.component.html',
  styleUrls: ['./utube-search.component.css']
})
export class YouTubeSearchComponent {
  results: SearchResult[];

  updateResults(results: SearchResult[]): void {
    this.results = results;
    console.log('results: ', this.results); // array of 10 result objects
  }
}
