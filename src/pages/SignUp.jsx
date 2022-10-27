import React, { useState, useEffect } from 'react';

import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from 'firebase/auth';
import { auth } from '../Firebase';
import { Navigate, Link } from 'react-router-dom';
import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Input,
  Stack,
  Text,
} from '@chakra-ui/react';

export const SignUp = () => {
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      await createUserWithEmailAndPassword(auth, signupEmail, signupPassword);
    } catch (error) {
      alert('正しく入力してください');
    }
  };

  const [user, setUser] = useState('');

  useEffect(() => {
    onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
    });
  }, []);

  return (
    <>
      {user ? (
        <Navigate to={`/share`} />
      ) : (
        <Flex align="center" justify="center" minH="100vh" >
          <Box bg="white" w="lg" p={10} borderRadius="md" shadow="md" m={10}>
            <Heading as="h1" size="lg" textAlign="center">
              新規登録
            </Heading>
            <Divider my={4} />
            <form onSubmit={handleSubmit}>
              <Stack>
                <Input
                  placeholder="Email"
                  name="email"
                  type="email"
                  size="lg"
                  value={signupEmail}
                  onChange={e => setSignupEmail(e.target.value)}
                />
                <Box>
                  <Input
                    mb="8"
                    placeholder="Password"
                    name="password"
                    type="password"
                    size="lg"
                    value={signupPassword}
                    onChange={e => setSignupPassword(e.target.value)}
                  />
                </Box>
              </Stack>
              <Flex flexDirection="column">
                <Text
                  mb="8"
                  textAlign="center"
                  textDecoration="underline"
                  color="blue"
                  fontSize="xl"
                >
                  <Link to={`/login/`}>ログインはこちら</Link>
                </Text>
                <Button
                  type="submit"
                  colorScheme="twitter"
                  size="lg"
                  paddingX="80px"
                >
                  登録
                </Button>
              </Flex>
            </form>
          </Box>
        </Flex>
      )}
    </>
  );
};
