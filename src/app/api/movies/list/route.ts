import { fetchRapidApi, getSearchParams } from '@/app/_utils/api';
import { NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
  const {
    limit = '12',
    page = '1',
    list = 'top_boxoffice_200',
  } = getSearchParams(req, ['limit', 'page', 'list']);

  const params = new URLSearchParams({
    limit,
    page,
    list,
  });
  const res = await fetchRapidApi(`/titles?${params.toString()}`);
  const data = await res.json();

  return Response.json(data);
}
