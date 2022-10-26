import { useCallback } from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Link,
  useDisclosure,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { MenuIconButton } from "./MenuIconButton";
import { MenuDrawer } from "./MenuDrawer";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../Firebase";
import { signOut } from "firebase/auth";

export const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  const onClickHome = useCallback(() => navigate("/"), [navigate]);
  const onClickSharePage = useCallback(() => navigate("/share"), [navigate]);
  const onClickSignUp = useCallback(() => navigate("/signup"), [navigate]);
  const onClickLogin = useCallback(() => navigate("/login"), [navigate]);

  const logout = async () => {
    await signOut(auth);
    navigate("/");
  };

  return (
    <>
      <Flex
        // position="absolute"
        w="100%"
        as="nav"
        bg="orange.900"
        color="gray.50"
        align="center"
        justify="space-between"
        padding={{ base: 3, md: 3 }}
      >
        <Flex
          align="center"
          as="a"
          _hover={{ cursor: "pointer" }}
          onClick={onClickHome}
        >
          <Heading as="h1" fontSize={{ base: "md", md: "lg" }}>
            SHARE MOVIE
          </Heading>
        </Flex>
        <Flex
          align="center"
          fontSize="sm"
          display={{ base: "none", sm: "flex" }}
        >
          <Box>
            {user ? (
              <Button onClick={logout}  size="xs" colorScheme="blackAlpha">
                ログアウト
              </Button>
            ) : (
              <Box>
                <Button
                  onClick={onClickLogin}
                  size="xs"
                  colorScheme="blackAlpha"
                  mr={4}
                >
                  ログイン
                </Button>
                <Button onClick={onClickSignUp} size="xs" colorScheme="blackAlpha">
                  新規登録
                </Button>
              </Box>
            )}
          </Box>
        </Flex>
        <MenuIconButton onOpen={onOpen} />
      </Flex>
      <MenuDrawer
        onClose={onClose}
        isOpen={isOpen}
        onClickHome={onClickHome}
        onClickLogin={onClickLogin}
        onClickSignUp={onClickSignUp}
      />
    </>
  );
};
