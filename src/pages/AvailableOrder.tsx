import { 
  Box, 
  Heading,
  Stack,
} from '@chakra-ui/react'
import OrderInterface from '../interfaces/OrderInterface';
import { useEffect, useState } from 'react'
import AvailableOrderCard from '../components/AvailableOrderCard';

// TODO : fetch data from SOAP
const dummyData : OrderInterface[] = [
  {
    alamat : "jl. imam bonjol no.69",
    nama_penerima : "ukin",
    biaya_pengiriman : 100
  },
  {
    alamat : "bullet",
    nama_penerima : "ishraul",
    biaya_pengiriman : 1111
  },
  {
    alamat : "jl.ngawi",
    nama_penerima : "rusdi",
    biaya_pengiriman : 69
  },
  {
    alamat : "jl.ngawi",
    nama_penerima : "rusdi",
    biaya_pengiriman : 69
  },
  {
    alamat : "jl.ngawi",
    nama_penerima : "rusdi",
    biaya_pengiriman : 69
  },
  {
    alamat : "jl.ngawi",
    nama_penerima : "rusdi",
    biaya_pengiriman : 69
  }
];

export default function AvailableOrder() {
  const [orders, setOrders] = useState<OrderInterface[]>(dummyData);

  useEffect(() => {
    
  }, []);

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
