import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import 'hammerjs';

import { youTubeServiceInjectables, YouTubeService } from './services/youtube.service';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { SearchResultComponent } from './components/searchresult/searchresult.component';
import { YouTubeSearchComponent } from './components/utube-search/utube-search.component';

const config = {
    apiKey: 'AIzaSyBk4dNUZ6vp1qJC9fSZ6TFd7DyIQ0JqZM4',
    authDomain: 'utube-search-app.firebaseapp.com',
    databaseURL: 'https://utube-search-app.firebaseio.com',
    storageBucket: 'utube-search-app.appspot.com',
    messagingSenderId: '328845474827'
  };

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
    AngularFireModule.initializeApp(config)

  ],
  providers: [
    YouTubeService,
    youTubeServiceInjectables
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
