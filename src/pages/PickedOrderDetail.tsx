import { 
  Box, 
  Button, 
  FormControl, 
  FormLabel, 
  Heading,
  Input,
  Stack,
  StackDivider,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import OrderDetail from '../interfaces/OrderDetail';
import OrderInterface from '../interfaces/OrderInterface';
import { finishOrder, getOrderById, getOrderDetails, updateOrder } from '../utils/Order';
import { useNavigate, useParams } from 'react-router-dom';
import { getUser } from '../utils/LocalStorage';


export default function PickedOrderDetail() {
  const user = getUser();
  const { id } = useParams();
  const orderId = parseInt(id ? id : "0");
  const [order, setOrder] = useState<OrderInterface>();
  const [orderDetails, setOrderDetails] = useState<OrderDetail[]>([]);
  const [pickupStatus, setPickupStatus] = useState(false);
  const [newDescription, setNewDescription] = useState("");
  const navigate = useNavigate();

  function changeDescription() {
    if(!user.username) {
      alert("Perlu log in");
      return;
    }
    
    updateOrder(orderId, user.username, order?.status ? order.status : "pickup", newDescription);
    setOrder({...order, keterangan : newDescription});
  }

  function changeTransit() {
    if(!user.username) {
      alert("Perlu log in");
      return;
    }
    
    updateOrder(orderId, user.username, "transit", order?.keterangan ? order.keterangan : "");
    setOrder({...order, status : "transit"});
    setPickupStatus(false);
  }

  function finishingOrder() {
    if(!user.username) {
      alert("Perlu log in");
      return;
    }

    finishOrder(orderId, user.username);
    navigate("/History");
  }

  useEffect(() => {
    const orderResponse = getOrderById(orderId);
    const detailResponse = getOrderDetails(orderId);

    orderResponse.then((response) => {
      setOrder(response.data);
      setPickupStatus(response.data?.status === "pickup");
      console.log("order", response.data);
    });

    detailResponse.then((response) => {
      setOrderDetails(response.data);
      console.log("detail", response.data);
    });

  }, []);
  
  return (
    <Box
      minH={"95vh"}
      py={10}
      px={50}
      bg={"red.800"}>
      <Stack
        align={'center'}
        bg={"white"}
        py={10}
        >
        <Heading p={5}>
          {order?.alamat}
        </Heading>
        
        <Stack divider={<StackDivider/>} spacing={2}>
          <Box>
            <Text fontSize={"lg"} fontWeight={"bold"}>
              Nama Pemesan
            </Text>
            <Text>
              {order?.nama_penerima}
            </Text>
          </Box>
          <Box>
            <Text fontSize={"lg"} fontWeight={"bold"}>
              Ongkos Kirim
            </Text>
            <Text>
              {order?.biaya_pengiriman}
            </Text>
          </Box>
          <Box>
            <Text fontSize={"lg"} fontWeight={"bold"} align={"center"}>
              Detail Pesanan
            </Text>
          </Box>
          <TableContainer>
            <Table variant='simple'>
              <Thead>
                <Tr>
                  <Th>Nama Produk</Th>
                  <Th>Jumlah</Th>
                </Tr>
              </Thead>
              <Tbody>
                {orderDetails.map((detail) => (
                  <Tr>
                    <Td>{detail?.nama_product}</Td>
                    <Td>{detail.quantity}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        <Box>
          <Text fontSize={"lg"} fontWeight={"bold"}>
            Status
          </Text>
          <Text>
            {order?.status}
          </Text>
        </Box>
        <Stack spacing={4}>
          <Box>
            <Text fontSize={"lg"} fontWeight={"bold"}>
              Keterangan
            </Text>
            <Text>
              {order?.keterangan}
            </Text>
          </Box>
          <FormControl id="new-description">
              <FormLabel>Update Keterangan</FormLabel>
              <Input name="new-description" type="text" 
              value={newDescription}
              onChange={(e) => setNewDescription(e.target.value)}
              borderColor={"black"}
              />
          </FormControl>
          <Button
            bg={'blue.400'}
            color={'white'}
            _hover={{
            bg: 'blue.500',
            }}
            onClick={changeDescription}
            >
            Ubah Keterangan
          </Button>
          {pickupStatus
          ? 
          <Button
            bg={'blue.400'}
            color={'white'}
            _hover={{
            bg: 'blue.500',
            }}
            onClick={changeTransit}
            >
            Transit Pesanan
          </Button>
          :
          <>
          </>}
          <Button
            display={{ base: 'none', md: 'inline-flex' }}
            fontSize={'sm'}
            fontWeight={600}
            bg={"pink.300"}
            color={'black'}
            _hover={{
              bg: 'blue.300',
            }}
            onClick={finishingOrder}
            >
            Selesaikan Pengantaran
          </Button>
        </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}
    