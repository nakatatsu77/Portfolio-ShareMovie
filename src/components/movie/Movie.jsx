import React, { useState } from "react";
import { Button, Flex, Heading, Img, Stack, Text } from "@chakra-ui/react";
import { db, auth } from "../../Firebase.js";
import { addDoc, collection, getDocs, onSnapshot } from "firebase/firestore";

const API_IMG = "https://image.tmdb.org/t/p/w154/";

export const Movie = ({
  title,
  poster_path,
  release_date,
  setFavoriteMovies,
  favoriteMovies,
  id,
}) => {
  // const addFavoriteMovie = () => {
  //   setFavoriteMovies((favoriteMovies) => [...favoriteMovies, movie]);
  // };
  const { uid } = auth.currentUser;
  const [favoriteMovie, setFavoriteMovie] = useState("");

  const handleClickAddButton = async () => {
    //データベースにクリックした映画データの保存
    try {
      const docRef = await addDoc(collection(db, "favoriteMovies"), {
        title,
        id,
        release_date,
        poster_path,
        API_IMG,
        uid,
        // favoriteMovies
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    // //データベースからデータの読み取り
    // const movieData = collection(db, "favoriteMovies");
    // await getDocs(movieData).then((snapShot) => {
    //   // console.log(snapShot.docs.map((doc) => ({ ...doc.data() })));
    //   setFavoriteMovies(snapShot.docs.map((doc) => ({ ...doc.data() })));
    // });
    // // リアルタイムで更新
    // // onSnapshot(movieData,(favoriteMovie) => {
    // //   setFavoriteMovies(favoriteMovie.docs.map((doc) => ({ ...doc.data() })))
    // // })
  };

  return (
    <>
      <Flex borderRadius="10px" bg="white" p="2px" mb={3} shadow="lg">
        <Img src={API_IMG + poster_path} />
        <Heading as="h1" fontSize="lg" ml={3} mt={3}>
          <Stack spacing={5}>
            <Text>{title}</Text>
            <Text>{release_date}公開</Text>
          </Stack>
          <Button
            onClick={() => setFavoriteMovie(handleClickAddButton)}
            colorScheme="twitter"
            mt={5}
          >
            s みんなとシェア！
          </Button>
        </Heading>
      </Flex>
    </>
  );
};
