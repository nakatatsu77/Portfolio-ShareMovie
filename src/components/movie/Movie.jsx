import { Flex, Heading, Img, Stack, Text } from "@chakra-ui/react";
import React from "react";

const API_IMG = "https://image.tmdb.org/t/p/w92/";

export const Movie = ({ title, poster_path, overview }) => {
  return (
    <Flex border="1px" mb={1} >
      <Img src={API_IMG + poster_path} />
      <Heading as="h1" fontSize="sm">
        {title}
      </Heading>
      {/* <p>{overview}</p> */}
    </Flex>
  );
};
