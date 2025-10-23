import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class MovieService {
  private favorites: any[] = [];

  getMovies(query: string) {
    // Mock data for now
    return [
      { title: 'Movie 1', poster: 'https://via.placeholder.com/100', rating: '8.0', description: 'Description 1' },
      { title: 'Movie 2', poster: 'https://via.placeholder.com/100', rating: '7.5', description: 'Description 2' }
    ];
  }

  addFavorite(movie: any) {
    this.favorites.push(movie);
    localStorage.setItem('favorites', JSON.stringify(this.favorites));
  }

  getFavorites() {
    const data = localStorage.getItem('favorites');
    return data ? JSON.parse(data) : [];
  }
}