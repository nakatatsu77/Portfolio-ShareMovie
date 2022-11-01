import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

export const Page404 = () => {
  return (
    <>
      <Box w="100%" minH="100vh">
        <Text
          pos="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%,-50%)"
          fontWeight="bold"
          fontSize={{ base: "50", md: "6xl" }}
          textShadow="1px 1px white"
          whiteSpace="nowrap"
        >
          404 Not Found
        </Text>
      </Box>
    </>
  );
};
