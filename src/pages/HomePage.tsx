import React, { FC, useEffect, useState } from 'react';
import { ListItem, UnorderedList } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import { fetchPeople } from '../api';
import { Person } from '../types';

export const HomePage: FC = () => {
  const [people, setPeople] = useState<Array<Person>>();

  useEffect(() => {
    fetchPeople().then((response) => {
      setPeople(response.results);
    });
  }, []);

  return (
    <UnorderedList>
      {people?.map((person) => {
        // a bit of hack to get the person id because it is not included in the API
        const id = person.url.split('/')[5];
        return (
          <ListItem>
            <Link to={`person/${id}`}> {person.name}</Link>
          </ListItem>
        );
      })}
    </UnorderedList>
  );
};
