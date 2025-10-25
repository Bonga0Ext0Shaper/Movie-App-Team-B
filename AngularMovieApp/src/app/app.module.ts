import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { HeaderComponent } from './header/header.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { MovieSearchComponent } from './movie-search/movie-search.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MovieinfoService } from './services/movieinfo.service';

@NgModule({
  declarations: [
    AppComponent,
    MovieCardComponent,
    HeaderComponent,
    FavoritesComponent,
    MovieSearchComponent,
    NavigationComponent,
  ],
  imports: [BrowserModule, CommonModule, AppRoutingModule],
  providers: [MovieinfoService],
  bootstrap: [AppComponent],
})
export class AppModule {}
