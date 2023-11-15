import { 
  Box, 
  Heading,
  Stack,
} from '@chakra-ui/react'
import AvailableOrderInterface from '../interfaces/AvailableOrderInterface';
import { useState } from 'react'
import AvailableOrderCard from '../components/AvailableOrderCard';

// TODO : fetch data from SOAP
const dummyData : AvailableOrderInterface[] = [
  {
    address : "jl. imam bonjol no.69",
    customerName : "ukin",
    salary : 100
  },
  {
    address : "bullet",
    customerName : "ishraul",
    salary : 1111
  },
  {
    address : "jl.ngawi",
    customerName : "rusdi",
    salary : 69
  },
  {
    address : "jl.ngawi",
    customerName : "rusdi",
    salary : 69
  },
  {
    address : "jl.ngawi",
    customerName : "rusdi",
    salary : 69
  },
  {
    address : "jl.ngawi",
    customerName : "rusdi",
    salary : 69
  }
];

export default function AvailableOrder() {
  const [orders, setOrders] = useState<AvailableOrderInterface[]>(dummyData);

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
          Pesanan yang tersedia
        </Heading>
        {orders.map(order => (
          <AvailableOrderCard order={order}/>
        ))}
      </Stack>
    </Box>
  );
}
