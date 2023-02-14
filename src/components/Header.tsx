import React from 'react';
import { Center, Heading } from '@chakra-ui/react';

export const Header = () => {
  return (
    <header>
      <Center bg="tomato" h="100px" py={3} color="white">
        <a href="/">
          <Heading size="4xl">Star Wars</Heading>
        </a>
      </Center>
    </header>
  );
};
