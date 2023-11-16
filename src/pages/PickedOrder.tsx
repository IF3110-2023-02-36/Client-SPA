import { 
  Box, 
  Heading,
  Stack,
} from '@chakra-ui/react'
import OrderInterface from '../interfaces/OrderInterface';
import { useState } from 'react'
import PickedOrderCard from '../components/PickedOrderCard';

// TODO : fetch data from SOAP
const dummyData : OrderInterface[] = [
  {
    alamat : "jl. imam bonjol no.69",
    nama_penerima : "ukin",
    biaya_pengiriman : 100,
    keterangan : "dimas lagi main sama mas ukin"
  },
  {
    alamat : "bullet",
    nama_penerima : "ishraul",
    biaya_pengiriman : 1111,
    keterangan : "aku butuh peluru"
  },
  {
    alamat : "jl.ngawi",
    nama_penerima : "rusdi",
    biaya_pengiriman : 69,
    keterangan : "aku akan datang"
  },
  {
    alamat : "jl.ngawi",
    nama_penerima : "rusdi",
    biaya_pengiriman : 69,
    keterangan : "aku akan datang"
  },
  {
    alamat : "jl.ngawi",
    nama_penerima : "rusdi",
    biaya_pengiriman : 69,
    keterangan : "aku akan datang"
  },
  {
    alamat : "jl.ngawi",
    nama_penerima : "rusdi",
    biaya_pengiriman : 69,
    keterangan : "aku akan datang"
  }
];

export default function PickedOrder() {
  const [orders, setOrders] = useState<OrderInterface[]>(dummyData);

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
  