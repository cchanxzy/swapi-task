import React, { FC } from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  Link,
  Text,
  Heading,
  Center,
  Spinner,
  SimpleGrid,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

import { Person } from '../types';
import { HomeWorld } from './HomeWorld';

type Props = {
  readonly people: Array<
    Pick<Person, 'url' | 'name' | 'hair_color' | 'gender' | 'homeworld'>
  >;
};

export const PeopleList: FC<Props> = ({ people }) => {
  if (people.length > 0) {
    return (
      <SimpleGrid minChildWidth="250px" spacing={10}>
        {people.map((person) => {
          // get the person id because it is not included in the API
          const id = person.url.split('/')[5];
          // get planet id from url
          const planetId = person.homeworld.split('/')[5];

          return (
            <Card key={person.url} backgroundColor="gray.50">
              <CardHeader>
                <Link as={RouterLink} to={`person/${id}`}>
                  <Heading size="md">{person.name}</Heading>
                </Link>
              </CardHeader>
              <CardBody>
                <Text textTransform="capitalize">Gender: {person.gender}</Text>
                <Text textTransform="capitalize">
                  Hair Color: {person.hair_color}
                </Text>
                <HomeWorld planetId={planetId} />
              </CardBody>
            </Card>
          );
        })}
      </SimpleGrid>
    );
  }

  return (
    <Center>
      Loading <Spinner size="xl" />
    </Center>
  );
};
