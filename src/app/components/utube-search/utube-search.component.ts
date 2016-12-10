import { Component, OnInit } from '@angular/core';
import { SearchResult } from '../../model/search-result';

@Component({
  selector: 'youtube-search',
  templateUrl: './utube-search.component.html',
  styleUrls: ['./utube-search.component.css']
})
export class YouTubeSearchComponent {
  results: SearchResult[];
  // loadingGif: string = ((<any>window).__karma__) ? '' : require('images/loading.gif');

  updateResults(results: SearchResult[]): void {
    this.results = results;
    console.log('results: ', this.results); // uncomment to take a look
  }
}
