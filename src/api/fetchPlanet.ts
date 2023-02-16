import { Planet } from '../types';

export const fetchPlanet = async (id: string): Promise<Planet | void> => {
  return fetch(`https://swapi.dev/api/planets/${id}`)
    .then((response) => {
      return response.json() as Promise<Planet>;
    })
    .catch((e) => {
      console.error(e);
    });
};
