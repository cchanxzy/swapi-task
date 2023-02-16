import React, { FC, useEffect, useState } from 'react';
import { Box, Spinner, Text } from '@chakra-ui/react';

import { fetchPlanet } from '../api';
import { Planet } from '../types';

type Props = {
  readonly planetId: string;
};

export const HomeWorld: FC<Props> = ({ planetId }) => {
  const [planet, setPlanet] = useState<Planet>();

  useEffect(() => {
    if (planetId) {
      fetchPlanet(planetId).then((response) => {
        if (response) {
          setPlanet(response);
        }
      });
    }
  }, [planetId]);

  return (
    <Box>
      {planet ? (
        <Text textTransform="capitalize">Homeworld: {planet.name}</Text>
      ) : (
        <Spinner size="xs" />
      )}
    </Box>
  );
};
