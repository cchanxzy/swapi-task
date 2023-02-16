import React, { FC } from 'react';
import { Grid, GridItem } from '@chakra-ui/react';

interface Props {
  children: React.ReactNode;
}

export const Main: FC<Props> = ({ children }) => {
  return (
    <Grid
      gridTemplateColumns={{ base: '1fr', lg: '1fr 5fr 1fr' }}
      gap="1"
      color="blackAlpha.700"
      fontWeight="bold"
      px={10}
      py={20}
      bg="white"
    >
      <GridItem colStart={{ base: 1, lg: 2 }} colEnd={{ base: 2, lg: 3 }}>
        <main>{children}</main>
      </GridItem>
    </Grid>
  );
};
