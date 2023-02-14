import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Box, Center, Heading } from '@chakra-ui/react';
import { ListItem, UnorderedList, Spinner } from '@chakra-ui/react';

import { fetchPerson, fetchPlanet } from '../api/';
import { Film, Person, Planet } from '../types';
import { fetchFilm } from '../api/fetchFilm';

export const PersonPage = () => {
  const { id } = useParams();
  const [person, setPerson] = useState<Person>();
  const [planet, setPlanet] = useState<Planet>();
  const [films, setFilms] = useState<Array<Film>>([]);

  useEffect(() => {
    if (id) {
      fetchPerson(id).then((response) => {
        setPerson(response);
      });
    }
  }, [id]);

  useEffect(() => {
    if (person) {
      // get planet id from url
      const planetId = person.homeworld.split('/')[5];
      fetchPlanet(planetId).then((response) => {
        setPlanet(response);
      });
    }
  }, [person]);

  useEffect(() => {
    if (person) {
      const filmPromises = person.films.map((url) => {
        // get film id from url
        const filmId = url.split('/')[5];
        return fetchFilm(filmId);
      });
      Promise.all(filmPromises).then((response) => {
        setFilms(response);
      });
    }
  }, [person]);

  if (person) {
    return (
      <div>
        <Box mb={10}>
          <Link to="/">Back</Link>
        </Box>
        <Heading as="h1" mb={5}>
          {person.name}
        </Heading>
        <Box mb={5}>
          <p>Hair colour: {person.hair_color}</p>
          <p>Eye colour: {person.eye_color}</p>
          <p>Gender: {person.gender}</p>
          <p>Home planet: {planet ? planet.name : <Spinner size="xs" />}</p>
        </Box>
        <Heading size="lg" mb={5}>
          Films
        </Heading>
        <Box pl={3}>
          <UnorderedList>
            {films.length > 0 ? (
              films.map((film) => {
                return <ListItem key={film.url}>{film.title}</ListItem>;
              })
            ) : (
              <Spinner size="xs" />
            )}
          </UnorderedList>
        </Box>
      </div>
    );
  }

  return (
    <Center>
      <Spinner size="xl" />
    </Center>
  );
};
