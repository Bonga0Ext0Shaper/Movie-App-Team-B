import { Component } from '@angular/core';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent {
  query: string = '';
  movies: any[] = [];

  constructor(private movieService: MovieService) {}

  searchMovies() {
    this.movies = this.movieService.getMovies(this.query);
  }
}