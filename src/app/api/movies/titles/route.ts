// import { NextApiRequest } from 'next';

export async function GET() {
  const params = new URLSearchParams({
    list: 'top_boxoffice_200',
  });
  const res = await fetch(
    `https://moviesdatabase.p.rapidapi.com/titles?${params.toString()}`,
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
