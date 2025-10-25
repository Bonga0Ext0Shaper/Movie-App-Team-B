import { Injectable } from '@angular/core';
import { Movie } from '../movie.model';
import { MOVIES } from '../movie.data';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieinfoService {
  private movies: Movie[] = MOVIES;

  constructor() {}

  getAllMovies(): Observable<Movie[]> {
    return of(this.movies);
  }

  getMovieById(id: number): Observable<Movie | undefined> {
    return of(this.movies.find((movie) => movie.id === id));
  }

  getMovieByGenre(genre: string): Observable<Movie[]> {
    return of(this.movies.filter((movie) => movie.genre.includes(genre)));
  }

  getTopRatedMovies(limit: number = 5): Observable<Movie[]> {
    return of(
      [...this.movies].sort((a, b) => b.rating - a.rating).slice(0, limit)
    );
  }

  getMoviesByYear(year: number): Observable<Movie[]> {
    return of(this.movies.filter((movie) => movie.year === year));
  }

  searchMovies(query: string): Observable<Movie[]> {
    const lowercaseQuery = query.toLowerCase();
    return of(
      this.movies.filter(
        (movie) =>
          movie.title.toLowerCase().includes(lowercaseQuery) ||
          movie.director.toLowerCase().includes(lowercaseQuery) ||
          movie.cast.some((actor) =>
            actor.toLowerCase().includes(lowercaseQuery)
          )
      )
    );
  }
}
