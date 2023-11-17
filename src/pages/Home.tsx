import { 
  Avatar,
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { getUserDetail } from '../utils/Profile';
import { getUser } from '../utils/LocalStorage';
import UserInterface from '../interfaces/UserInterface';
import OrderInterface from '../interfaces/OrderInterface';
import History from '../interfaces/HistoryInterface';
import { getAvailableOrder, getOrderByCourier } from '../utils/Order';
import { getHistory } from '../utils/History';

function HomeButton(hrefLink : string, title : string) {
  return <Button
          as={'a'}
          display={{ base: 'none', md: 'inline-flex' }}
          fontSize={'sm'}
          fontWeight={600}
          color={'black'}
          href={hrefLink}
          bg={"blue.300"}
          _hover={{
            bg: 'pink.300',
          }}>
          {title}
        </Button>;
}

export default function Home() {
  const user = getUser();
  const username = user.username;
  const [availableCount, setAvailableCount] = useState(0);
  const [courierCount, setCourierCount] = useState(0);
  const [historyCount, setHistoryCount] = useState(0);
  const [userDetail, setUserDetail] = useState<UserInterface>({username : "",
                                                                name : "",
                                                                email : "",
                                                                saldo : 0});

  useEffect(() => {
    if(!username) {
      alert("Perlu log in");
      return;
    }
    
    getUserDetail(username).then((user) => {
      setUserDetail(user.data);

      getAvailableOrder().then((res) => {
        setAvailableCount(res.data.length);
      })
  
      getOrderByCourier(user.data.id ? user.data.id : 0).then((res) => {
        setCourierCount(res.data.length);
      })

      getHistory().then((res) => {
        setHistoryCount(res.length);
      })
    })

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
          <Avatar size="xl" name="John Doe" src="https://via.placeholder.com/150" />
          <Heading size="lg">{userDetail?.name}</Heading>
        </Stack>
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
            <Text fontWeight="bold">Saldo mu sekarang</Text>
            <Text>{userDetail?.saldo}</Text>
            {HomeButton('/Balance', "Tarik saldo")}
            <Text fontWeight="bold">Jumlah pesanan yang tersedia</Text>
            <Text>{availableCount}</Text>
            {HomeButton('/AvailableOrder', "Ambil pesanan")}
            <Text fontWeight="bold">Jumlah pesanan yang sedang kamu antar</Text>
            <Text>{courierCount}</Text>
            {HomeButton('/PickedOrder', "Lanjut mengantar")}
            <Text fontWeight="bold">Pesanan yang telah kamu antar</Text>
            <Text>{historyCount}</Text>
            {HomeButton('/History', "Cek riwayat")}
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};
