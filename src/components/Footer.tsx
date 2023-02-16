import React from 'react';
import { Box, Center } from '@chakra-ui/react';

export const Footer = () => {
  return (
    <Box as="footer">
      <Center bg="tomato" h="100px" py={3} color="white">
        {new Date().getFullYear()}
      </Center>
    </Box>
  );
};
