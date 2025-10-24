import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from '../../services/movie.service';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent {
  searchQuery: string = '';

  constructor(
    private movieService: MovieService,
    private searchService: SearchService,
    private router: Router
  ) {}

  // Method to handle search form submission
  onSearch(): void {
    if (this.searchQuery.trim()) {
      // Perform search using MovieService
      const results = this.movieService.searchMovies(this.searchQuery);

      // Update search service with results and query
      this.searchService.updateSearchResults(results);
      this.searchService.updateCurrentQuery(this.searchQuery);

      // Navigate to search results page
      this.router.navigate(['/search-results']);
    }
  }

  // Method to handle Enter key press in search input
  onKeyPress(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      this.onSearch();
    }
  }

  // Method to clear search input
  clearSearch(): void {
    this.searchQuery = '';
    this.searchService.clearSearch();
  }
}
