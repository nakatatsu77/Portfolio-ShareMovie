import { Box, Text } from "@chakra-ui/react";
import React from "react";

export const Footer = () => {
  return (
    <Box
      position="absolute"
      bottom="0"
      bg="orange.700"
      color="gray.50"
      w="100%"
      padding={{ base: 4, md: 5 }}
    >
      <Text textAlign="center" fontSize="sm">
        © 2022 Tatsu
      </Text>
    </Box>
  );
};
