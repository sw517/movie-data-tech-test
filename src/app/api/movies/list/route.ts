import { fetchRapidApi, getSearchParams } from '@/app/_utils/api';
import { NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
  const { limit = '12', page = '1' } = getSearchParams(req, ['limit', 'page']);

  const params = new URLSearchParams({
    limit,
    page,
    list: 'top_boxoffice_200',
  });
  const res = await fetchRapidApi(`/titles?${params.toString()}`);
  const data = await res.json();

  return Response.json(data);
}
