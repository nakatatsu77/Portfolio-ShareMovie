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
        fontSize={{ base: "30px", sm: "5xl" }}
        textShadow="1px 1px white"
        whiteSpace="nowrap"
      >
        SHARE MOVIE
      </Text>

      <Text
        mt={{ base: "50px", sm: "80px" }}
        pos="absolute"
        top="40%"
        left="50%"
        transform="translate(-50%,-50%)"
        fontWeight="bold"
        fontSize={{ base: "14px", sm: "2xl" }}
        whiteSpace="nowrap"
        borderRadius="10px"
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
          mt={{ base: "10px", sm: "60px" }}
          size={{ base: "sm", sm: "md" }}
          onClick={onClickSharePage}
        >
          映画をシェアする
        </Button>
      </Box>
    </>
  );
};
