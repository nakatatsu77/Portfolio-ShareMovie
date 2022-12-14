import React, { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import  {auth}  from "../Firebase";
import { Navigate } from "react-router-dom";
import { Flex } from "@chakra-ui/react";
import { ShareMovie } from "../components/movie/ShareMovie";

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
              <Flex justify="center" minH="100vh">
                <Flex align="flex-start" pt={70} pb={70}>
                  <ShareMovie />
                </Flex>
              </Flex>
            </>
          )}
        </>
      )}
    </>
  );
};
