import React, { FC } from 'react';
import { Grid, GridItem } from '@chakra-ui/react';

interface Props {
  children: React.ReactNode;
}

export const Main: FC<Props> = ({ children }) => {
  return (
    <Grid
      gridTemplateColumns={'1fr 5fr 1fr'}
      gap="1"
      color="blackAlpha.700"
      fontWeight="bold"
      p={5}
    >
      <GridItem colStart={2} colEnd={3} minHeight="50rem">
        <main>{children}</main>
      </GridItem>
    </Grid>
  );
};
