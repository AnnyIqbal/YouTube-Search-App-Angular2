import { Component, Input } from '@angular/core';
import { SearchResult } from '../../model/search-result';

@Component({
  selector: 'app-search-result',
  templateUrl: './searchresult.component.html',
  styleUrls: ['./searchresult.component.css']
})

export class SearchResultComponent {

  @Input() result: SearchResult;

}
