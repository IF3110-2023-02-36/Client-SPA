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
import { validateConfirmPassword, validateEmail, validateRegister, validateUsername } from '../utils/Login'
import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { setUser } from '../utils/LocalStorage';

type formType = {
  username : string,
  name : string,
  email : string,
  password : string,
  confirmPassword : string
};

export default function Register() {
  const [formData, setFormData] = useState<formType>({username : "",
                                                      name : "",
                                                      email : "",
                                                      password : "",
                                                      confirmPassword : ""});
  const [usernameValid, setUsernameValid] = useState(true);
  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);
  const navigate = useNavigate();

  function handleChange (event : React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  }

  function revalidateUsername() {
    validateUsername(formData.username).then((available) => setUsernameValid(available));
  }
  function revalidateEmail() {
    validateEmail(formData.email).then((available) => setEmailValid(available));
  }
  function revalidatePassword() {
    const valid = validateConfirmPassword(formData.password, formData.confirmPassword);
    setPasswordValid(valid);
  }

  function handleSubmit(event : React.FormEvent<HTMLFormElement>) {
    revalidateUsername();
    revalidateEmail();
    revalidatePassword();
    if(usernameValid && emailValid && passwordValid) {
      const response = validateRegister(formData.username,
                                        formData.name,
                                        formData.email,
                                        formData.password);
      response.then(() => {
        setUser(formData.username);
        navigate('/');
      });
    }

    event.preventDefault();
  }

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Register</Heading>
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
                <Input name="username" type="text" value={formData.username} onChange={handleChange}/>
                <FormErrorMessage>Username already used</FormErrorMessage>
              </FormControl>
              <FormControl id="name" isRequired>
                <FormLabel>Name</FormLabel>
                <Input name="name" type="text" value={formData.name} onChange={handleChange}/>
              </FormControl>
              <FormControl id="email" isRequired isInvalid={!emailValid} onBlur={revalidateEmail}>
                <FormLabel>Email</FormLabel>
                <Input name="email" type="email" value={formData.email} onChange={handleChange}/>
                <FormErrorMessage>Email already used</FormErrorMessage>
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <Input name="password" type="password" value={formData.password} onChange={handleChange}/>
              </FormControl>
              <FormControl id="confirmPassword" isRequired isInvalid={!passwordValid} onBlur={revalidatePassword}>
                <FormLabel>Confirm Password</FormLabel>
                <Input name="confirmPassword" type="password" value={formData.confirmPassword} onChange={handleChange}/>
                <FormErrorMessage>Password is not same</FormErrorMessage>
              </FormControl>
              <Button
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}
                type="submit">
                Register
              </Button>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Text>Sudah punya akun?</Text>
                <Link href="/Login">Log in</Link>
              </Stack>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  )
}