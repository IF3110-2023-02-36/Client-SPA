import { 
  Box, 
  Heading,
  Stack,
} from '@chakra-ui/react'
import HistoryInterface from '../interfaces/HistoryInterface';
import { useState } from 'react'
import HistoryCard from '../components/HistoryCard';

// TODO : fetch data from SOAP
const dummyData : HistoryInterface[] = [
  {
    address : "jl. imam bonjol no.69",
    customerName : "ukin",
    salary : 100,
    rating : 0
  },
  {
    address : "bullet",
    customerName : "ishraul",
    salary : 1111,
    rating : 2
  },
  {
    address : "jl.ngawi",
    customerName : "rusdi",
    salary : 69,
    rating : 3
  },
  {
    address : "jl.ngawi",
    customerName : "rusdi",
    salary : 69,
    rating : 5
  },
  {
    address : "jl.ngawi",
    customerName : "rusdi",
    salary : 69,
    rating : 5
  },
  {
    address : "jl.ngawi",
    customerName : "rusdi",
    salary : 69,
    rating : 5
  }
];

export default function History() {
  const [histories, setHistories] = useState<HistoryInterface[]>(dummyData);

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
        {histories.map(history => (
          <HistoryCard history={history}/>
        ))}
      </Stack>
    </Box>
  );
}
  