import { Film } from '../types';

export const fetchFilm = async (id: string): Promise<Film> => {
  return fetch(`https://swapi.dev/api/films/${id}`).then((response) => {
    return response.json() as Promise<Film>;
  });
};
