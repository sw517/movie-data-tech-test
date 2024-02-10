import merge from 'lodash.merge';

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
