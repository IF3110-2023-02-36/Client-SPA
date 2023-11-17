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
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import HistoryInterface from '../interfaces/HistoryInterface';
import { getHistoryById, getHistoryDetails } from '../utils/History';
import HistoryDetailInterface from '../interfaces/HistoryDetailInterface';
  

export default function HistoryDetail() {
  const { id } = useParams();
  const historyId= parseInt(id ? id : "0");
  const [history, setHistory] = useState<HistoryInterface>();
  const [historyDetails, setHistoryDetails] = useState<HistoryDetailInterface[]>([]);

  useEffect(() => {
    const historyResponse = getHistoryById(historyId);
    const detailResponse = getHistoryDetails(historyId);

    historyResponse.then((response) => {
      setHistory(response);
      console.log("history", response);
    });

    detailResponse.then((response) => {
      setHistoryDetails(response);
      console.log("detail", response);
    });
  }, [historyId]);

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
          {history?.alamat_tujuan}
        </Heading>
        
        <Stack divider={<StackDivider/>} spacing={2}>
          <Box>
            <Text fontSize={"lg"} fontWeight={"bold"}>
              Nama Pemesan
            </Text>
            <Text>
              {history?.nama_penerima}
            </Text>
          </Box>
          <Box>
            <Text fontSize={"lg"} fontWeight={"bold"}>
              Ongkos Kirim
            </Text>
            <Text>
              {history?.biaya_pengiriman}
            </Text>
          </Box>
          <Box>
            <Text fontSize={"lg"} fontWeight={"bold"}>
              Rating
            </Text>
            <Text>
              {history?.rating === 0 ? "Belum di rating" : history?.rating}
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
                {historyDetails?.map((detail) => (
                  <Tr>
                    <Td>{detail.product_name}</Td>
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
  