import React, { FC, useEffect, useState } from 'react';

import { fetchPeople } from '../api';
import { Person } from '../types';
import { PeopleList } from '../components/PeopleList';

export const HomePage: FC = () => {
  const [people, setPeople] = useState<Array<Person>>([]);

  useEffect(() => {
    fetchPeople().then((response) => {
      if (response) {
        setPeople(response.results);
      }
    });
  }, []);

  return <PeopleList people={people} />;
};
