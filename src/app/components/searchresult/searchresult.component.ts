import { Component, OnInit, Input } from '@angular/core';
import { SearchResult } from '../../model/search-result';

@Component({
  selector: 'search-result',
  templateUrl: './searchresult.component.html',
  styleUrls: ['./searchresult.component.css']
})

export class SearchResultComponent {
  @Input() result: SearchResult;
}