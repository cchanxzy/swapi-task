import React, { useEffect, useState } from 'react';
import { Link as RouterLink, useParams } from 'react-router-dom';
import { Box, Center, Link, Heading, Text, Spinner } from '@chakra-ui/react';

import { fetchPerson } from '../api/';
import { Person } from '../types';
import { FilmsList, HomeWorld } from '../components';

export const PersonPage = () => {
  const { id } = useParams();
  const [person, setPerson] = useState<Person>();

  useEffect(() => {
    if (id) {
      fetchPerson(id).then((response) => {
        if (response) {
          setPerson(response);
        }
      });
    }
  }, [id]);

  if (person) {
    const filmIds = person.films.map((url) => {
      // get film id from url
      return url.split('/')[5];
    });
    // get planet id from url
    const planetId = person.homeworld.split('/')[5];

    return (
      <div>
        <Box mb={10}>
          <Link as={RouterLink} to="/">
            Back
          </Link>
        </Box>
        <Heading as="h1" mb={5}>
          {person.name}
        </Heading>
        <Box mb={5}>
          <Text textTransform="capitalize">
            Hair color: {person.hair_color}
          </Text>
          <Text textTransform="capitalize">Eye color: {person.eye_color}</Text>
          <Text textTransform="capitalize">Gender: {person.gender}</Text>
          <HomeWorld planetId={planetId} />
        </Box>
        <FilmsList filmIds={filmIds} />
      </div>
    );
  }

  return (
    <Center>
      <Spinner size="xl" />
    </Center>
  );
};
