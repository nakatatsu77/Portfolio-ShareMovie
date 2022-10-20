import React, { useState, useEffect } from "react";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "../Firebase";
import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Link, Navigate } from "react-router-dom";

export const Login = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
    } catch (error) {
      alert("メールアドレスまたはパスワードが間違っています");
    }
  };

  const [user, setUser] = useState();

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  });

  return (
    <>
      {user ? (
        <Navigate to={`/share`} />
      ) : (
        <Flex align="center" justify="center" height="100vh">
          <Box bg="white" w="sm" p={4} borderRadius="md" shadow="md">
            <Heading as="h1" size="md" textAlign="center">
              ログインフォーム
            </Heading>
            <Divider my={4} />
            <form onSubmit={handleSubmit}>
              <Stack>
                <Input
                  placeholder="Email"
                  name="email"
                  type="email"
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                />
                <Box>
                  <Input
                    mb="8"
                    placeholder="Password"
                    name="password"
                    type="password"
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                  />
                </Box>
              </Stack>
              <Flex flexDirection="column">
                <Text
                  mb="8"
                  textAlign="center"
                  textDecoration="underline"
                  color="blue"
                >
                  <Link to={`/signup/`}>新規登録はこちら</Link>
                </Text>
                <Button
                  type="submit"
                  colorScheme="twitter"
                  size="md"
                  paddingX="80px"
                >
                  ログイン
                </Button>
              </Flex>
            </form>
          </Box>
        </Flex>
      )}
    </>
  );
};
