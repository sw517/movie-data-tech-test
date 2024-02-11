import { NextRequest } from 'next/server';
import { fetchRapidApi, getSearchParams } from '@/app/_utils/api';

export async function GET(req: NextRequest) {
  const { limit = '12', page = '1' } = getSearchParams(req, ['limit', 'page']);

  const query = req.nextUrl.searchParams.get('search');
  const params = new URLSearchParams({
    limit,
    page,
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
