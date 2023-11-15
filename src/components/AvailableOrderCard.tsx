import { 
  Box, 
  Card, 
  CardBody, 
  CardHeader, 
  Heading,
  Stack,
  StackDivider,
  Text
} from '@chakra-ui/react'
import AvailableOrderInterface from '../interfaces/AvailableOrderInterface';

type paramInterface = {order : AvailableOrderInterface};

export default function AvailableOrderCard({order} : paramInterface) {
  return (
  <Card
    width={"80%"}
    marginY={3}
    marginX={10}
    borderColor={"black"}
    borderRadius={20}
    >
    <CardHeader>
      <Heading>
        {order.address}
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
      </Stack>
    </CardBody>
  </Card>
  );
}
