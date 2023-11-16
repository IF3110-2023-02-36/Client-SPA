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
import { useState } from 'react'
import OrderDetail from '../interfaces/OrderDetail';
import OrderInterface from '../interfaces/OrderInterface';
  
const orderDummy : OrderInterface = {
  alamat : "jl.ngawi",
  nama_penerima : "rusdi",
  biaya_pengiriman : 69,
  keterangan : "aku akan datang",
}

const detailDummy : OrderDetail[] = [
  {
    nama_produk : "pisau cukur",
    quantity : 69
  },
  {
    nama_produk : "ivan gunawan",
    quantity : 420
  },
  {
    nama_produk : "pisau cukur 2",
    quantity : 692
  },
  {
    nama_produk : "ivan gunawan 2",
    quantity : 4202
  },
]

export default function PickedOrderDetail() {
  const [order, setOrder] = useState<OrderInterface>(orderDummy);
  const [orderDetails, setOrderDetails] = useState<OrderDetail[]>(detailDummy);
  const [newDescription, setNewDescription] = useState("");
  // TODO : implement pick order functionality

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
          {order.alamat}
        </Heading>
        
        <Stack divider={<StackDivider/>} spacing={2}>
          <Box>
            <Text fontSize={"lg"} fontWeight={"bold"}>
              Nama Pemesan
            </Text>
            <Text>
              {order.nama_penerima}
            </Text>
          </Box>
          <Box>
            <Text fontSize={"lg"} fontWeight={"bold"}>
              Ongkos Kirim
            </Text>
            <Text>
              {order.biaya_pengiriman}
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
                    <Td>{detail.nama_produk}</Td>
                    <Td>{detail.quantity}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
          
        <Stack spacing={4}>
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
              type="submit">
              Ubah Keterangan
          </Button>
          <Button
              bg={'blue.400'}
              color={'white'}
              _hover={{
              bg: 'blue.500',
              }}
              >
              Transit Pesanan
          </Button>
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
            Selesaikan Pengantaran
          </Button>
        </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}
    