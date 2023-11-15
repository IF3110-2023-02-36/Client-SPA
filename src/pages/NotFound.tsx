import { Container, Text } from '@chakra-ui/react'

export default function NotFound() {
  return (
    <Container
      sx={{ width: '100vw', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <Container>
        <Text variant="h1" textAlign={'center'}>
          404 Not Found
        </Text>
      </Container>
    </Container>
  )
}
  
  