import { NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
  const query = req.nextUrl.searchParams.get('search');
  const params = new URLSearchParams({
    sort: 'year.decr',
    exact: 'false',
    titleType: 'movie',
  });
  const res = await fetch(
    `https://moviesdatabase.p.rapidapi.com/titles/search/title/${query}?${params.toString()}`,
    {
      headers: {
        'X-RapidAPI-Key': process.env.RAPID_API_KEY || '',
        'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com',
      },
    }
  );
  const data = await res.json();

  return Response.json(data);
}
