import React, { FC, useEffect, useState } from 'react';
import {
  Box,
  ListItem,
  UnorderedList,
  Spinner,
  Heading,
} from '@chakra-ui/react';

import { Film } from '../types';
import { fetchFilm } from '../api';

type Props = {
  readonly filmIds: Array<string>;
};

export const FilmsList: FC<Props> = ({ filmIds }) => {
  const [films, setFilms] = useState<Array<Film>>([]);

  useEffect(() => {
    if (filmIds.length > 0) {
      const filmPromises = filmIds.map((filmId) => {
        return fetchFilm(filmId);
      });
      Promise.all(filmPromises)
        .then((response) => {
          setFilms(response.filter((film) => !!film) as Film[]);
        })
        .catch((e) => {
          console.error(e);
        });
    }
  }, [filmIds]);

  return (
    <Box>
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
    </Box>
  );
};
