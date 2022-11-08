import {
  Box,
  Button,
  Flex,
  FormLabel,
  Heading,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { collection, getDocs, onSnapshot, orderBy } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../Firebase";
import { Movie } from "./Movie";

export const ShareMovie = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [favoriteMovies, setFavoriteMovies] = useState([]);

  const searchMovie = async (e) => {
    e.preventDefault();
    console.log("Searching");
    try {
      const url = `https://api.themoviedb.org/3/search/movie?api_key=98ac08b0dc42fd2311f3cda9142ae809&query=${query}&language=ja-JA`;
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setMovies(data.results);
    } catch (e) {
      console.log(e);
    }
    setQuery("");
  };

  const changeHandler = (e) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    //データベースからデータの読み取り
    const movieData = collection(db, "favoriteMovies");
    getDocs(movieData).then((snapShot) => {
      // console.log(snapShot.docs.map((doc) => ({ ...doc.data() })));
      setFavoriteMovies(snapShot.docs.map((doc) => ({ ...doc.data() })));
    });
    //リアルタイムで更新
    onSnapshot(movieData, (favoriteMovie) => {
      setFavoriteMovies(favoriteMovie.docs.map((doc) => ({ ...doc.data() })));
    });
  }, []);

  return (
    <>
      <Box>
        <Flex align="center" justify="center">
          <Box mt={6}>
            <FormLabel fontWeight="bold" fontSize={{ base: "lg", md: "xl" }}>
              お気に入りの映画を紹介しよう！
              <form onSubmit={searchMovie}>
                <Flex>
                  <Input
                    variant="flushed"
                    type="search"
                    placeholder="映画を探す"
                    value={query}
                    onChange={changeHandler}
                    htmlSize={50}
                    w="100%"
                    mr={3}
                    size={{ base: "lg", md: "lg" }}
                  />
                  <Button
                    onClick={onOpen}
                    type="search"
                    colorScheme="twitter"
                    size={{ base: "md", md: "lg" }}
                  >
                    検索
                  </Button>
                </Flex>

                <Modal
                  isOpen={isOpen}
                  onClose={onClose}
                  scrollBehavior="inside"
                  size={{ base: "sm", md: "xl" }}
                >
                  <ModalOverlay />
                  <ModalContent>
                    <ModalHeader>検索結果</ModalHeader>
                    <ModalBody>
                      {movies.length > 0 ? (
                        <Box>
                          {movies.map((movie) => (
                            <Movie
                              key={movie.id}
                              movie={movie}
                              {...movie}
                              setFavoriteMovies={setFavoriteMovies}
                            />
                          ))}
                        </Box>
                      ) : (
                        <h2>Sorry No Movies Found</h2>
                      )}
                    </ModalBody>
                    <ModalFooter>
                      <Button variant="ghost" size="sm" onClick={onClose}>
                        キャンセル
                      </Button>
                    </ModalFooter>
                  </ModalContent>
                </Modal>
              </form>
            </FormLabel>

            <Heading
              as="h1"
              fontSize={{ base: "20px", md: "25px" }}
              align="center"
              mt={5}
              mb={5}
            >
              ユーザーのおすすめ映画
            </Heading>
            <Box>
              {/* {favoriteMovies &&
                favoriteMovies.length > 0 &&
                favoriteMovies.map((favoriteMovie) => (
                  <Movie
                    key={favoriteMovie.id}
                    movie={favoriteMovie}
                    {...favoriteMovie}
                    setFavoriteMovies={setFavoriteMovies}
                  />
                ))} */}
              {favoriteMovies &&
                favoriteMovies.length > 0 &&
                favoriteMovies.map((favoriteMovie, index) => (
                  <Movie
                    key={index}
                    movie={favoriteMovie}
                    {...favoriteMovie}
                    setFavoriteMovies={setFavoriteMovies}
                  />
                ))}
            </Box>
          </Box>
        </Flex>
      </Box>
    </>
  );
};
