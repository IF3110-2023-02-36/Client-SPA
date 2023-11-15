import { 
  Box, 
  Card, 
  CardBody, 
  CardHeader, 
  Heading,
  LinkBox,
  LinkOverlay,
  Stack,
  StackDivider,
  Text
} from '@chakra-ui/react'
import HistoryInterface from '../interfaces/HistoryInterface';

type paramInterface = {history : HistoryInterface};

export default function HistoryCard({history} : paramInterface) {
  return (
  <Card
    width={"80%"}
    marginY={3}
    marginX={10}
    borderColor={"black"}
    borderRadius={20}
    >
    <LinkBox>
      <CardHeader>
        <Heading>
          <LinkOverlay href="/HistoryDetail">
            {history.address}
          </LinkOverlay>
        </Heading>
      </CardHeader>
      <CardBody>
        <Stack divider={<StackDivider/>} spacing={1}>
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
              {/* TODO : icon bintang */}
              {history.rating === 0 ? "Belum di rating" : history.rating}
            </Text>
          </Box>
        </Stack>
      </CardBody>
    </LinkBox>
  </Card>
  );
}
  