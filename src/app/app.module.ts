import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { AppComponent } from './app.component';
import 'hammerjs';

import { youTubeServiceInjectables, YouTubeService } from './services/youtube.service';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { SearchResultComponent } from './components/searchresult/searchresult.component';
import { YouTubeSearchComponent } from './components/utube-search/utube-search.component';

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
    MaterialModule.forRoot()
  ],
  providers: [
    YouTubeService,
    youTubeServiceInjectables
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
