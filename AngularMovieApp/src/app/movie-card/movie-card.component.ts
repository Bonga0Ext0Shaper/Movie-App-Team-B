// import { Component, Input } from '@angular/core';
// import { MovieService } from '../services/movie.service';

// @Component({
//   selector: 'app-movie-card',
//   templateUrl: './movie-card.component.html',
//   styleUrls: ['./movie-card.component.css']
// })
// export class MovieCardComponent {
//   @Input() movie: any;

//   constructor(private movieService: MovieService) {}

//   addToFavorites(movie: any) {
//     this.movieService.addFavorite(movie);
//   }
// }

import { Component, Input } from '@angular/core';
import { MovieinfoService } from '../services/movieinfo.service';
import { Movie } from '../movie.model';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css'],
})
export class MovieCardComponent {
  @Input() movie!: Movie;

  addToFavorites(movie: Movie): void {
    console.log('Added to favorites:', movie.title);
  }
}
