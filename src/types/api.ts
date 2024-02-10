import { Movie } from './movie';

export enum APIRoute {
  LIST = '/api/movies/list',
  SEARCH = '/api/movies/search',
}

export type RapidAPIResponse = {
  page: number;
  next: string;
  entries: number;
  results: Movie[];
};
