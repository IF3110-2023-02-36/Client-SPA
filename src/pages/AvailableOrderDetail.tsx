import { 
  Box, 
  Button, 
  Heading,
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
import { useParams } from 'react-router-dom';
import { getOrderById, getOrderDetails } from '../utils/Order';


export default function AvailableOrderDetail() {
  const { id } = useParams();
  const orderId = parseInt(id ? id : "0");
  const [order, setOrder] = useState<OrderInterface>();
  const [orderDetails, setOrderDetails] = useState<OrderDetail[]>([]);

  useEffect(() => {
    const orderResponse = getOrderById(orderId);
    const detailResponse = getOrderDetails(orderId);

    orderResponse.then((response) => {
      setOrder(response.data);
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
                    <Td>{detail.nama_product}</Td>
                    <Td>{detail.quantity}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
          {/* TODO : implement pick order */}
          <Button
            display={{ base: 'none', md: 'inline-flex' }}
            fontSize={'sm'}
            fontWeight={600}
            bg={"pink.300"}
            color={'black'}
            _hover={{
              bg: 'blue.300',
            }}
            >
            Ambil Order
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}
  