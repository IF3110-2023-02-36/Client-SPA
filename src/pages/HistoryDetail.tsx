import { 
  Box, 
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
import { useState } from 'react'
import HistoryDetailInterface from '../interfaces/HistoryDetailInterface';
  
// TODO : fetch data from SOAP
const dummyData : HistoryDetailInterface = {
  address : "jl.ngawi",
  customerName : "rusdi",
  salary : 69,
  rating : 0,
  orderDetails : [
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
}

export default function HistoryDetail() {
  const [history, setHistory] = useState<HistoryDetailInterface>(dummyData);
  // TODO : implement pick history functionality

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
          {history.address}
        </Heading>
        
        <Stack divider={<StackDivider/>} spacing={2}>
          <Box>
            <Text fontSize={"lg"} fontWeight={"bold"}>
              Nama Pemesan
            </Text>
            <Text>
              {history.customerName}
            </Text>
          </Box>
          <Box>
            <Text fontSize={"lg"} fontWeight={"bold"}>
              Ongkos Kirim
            </Text>
            <Text>
              {history.salary}
            </Text>
          </Box>
          <Box>
            <Text fontSize={"lg"} fontWeight={"bold"}>
              Rating
            </Text>
            <Text>
              {history.rating === 0 ? "Belum di rating" : history.rating}
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
                {history.orderDetails.map((detail) => (
                  <Tr>
                    <Td>{detail.nama_produk}</Td>
                    <Td>{detail.quantity}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </Stack>
      </Stack>
    </Box>
  );
}
  