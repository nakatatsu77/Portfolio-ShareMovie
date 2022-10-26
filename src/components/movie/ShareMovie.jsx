import {
  Box,
  Button,
  Flex,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Movie } from "./Movie";

const API_URL =
  "https://api.themoviedb.org/3/movie/popular?api_key=98ac08b0dc42fd2311f3cda9142ae809&language=ja-JA";

const API_SEARCH =
  "https://api.themoviedb.org/3/search/movie?api_key=98ac08b0dc42fd2311f3cda9142ae809&query";

export const ShareMovie = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
  }, []);

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
  };

  const changeHandler = (e) => {
    setQuery(e.target.value);
  };

  return (
    <>
      <Box h="100vh"></Box>
      <Flex align="center" justify="center">
        <Box>
          <FormLabel fontWeight="bold" fontSize={{ base: "sm", sm: "md" }}>
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
                  size={{ base: "sm", sm: "md" }}
                />
                <Button
                  onClick={onOpen}
                  type="search"
                  colorScheme="twitter"
                  size={{ base: "sm", sm: "md" }}
                >
                  検索
                </Button>
              </Flex>

              <Modal
                isOpen={isOpen}
                onClose={onClose}
                scrollBehavior="inside"
                size={{ base: "xs", sm: "md" }}
              >
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>検索結果</ModalHeader>
                  <ModalBody>
                    {movies.length > 0 ? (
                      <Box>
                        {movies.map((movieReq) => (
                          <Movie key={movieReq.id} {...movieReq} />
                        ))}
                      </Box>
                    ) : (
                      <h2>Sorry No Movies Found</h2>
                    )}
                  </ModalBody>
                  <ModalFooter>
                    <Button variant="ghost" size="xs" onClick={onClose}>
                      キャンセル
                    </Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </form>
          </FormLabel>
          {/* <div>
            {movies.length > 0 ? (
              <div>
                {movies.map((movieReq) => (
                  <Movie key={movieReq.id} {...movieReq} />
                ))}
              </div>
            ) : (
              <h2>Sorry No Movies Found</h2>
            )}
          </div> */}
        </Box>
      </Flex>
    </>
  );
};
