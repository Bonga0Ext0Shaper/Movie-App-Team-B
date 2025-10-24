// This is a file that deines the model of the movie app.
//  The data from the API is given in values and this file is used to show what fields the movie object has.

export interface Movie {
    id: number;
  title: string;
  year: number;
  runtime: number;
  genre: string[];
  director: string;
  cast: string[];
  rating: number;
  poster: string;
  plot: string;
  revenue: number;
  budget: number;
}
