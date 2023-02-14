import React from 'react';
import { Center } from '@chakra-ui/react';

export const Footer = () => {
  return (
    <footer>
      <Center bg="tomato" h="100px" py={3} color="white">
        {new Date().getFullYear()}
      </Center>
    </footer>
  );
};
