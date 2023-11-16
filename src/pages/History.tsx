import { 
  Box, 
  Heading,
  Stack,
} from '@chakra-ui/react'
import HistoryInterface from '../interfaces/HistoryInterface';
import { useEffect, useState } from 'react'
import HistoryCard from '../components/HistoryCard';
import { getUser } from '../utils/LocalStorage';
import { getHistory } from '../utils/History';
import { getUserDetail } from '../utils/Profile';


export default function History() {
  const username = getUser();
  const [histories, setHistories] = useState<HistoryInterface[]>([]);

  useEffect(() => {
    const response = getHistory(username ? username : "");
    response.then((history) => {
      setHistories(history);
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
          History Pengantaran
        </Heading>
        {histories.map(history => (
          <HistoryCard history={history}/>
        ))}
      </Stack>
    </Box>
  );
}
  