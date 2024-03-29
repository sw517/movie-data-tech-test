import merge from 'lodash.merge';
import { NextRequest } from 'next/server';

export const fetchRapidApi = async (path: string, config?: RequestInit) => {
  const baseUrl = 'https://moviesdatabase.p.rapidapi.com';
  const res = await fetch(
    `${baseUrl}${path}`,
    merge(
      {
        headers: {
          'X-RapidAPI-Key': process.env.RAPID_API_KEY || '',
          'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com',
        },
      },
      config
    )
  );
  const data = await res.json();

  return Response.json(data);
};

export const getSearchParams = (
  req: NextRequest,
  keys: string[]
): { [key: string]: string | undefined } => {
  return keys.reduce((acc, key) => {
    if (req.nextUrl.searchParams.get(key)) {
      return { ...acc, [key]: req.nextUrl.searchParams.get(key) };
    }
    return acc;
  }, {});
};
