import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Flex, Heading, Text, Box, Button, Icon } from '@chakra-ui/react'
import Container from '../../components/container'
import EventCard from '../../components/event-card'


const Meny: NextPage = () => {
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
                EVENTS
            </Heading>
            </Flex>
        </Flex>
    </Box>
    <Box position="absolute" left="0" top="calc(30vh)" width={{ base: '0rem', md: '3rem', lg: '6.25rem' }} paddingLeft="clamp(1.375rem, 1.2rem + 0.89vw, 2rem)" display={{base: "none", md: "flex", lg: "flex"}} height="calc(100% - 30vh)" zIndex="15">
        <Box borderLeft="1px solid" width="1rem" borderColor="main.tan" display={{base: "none", md: "none", lg: "flex"}}></Box>
        <Box borderLeft="1px solid" width="1rem" borderColor="main.tan" display={{base: "none", md: "none", lg: "flex"}}></Box>
        <Box borderLeft="1px solid" width="1rem" borderColor="main.tan"></Box>
        <Box borderLeft="1px solid" width="1rem" borderColor="main.tan"></Box>
        <Box borderLeft="1px solid" width="1rem" borderColor="main.tan"></Box>
        <Box position="absolute" right="-140" top="5">
            <Image src="/static/images/farbiklogo.webp" width="125" height="25px" alt="Fabrik i osby logo" />
        </Box>
    </Box>

    <Box className="section" paddingTop={{base: "2rem", md: "4rem", lg: "8rem"}}>
        <Box className="wrapper">
            <Box marginLeft={{ base: '0rem', md: '3rem', lg: '6.25rem' }}>
                <Heading size="3xl" letterSpacing="tight" position="relative">
                Våra Events
                </Heading>
                <Box marginY="10">
                <Flex direction="column" gap="6">
                    {[
                    {title: 'Ost till vin – lär dig älska ost', image: '/static/images/ost.jpg', url: '/events', description: 'Välkommen på ost och vinprovning med oss på Fabrik! På denna provning guidar vi dig igenom 10 ostar av alla dess slag.', product: 'Ost'},
                    {title: 'Rom provning – bättre än vad du tror!', image: '/static/images/rom.jpg', url: '/events', description: 'Välkommen på ost och vinprovning med oss på Fabrik! På denna provning guidar vi dig igenom 10 ostar av alla dess slag.', product: 'Rom'}
                    ].map((event) => (
                    <EventCard key={event.title} data={event} />
                    ))}
                </Flex>
                </Box>
            </Box>
        </Box>
    </Box>
    </Container>
  )
}

export default Meny
