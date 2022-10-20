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
        <Flex align="center" justify="center" height="100vh">
          <Box bg="white" w="sm" p={4} borderRadius="md" shadow="md">
            <Heading as="h1" size="md" textAlign="center">
              新規登録
            </Heading>
            <Divider my={4} />
            <form onSubmit={handleSubmit}>
              <Stack>
                <Input
                  placeholder="Email"
                  name="email"
                  type="email"
                  value={signupEmail}
                  onChange={e => setSignupEmail(e.target.value)}
                />
                <Box>
                  <Input
                    mb="8"
                    placeholder="Password"
                    name="password"
                    type="password"
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
                >
                  <Link to={`/login/`}>ログインはこちら</Link>
                </Text>
                <Button
                  type="submit"
                  colorScheme="twitter"
                  size="md"
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
