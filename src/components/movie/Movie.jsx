import React from "react";
import { Button, Flex, Heading, Img, Stack, Text } from "@chakra-ui/react";
import { db, auth } from "../../Firebase.js";
import {
  collection,
  doc,
  setDoc
} from "firebase/firestore";

const API_IMG = "https://image.tmdb.org/t/p/w154/";

export const Movie = ({ title, poster_path, release_date, id }) => {
  const { uid } = auth.currentUser;

  const handleClickAddButton = async () => {
    try {
      const addData = { title, id, release_date, poster_path, API_IMG, uid, };
      const docRef = doc(collection(db, "favoriteMovies"));
      await setDoc(docRef, addData);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <Flex borderRadius="10px" bg="white" p="2px" mb={3} shadow="lg">
      <Img src={API_IMG + poster_path} />
      <Heading as="h1" fontSize="lg" ml={3} mt={3}>
        <Stack spacing={5}>
          <Text>{title}</Text>
          <Text>{release_date}公開</Text>
        </Stack>
        <Button onClick={handleClickAddButton} colorScheme="twitter" mt={5}>
          みんなとシェア！
        </Button>
      </Heading>
    </Flex>
  );
};
