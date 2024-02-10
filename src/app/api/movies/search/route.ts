import { NextRequest } from 'next/server';
import { fetchRapidApi } from '@/app/utils/api';

export async function GET(req: NextRequest) {
  const query = req.nextUrl.searchParams.get('search');
  const params = new URLSearchParams({
    sort: 'year.decr',
    exact: 'false',
    titleType: 'movie',
  });
  const res = await fetchRapidApi(
    `/titles/search/title/${query}?${params.toString()}`
  );
  const data = await res.json();

  return Response.json(data);
}
