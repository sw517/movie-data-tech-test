import { fetchRapidApi } from '@/app/utils/api';

export async function GET() {
  const params = new URLSearchParams({
    list: 'top_boxoffice_200',
  });
  const res = await fetchRapidApi(`/titles?${params.toString()}`);
  const data = await res.json();

  return Response.json(data);
}
