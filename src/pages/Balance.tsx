import { 
  Box, 
  Button, 
  Flex, 
  FormControl, 
  FormLabel, 
  Heading, 
  Input, 
  Stack, 
  Text, 
  useColorModeValue 
} from '@chakra-ui/react'
import {useEffect, useState} from 'react'
import { getBalance, withdrawFunction } from '../utils/Balance';
import { getUser } from '../utils/LocalStorage';

export default function Balance() {
  const user = getUser();
  const [balance, setBalance] = useState(0);
  const [withdrawBalance, setWithdrawBalance] = useState(0);
  
  function handleSubmit() {
    if(!user.username) {
      alert("Perlu login");
      return;
    }
    const response = withdrawFunction(user.username, withdrawBalance);
    response.then((success) => {
      if(success) {
        setBalance(balance - withdrawBalance);
        alert("Penarikan saldo sukses");
      }else {
        alert("Penarikan saldo gagal");
      }
    });
  }

  useEffect(() => {
    if(!user.username) {
      alert("Perlu login");
      return;
    }
    getBalance(user.username).then((res) => {
      console.log(res);
      setBalance(res.data);
    });
  }, [user]);

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
          <Heading fontSize={'4xl'}>Saldo</Heading>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          pl={8}
          pr={8}
          >
          <Heading fontSize={'lg'}>Saldo Kamu</Heading>
          <Text fontSize={'lg'} pt={3} pl={1}>{balance}</Text>
        </Box>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          pl={8}
          pr={8}
          >
          <form onSubmit={handleSubmit}>
            <Stack spacing={4}>
              <FormControl id="withdraw">
                <FormLabel>Tarik Saldo</FormLabel>
                <Input name="withdraw" type="number" 
                  value={withdrawBalance}
                  min={0}
                  max={balance}
                  onChange={(e) => setWithdrawBalance(parseInt(e.target.value))}
                  borderColor={"black"}
                  />
              </FormControl>
              <Button
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}
                type="submit">
                Tarik
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  )
}
  
  