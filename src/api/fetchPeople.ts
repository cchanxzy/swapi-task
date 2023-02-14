import { Person } from '../types/person';

type FetchPeopleResponse = {
  readonly count: number;
  readonly next: string | null;
  readonly previous: string | null;
  readonly results: Array<Person>;
};

export const fetchPeople = async (): Promise<FetchPeopleResponse> => {
  return fetch('https://swapi.dev/api/people/').then((response) => {
    return response.json() as Promise<FetchPeopleResponse>;
  });
};
