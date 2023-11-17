import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  FormErrorMessage,
} from '@chakra-ui/react'
import { validateLogin, validateUsername } from '../utils/Login'
import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { setUser } from '../utils/LocalStorage';

type formType = {
  username : string,
  password : string
};

export default function Login() {
  const [formData, setFormData] = useState<formType>({username : "",
                                                      password : ""});
  const [usernameValid, setUsernameValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);
  const navigate = useNavigate();

  function handleChange (event : React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  }

  function revalidateUsername() {
    validateUsername(formData.username).then((available) => setUsernameValid(!available));
  }

  function handleSubmit(event : React.FormEvent<HTMLFormElement>) {
    revalidateUsername();
    if(usernameValid) {
      const response = validateLogin(formData.username,
                                      formData.password);
      response.then((responseData) => {
        if(responseData !== "gagal") {
          setUser(formData.username, responseData);
          navigate('/');
        }else {
          setPasswordValid(false);
        }
      });
    }

    event.preventDefault();
  }

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('red.600', 'white')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}
        bg={useColorModeValue('white', 'gray.700')}
        >
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Login</Heading>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <form onSubmit={handleSubmit}>
            <Stack spacing={4}>
              <FormControl id="username" isRequired isInvalid={!usernameValid} onBlur={revalidateUsername}>
                <FormLabel>Username</FormLabel>
                <Input name="username" type="text" 
                  value={formData.username} 
                  onChange={handleChange}
                  borderColor={"black"}
                  />
                <FormErrorMessage>Username is not exist</FormErrorMessage>
              </FormControl>
              <FormControl id="password" isRequired isInvalid={!passwordValid}>
                <FormLabel>Password</FormLabel>
                <Input name="password" type="password" 
                  value={formData.password} 
                  onChange={(e) => {handleChange(e);setPasswordValid(true);}}
                  borderColor={"black"}
                  />
                <FormErrorMessage>Wrong password</FormErrorMessage>
              </FormControl>
              <Button
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}
                type="submit">
                Sign in
              </Button>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Text>Belum punya akun?</Text>
                <Link href="/Register">Buat akun</Link>
              </Stack>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  )
}