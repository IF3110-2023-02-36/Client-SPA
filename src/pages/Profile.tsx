import {
  Box,
  Avatar,
  Heading,
  Text,
  Stack,
  Divider,
  VStack,
  HStack,
  useColorModeValue,
  Flex,
  Button,
  useTab,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import UserInterface from '../interfaces/UserInterface';
import { getUserDetail } from '../utils/Profile';
import { getUser } from '../utils/LocalStorage';



export default function Profile() {
  const username = getUser();
  const [isEditing, setIsEditing] = useState(false);
  const [userDetail, setUserDetail] = useState<UserInterface>();

  useEffect(() => {
    if(!username) {
      alert("Perlu login");
      return;
    }
    getUserDetail(username).then((res) => {
      console.log(res);
      setUserDetail(res.data);
    });
  }, [userDetail]);

  return (
    <Flex
      h={'95vh'}
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
          {isEditing ?
          // TODO : edit photo logic
          <Button>Edit Photo</Button> 
          : 
          <></>}
          <Heading size="lg">{userDetail?.name}</Heading>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          pl={8}
          pr={8}
          >
            <Text fontWeight="bold">Username:</Text>
            <Text>{userDetail?.username}</Text>
            <Text fontWeight="bold">Email:</Text>
            <Text>{userDetail?.email}</Text>
            <Text fontWeight="bold">Name:</Text>
            <Text>{userDetail?.name}</Text>
            <Text fontWeight="bold">Saldo:</Text>
            <Text>{userDetail?.saldo}</Text>
        </Box>
        {isEditing ? 
        <Button></Button>
        :
        <Button></Button>}
      </Stack>
    </Flex>
  );
}
