import { Movie } from './movie';

export enum APIRoute {
  LIST = '/api/movies/list',
  SEARCH = '/api/movies/search',
  DETAILS = '/api/movies/details',
}

export type RapidAPIListResponse = {
  page: number;
  next: string;
  entries: number;
  results: Movie[];
};

export type RapidAPISingleResponse = {
  results: Movie;
};
