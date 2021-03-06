import {Genre} from './genre';

export class Movie {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
  genres: Genre[];
}

export class Response  {
  results: Movie[];
  total_pages: number;
}
