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
import PickedOrderInterface from '../interfaces/PickedOrderInterface';

type paramInterface = {order : PickedOrderInterface};

export default function PickedOrderCard({order} : paramInterface) {
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
          <LinkOverlay href="/PickedOrderDetail">
            {order.address}
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
              {order.customerName}
            </Text>
          </Box>
          <Box>
            <Text fontSize={"lg"} fontWeight={"bold"}>
              Ongkos Kirim
            </Text>
            <Text>
              {order.salary}
            </Text>
          </Box>
          <Box>
            <Text fontSize={"lg"} fontWeight={"bold"}>
              Keterangan
            </Text>
            <Text>
              {order.description}
            </Text>
          </Box>
        </Stack>
      </CardBody>
    </LinkBox>
  </Card>
  );
}
  