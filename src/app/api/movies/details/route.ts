import { fetchRapidApi, getSearchParams } from '@/app/_utils/api';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const { id } = getSearchParams(req, ['id']);

  if (!id)
    return NextResponse.json(
      { error: 'Mising required movie ID' },
      { status: 500 }
    );

  const res = await fetchRapidApi(`/titles/${id}`);
  const data = await res.json();

  if (!data)
    return NextResponse.json(
      { error: `Unable to retrieve movie details with ID: ${id}` },
      { status: 500 }
    );

  return NextResponse.json(data, { status: 200 });
}
