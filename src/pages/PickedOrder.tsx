import { 
  Box, 
  Heading,
  Stack,
} from '@chakra-ui/react'
import PickedOrderInterface from '../interfaces/PickedOrderInterface';
import { useState } from 'react'
import PickedOrderCard from '../components/PickedOrderCard';

// TODO : fetch data from SOAP
const dummyData : PickedOrderInterface[] = [
  {
    address : "jl. imam bonjol no.69",
    customerName : "ukin",
    salary : 100,
    description : "dimas lagi main sama mas ukin"
  },
  {
    address : "bullet",
    customerName : "ishraul",
    salary : 1111,
    description : "aku butuh peluru"
  },
  {
    address : "jl.ngawi",
    customerName : "rusdi",
    salary : 69,
    description : "aku akan datang"
  },
  {
    address : "jl.ngawi",
    customerName : "rusdi",
    salary : 69,
    description : "aku akan datang"
  },
  {
    address : "jl.ngawi",
    customerName : "rusdi",
    salary : 69,
    description : "aku akan datang"
  },
  {
    address : "jl.ngawi",
    customerName : "rusdi",
    salary : 69,
    description : "aku akan datang"
  }
];

export default function PickedOrder() {
  const [orders, setOrders] = useState<PickedOrderInterface[]>(dummyData);

  return (
    <Box
      bg={"red.800"}>
      <Stack
        minH={'90vh'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        align={'center'}
        >
        <Heading>
          Pesanan yang kamu ambil
        </Heading>
        {orders.map(order => (
          <PickedOrderCard order={order}/>
        ))}
      </Stack>
    </Box>
  );
}
  