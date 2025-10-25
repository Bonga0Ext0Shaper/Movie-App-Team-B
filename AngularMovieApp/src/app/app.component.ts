import { Component, OnInit } from '@angular/core';
import { MovieinfoService } from './services/movieinfo.service';
import { Movie } from './movie.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'AngularMovieApp';
  movies: Movie[] = [];
  loading: boolean = true;

  constructor(private movieService: MovieinfoService) {}

  ngOnInit(): void {
    this.movieService.getAllMovies().subscribe((data) => {
      this.movies = data;
      this.loading = false;
    });
  }
}
