export type Movie = {
  id: string;
  primaryImage: {
    id: string;
    width: number;
    height: number;
    url: string;
    caption: {
      plainText: string;
    };
  } | null;
  titleText: {
    text: string;
  };
  releaseYear: {
    year: number;
  };
  releaseDate: {
    day: number | null;
    month: number | null;
    year: number | null;
  } | null;
};
