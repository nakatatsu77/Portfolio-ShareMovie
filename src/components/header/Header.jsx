import { useCallback } from "react";
import { Box, Flex, Heading, Link, useDisclosure } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { MenuIconButton } from "./MenuIconButton";
import { MenuDrawer } from "./MenuDrawer";

export const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  const onClickHome = useCallback(() => navigate("/"), [navigate]);
  const onClickSharePage = useCallback(() => navigate("/share"), [navigate]);
  const onClickSignUp = useCallback(() => navigate("/signup"), [navigate]);

  return (
    <>
      <Flex
        as="nav"
        bg="blackAlpha.800"
        color="gray.50"
        align="center"
        justify="space-between"
        padding={{ base: 3, md: 3, }}
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
          <Box pr={4}>
            <Link onClick={onClickSharePage}>ログイン</Link>
          </Box>
          <Link onClick={onClickSignUp}>新規登録</Link>
        </Flex>
        <MenuIconButton onOpen={onOpen} />
      </Flex>
      <MenuDrawer
        onClose={onClose}
        isOpen={isOpen}
        onClickHome={onClickHome}
        onClickSharePage={onClickSharePage}
        onClickSignUp={onClickSignUp}
      />
    </>
  );
};
