import React, { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Firebase";
import { Navigate } from "react-router-dom";
import { Box, Flex, Image } from "@chakra-ui/react";
import topPageImage from "../assets/img/top.png";

export const SharePage = () => {
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
  }, []);

  return (
    <>
      {!loading && (
        <>
          {!user ? (
            <Navigate to={`/login/`} />
          ) : (
            <>
              {/* <Image
                src={topPageImage}
                alt="picture"
                objectFit="cover"
                w="100%"
                minH="100vh"
              /> */}
              <Flex align="center" justify="center" height="100vh" >
                <Box
                  bg="white"
                  w="lg"
                  h="100px"
                  borderRadius="lg"
                  shadow="lg"
                ></Box>
              </Flex>
            </>
          )}
        </>
      )}
    </>
  );
};
