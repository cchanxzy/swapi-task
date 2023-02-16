import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { PeopleList } from '../PeopleList';

describe('PeopleList', () => {
  it('renders spinner if no people', () => {
    render(<PeopleList people={[]} />, { wrapper: MemoryRouter });
    expect(screen.getByText('Loading')).toBeInTheDocument();
  });

  it('renders list of people', () => {
    const people = [
      {
        name: 'Luke Skywalker',
        hair_color: 'blond',
        gender: 'male',
        homeworld: 'https://swapi.dev/api/planets/1/',
        url: 'https://swapi.dev/api/people/1/',
      },
      {
        name: 'R2-D2',
        hair_color: 'n/a',
        gender: 'n/a',
        homeworld: 'https://swapi.dev/api/planets/1/',
        url: 'https://swapi.dev/api/people/4/',
      },
    ];

    render(<PeopleList people={people} />, { wrapper: MemoryRouter });
    expect(screen.getByText('Luke Skywalker')).toBeInTheDocument();
    expect(screen.getByText('R2-D2')).toBeInTheDocument();
  });
});
