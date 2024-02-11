import { Movie } from './movie';

// most_pop_movies & top_rated_250 are a valid keys but not currently working
// in the API. Code can be uncommented when API is working.
export enum RapidAPILists {
  TOP_BOXOFFICE = 'top_boxoffice_200',
  RECENT_TOP_10 = 'top_boxoffice_last_weekend_10',
  ALL = 'titles',
  // MOST_POPULAR_MOVIES = 'most_pop_movies',
  // TOP_RATED = 'top_rated_250',
}

export const RapidAPIListLabels: Record<RapidAPILists, string> = {
  [RapidAPILists.TOP_BOXOFFICE]: 'Top Box Office',
  [RapidAPILists.RECENT_TOP_10]: 'Recent Top 10 Box Office',
  [RapidAPILists.ALL]: 'All movies',
  // [RapidAPILists.MOST_POPULAR_MOVIES]: 'Most Popular Movies',
  // [RapidAPILists.TOP_RATED]: 'Top Rated',
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
