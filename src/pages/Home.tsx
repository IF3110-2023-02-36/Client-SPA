import { useNavigate } from 'react-router-dom';
import { Box, Heading, Text, Button, useBreakpointValue } from '@chakra-ui/react';
import Navbar from '../components/Navbar';

export default function Home() {
    const headingSize = useBreakpointValue({ base: 'xl', md: '2xl' });
    const textSize = useBreakpointValue({ base: 'md', md: 'xl' });
    const buttonSize = useBreakpointValue({ base: 'md', md: 'lg' });
    const navigate = useNavigate();

    const navigateToAvailableOrders = () => {
        navigate('/AvailableOrder');
    }

    return (
        <>
            <Navbar />
            <Box w="100%" h="100vh" px={{ base: 4, md: 0 }} display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                <Heading as="h1" size={headingSize} mb={6}>
                    Welcome to the Courier App!
                </Heading>
                <Text fontSize={textSize} mb={6}>
                    Manage your orders all in one place
                </Text>
                <Button colorScheme="teal" size={buttonSize} onClick={navigateToAvailableOrders} aria-label="Navigate to available orders">
                    View available orders
                </Button>
            </Box>
        </>
    );
}