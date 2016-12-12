import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import 'hammerjs';

import { youTubeServiceInjectables, YouTubeService } from './services/youtube.service';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { SearchResultComponent } from './components/searchresult/searchresult.component';
import { YouTubeSearchComponent } from './components/utube-search/utube-search.component';
import { SearchResult } from './model/search-result';

const ROUTES: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'watch/:url', redirectTo: 'url'},
  // `https://www.youtube.com/watch?v=${SearchResult.id}`},
  // , component: SearchResultComponent },
  { path: 'home', component: YouTubeSearchComponent },
  { path: 'searchbox', component: SearchBoxComponent },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  declarations: [
    AppComponent,
    SearchBoxComponent,
    SearchResultComponent,
    YouTubeSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    YouTubeService,
    youTubeServiceInjectables
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
