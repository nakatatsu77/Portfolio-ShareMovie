import { Box, Text } from '@chakra-ui/react';
import React from 'react';

export const Footer = () => {
  return (
    <Box bg="blackAlpha.600" color="gray.50" padding={{ base: 3, md: 4 }}>
      <Text textAlign="center" fontSize="xs">
        © 2022 Tatsu
      </Text>
    </Box>
  );
};
