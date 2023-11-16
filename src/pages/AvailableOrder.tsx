import { 
  Box, 
  Heading,
  Stack,
} from '@chakra-ui/react'
import OrderInterface from '../interfaces/OrderInterface';
import { useEffect, useState } from 'react'
import AvailableOrderCard from '../components/AvailableOrderCard';
import { getAvailableOrder } from '../utils/Order';

export default function AvailableOrder() {
  const [orders, setOrders] = useState<OrderInterface[]>([]);

  useEffect(() => {
    const response = getAvailableOrder();
    response.then((availableOrder) => {
      console.log(availableOrder.data);
      setOrders(availableOrder.data);
    });
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
