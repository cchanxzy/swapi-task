import { Person } from '../types';

export const fetchPerson = async (id: string): Promise<Person | void> => {
  return fetch(`https://swapi.dev/api/people/${id}`)
    .then((response) => {
      return response.json() as Promise<Person>;
    })
    .catch((e) => {
      console.error(e);
    });
};
