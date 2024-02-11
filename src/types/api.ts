import { Movie } from './movie';

export enum RapidAPILists {
  MOST_POPULAR_MOVIES = 'most_pop_movies',
  TOP_BOXOFFICE = 'top_boxoffice_200',
  TOP_RATED = 'top_rated_250',
  RECENT_TOP_BOXOFFICE = 'top_boxoffice_last_weekend_10',
  ALL = 'titles',
}

export const RapidAPIListLabels: Record<RapidAPILists, string> = {
  [RapidAPILists.MOST_POPULAR_MOVIES]: 'Most Popular Movies',
  [RapidAPILists.TOP_BOXOFFICE]: 'Top Box Office',
  [RapidAPILists.TOP_RATED]: 'Top Rated',
  [RapidAPILists.RECENT_TOP_BOXOFFICE]: 'Recent Top Box Office',
  [RapidAPILists.ALL]: 'All movies',
};

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
