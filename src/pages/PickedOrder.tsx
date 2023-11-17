import { 
  Box, 
  Heading,
  Stack,
} from '@chakra-ui/react'
import OrderInterface from '../interfaces/OrderInterface';
import { useEffect, useState } from 'react'
import PickedOrderCard from '../components/PickedOrderCard';
import { getOrderByCourier } from '../utils/Order';
import { getUser } from '../utils/LocalStorage';
import { getUserDetail } from '../utils/Profile';


export default function PickedOrder() {
  const user = getUser();
  const [orders, setOrders] = useState<OrderInterface[]>([]);

  useEffect(() => {
    getUserDetail(user.username ? user.username : "").then(
      (userDetail) => {
        const response = getOrderByCourier(userDetail.data.id ? userDetail.data.id : 0);
        response.then((order) => {
          console.log(order.data);
          setOrders(order.data);
        });
      }
    );
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
          Pesanan yang kamu ambil
        </Heading>
        {orders.map(order => (
          <PickedOrderCard order={order}/>
        ))}
      </Stack>
    </Box>
  );
}
  