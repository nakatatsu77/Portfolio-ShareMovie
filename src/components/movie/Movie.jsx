import React from "react";
import { Flex, Heading, Img, Text } from "@chakra-ui/react";

const API_IMG = "https://image.tmdb.org/t/p/w154/";

export const Movie = ({ title, poster_path, release_date }) => {
  return (
    <>
      <Flex
        border="2px solid gray"
        borderRadius="10px"
        bg="white"
        p="2px"
        mb={3}
      >
        <Img src={API_IMG + poster_path} />
        <Heading as="h1" fontSize="lg">
          {title}
          <Text>{release_date}上映</Text>
          {/* <p>{overview}</p> */}
        </Heading>
      </Flex>
    </>
  );
};
