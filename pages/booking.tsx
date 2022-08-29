import type { NextPage } from 'next'
import React, { useState } from 'react';
import Container from '../components/container'
import BookingForm from '../components/booking-form'
import { 
    Flex, 
    Heading,  
    Box, 
} from '@chakra-ui/react'


const Booking: NextPage = () => {
  return (
    <Container hsize={.3}>
        <Box className="section" paddingBlock="0">
            <Flex justifyContent="center" alignItems="center" minHeight="calc(30vh)" backgroundImage="/static/images/overview.webp" backgroundAttachment="fixed" backgroundPosition="center" backgroundRepeat="no-repeat" backgroundSize="cover" >
                <Flex padding={{ base: '1rem'}}>
                    <Heading 
                        as={"h1"} 
                        lineHeight="1"
                        fontSize={{ base: '3.125rem', md: '3rem', lg: '4.75rem' }}
                        letterSpacing="tight"
                        display="flex"
                        flexDirection="column"
                        gap="10px"
                        marginBottom="2rem"
                        fontWeight="600"
                        paddingTop="10vh"
                    >
                        BOKNING
                    </Heading>
                </Flex>
            </Flex>
        </Box>
        
        <Flex justifyContent="center" gap="5">
            <BookingForm />
        </Flex>
        
    </Container>
  );
}

export default Booking