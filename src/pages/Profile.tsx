import {
  Box,
  Avatar,
  Heading,
  Text,
  Stack,
  useColorModeValue,
  Flex,
  Button,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Center,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import UserInterface from '../interfaces/UserInterface';
import { changeUserDetail, getUserDetail } from '../utils/Profile';
import { getUser } from '../utils/LocalStorage';
import { validateEmail } from '../utils/Login';



export default function Profile() {
  const user = getUser();
  const username = user.username;
  const [isEditing, setIsEditing] = useState(false);
  const [userDetail, setUserDetail] = useState<UserInterface>({username : "",
                                                                name : "",
                                                                email : "",
                                                                saldo : 0});
  const [currentEmail, setCurrentEmail] = useState("");
  const [emailValid, setEmailValid] = useState(true);

  function handleChange (event : React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setUserDetail((prevUserDetail) => ({ ...prevUserDetail, [name]: value }));
  }

  function revalidateEmail() {
    validateEmail(userDetail.email).then((available) => setEmailValid(available || (userDetail.email === currentEmail)));
  }

  function handleSubmit(event : React.FormEvent<HTMLFormElement>) {
    revalidateEmail();
    if(username && emailValid) {
      changeUserDetail(username, userDetail);
    }
    setIsEditing(false);
    event.preventDefault();
  }

  useEffect(() => {
    if(!username) {
      alert("Perlu log in");
      return;
    }
    getUserDetail(username).then((res) => {
      console.log(res);
      setUserDetail(res.data);
      setCurrentEmail(res.data.email);
    });
  }, [username]);

  return (
    <Flex
      h={'130vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('red.800', 'white')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}
        bg={useColorModeValue('white', 'gray.700')}
        minW={'70vh'}
        >
        <Stack align={'center'}>
          {/* TODO : fetch real photo image */}
          <Avatar size="xl" name="John Doe" src="https://via.placeholder.com/150" />
          <Heading size="lg">{userDetail?.name}</Heading>
          {isEditing ?
          // TODO : edit photo logic
          <Button
            bg={'blue.400'}
            color={'white'}
            _hover={{
              bg: 'blue.500',
            }}
            >
            Edit photo
          </Button> 
          : 
          <></>}
        </Stack>
        {isEditing ? 
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          pl={8}
          pr={8}
          pt={4}
          pb={8}
          >
          <form onSubmit={handleSubmit}>
            <Stack spacing={4}>
              <Center><Heading>Profile</Heading></Center>
              <Text fontWeight="bold">Username</Text>
              <Text>{userDetail?.username}</Text>
              <FormControl id="email" isRequired isInvalid={!emailValid} onBlur={revalidateEmail}>
                <FormLabel fontWeight="bold">Email address</FormLabel>
                <Input name="email" type="email" 
                  value={userDetail.email} 
                  onChange={handleChange}
                  borderColor={"black"}
                  />
                <FormErrorMessage>Email address has already been used</FormErrorMessage>
              </FormControl>
              <FormControl id="name" isRequired>
                <FormLabel fontWeight="bold">Name</FormLabel>
                <Input name="name" type="text" 
                  value={userDetail.name} 
                  onChange={handleChange}
                  borderColor={"black"}
                  />
              </FormControl>
              <Text fontWeight="bold">Saldo</Text>
              <Text>{userDetail?.saldo}</Text>
              <Button
              bg={'blue.400'}
              color={'white'}
              _hover={{
                bg: 'blue.500',
              }}
              type={"submit"}
              >
                Save profile
              </Button>
            </Stack>
          </form>
        </Box>
        :
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          pl={8}
          pr={8}
          pt={4}
          pb={8}
          >
            <Stack spacing={4}>
                <Center><Heading>Profile</Heading></Center>
                <Text fontWeight="bold">Username</Text>
                <Text>{userDetail?.username}</Text>
                <Text fontWeight="bold">Email address</Text>
                <Text>{userDetail?.email}</Text>
                <Text fontWeight="bold">Name</Text>
                <Text>{userDetail?.name}</Text>
                <Text fontWeight="bold">Saldo</Text>
                <Text>{userDetail?.saldo}</Text>
                <Button
                bg={'blue.400'}
                color={'white'}
                _hover={{
                bg: 'blue.500',
                }}
                onClick={() => setIsEditing(true)}>
                Edit profile
                </Button>
            </Stack>
        </Box>
        }
      </Stack>
    </Flex>
  );
}
