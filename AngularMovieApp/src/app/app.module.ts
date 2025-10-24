import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MovieSearchComponent } from './components/movie-search/movie-search.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { WatchlistComponent } from './components/watchlist/watchlist.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieSearchComponent,
    SearchResultsComponent,
    WatchlistComponent
    // ... other components
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule // Required for ngModel in search component
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
