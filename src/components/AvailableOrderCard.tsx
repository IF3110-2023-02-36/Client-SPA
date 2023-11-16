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
import OrderInterface from '../interfaces/OrderInterface';

type paramInterface = {order : OrderInterface};

export default function AvailableOrderCard({order} : paramInterface) {
  const hrefLink = `/AvailableOrderDetail/${order.id}`;
  
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
          <LinkOverlay href={hrefLink}>
            {order.alamat}
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
        </Stack>
      </CardBody>
    </LinkBox>
  </Card>
  );
}
