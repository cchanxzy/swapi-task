import { Person } from '../types';

export const fetchPerson = async (id: string): Promise<Person> => {
  return fetch(`https://swapi.dev/api/people/${id}`).then((response) => {
    return response.json() as Promise<Person>;
  });
};
