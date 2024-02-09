// import { NextApiRequest } from 'next';

export async function GET() {
  const res = await fetch('https://moviesdatabase.p.rapidapi.com/titles', {
    headers: {
      'X-RapidAPI-Key': process.env.RAPID_API_KEY || '',
      'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com',
    },
  });
  const data = await res.json();
  if (data) {
    return Response.json(data);
  }
}
