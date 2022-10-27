import { Box, Button, Image, Text } from "@chakra-ui/react";
import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import topPageImage from "../assets/img/top.png";

export const Home = () => {
  const navigate = useNavigate();
  const onClickSharePage = useCallback(() => navigate("/share"), [navigate]);

  return (
    <>
      <Image
        src={topPageImage}
        alt="picture"
        objectFit="cover"
        w="100%"
        minH="100vh"
      />
      <Text
        pos="absolute"
        top="40%"
        left="50%"
        transform="translate(-50%,-50%)"
        fontWeight="bold"
        fontSize={{ base: "50", md: "6xl" }}
        textShadow="1px 1px white"
        whiteSpace="nowrap"
      >
        SHARE MOVIE
      </Text>

      <Text
        mt={{ base: "90px", md: "90px" }}
        pos="absolute"
        top="40%"
        left="50%"
        transform="translate(-50%,-50%)"
        fontWeight="bold"
        fontSize={{ base: "20px", md: "3xl" }}
        whiteSpace="nowrap"
      >
        印象に残った映画をみんなでシェアしよう！
      </Text>
      <Box>
        <Button
          colorScheme="teal"
          pos="absolute"
          top="60%"
          left="50%"
          transform="translate(-50%,-50%)"
          mt={{ base: "30px", md: "60px" }}
          size={{ base: "md", md: "lg" }}
          onClick={onClickSharePage}
        >
          映画をシェアする
        </Button>
      </Box>
    </>
  );
};
