import React, { useEffect } from "react";
import { Button, Flex, Heading, Img, Text } from "@chakra-ui/react";
import { db } from "../../Firebase";
import { addDoc, collection, getDocs } from "firebase/firestore";

const API_IMG = "https://image.tmdb.org/t/p/w154/";

export const Movie = ({
  title,
  poster_path,
  release_date,
  favoriteMovies,
  setFavoriteMovies,
  id,
}) => {
  // const addFavoriteMovie = () => {
  //   setFavoriteMovies((favoriteMovies) => [...favoriteMovies, movie]);
  // };

  const handleClickAddButton = async () => {
    //データベースにクリックした映画データの保存
    try {
      const docRef = await addDoc(collection(db, "favoriteMovie"), {
        title,
        id,
        release_date,
        poster_path,
        API_IMG,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    //データベースからデータの読み取り
    const movieData = collection(db, "favoriteMovie");
    await getDocs(movieData).then((snapShot) => {
      // console.log(snapShot.docs.map((doc) => ({ ...doc.data() })))
      setFavoriteMovies(snapShot.docs.map((doc) => ({ ...doc.data() })));
    });
  };

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
          {/* <button onClick={addFavoriteMovie}>{title}</button> */}
          {title}
          <Text>{release_date}上映</Text>
          {/* <Button onClick={addFavoriteMovie}>追加</Button> */}
          <Button onClick={handleClickAddButton}>追加</Button>
          {/* <p>{overview}</p> */}
        </Heading>
      </Flex>
    </>
  );
};
