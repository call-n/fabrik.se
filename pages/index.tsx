import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Flex, Heading, Text, Box, Button, Icon } from '@chakra-ui/react'
import Container from '../components/container'
import { BookingIcon, MenuIcon } from '../components/nav-icons'; 
import MenuItemsSmall from '../components/menu-items-small'
import ViewMore from '../components/view-more';
import EventCard from '../components/event-card';

const Home: NextPage = () => {
  return (
    <Container hsize={1}>
      <Box className="section" paddingBlock="0">
        <Flex justifyContent="center" alignItems="center" minHeight="calc(100vh)" backgroundImage="/static/images/overview.webp" backgroundAttachment="fixed" backgroundPosition="center" backgroundRepeat="no-repeat" backgroundSize="cover" >
          <Flex padding={{ base: '1rem'}}>
            <Image src="/static/images/flogotagline.webp" width="400" height="300" alt="Fabrik.se beigh logo" />
          </Flex>
        </Flex>
      </Box>


      <Box position="absolute" left="0" top="calc(100vh)" width={{ base: '0rem', md: '3rem', lg: '6.25rem' }} paddingLeft="clamp(1.375rem, 1.2rem + 0.89vw, 2rem)" display={{base: "none", md: "flex", lg: "flex"}} height="calc(100% - 100vh)" zIndex="15">
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
          <Flex position="relative" display={{ base: 'none', md: 'flex'}}>
            <Box position="absolute" width="1000px" top="0" zIndex="5" right="0" borderBottom="1px solid">
              <Image src="/static/images/overview.webp" width="1000" height="800" alt="Fabrik.se beigh logo" />
            </Box>
          </Flex>
          <Flex flexDirection="column" maxWidth={{ md: '27.5rem' }} flex="1" marginLeft={{ base: '0rem', md: '3rem', lg: '6.25rem' }}>
            <Heading
              lineHeight="1"
              fontSize={{ base: '3.125rem', md: '3rem', lg: '4.25rem' }}
              letterSpacing="tight"
              display="flex"
              flexDirection="column"
              gap="10px"
              marginBottom="2rem"
              fontWeight="600"
              position="relative" 
              zIndex="10"
            >
              Våran Meny
            </Heading>
            
            <Flex flexDirection="column" backgroundColor="#b5986d" padding="2rem" borderRadius="10px" position="relative" zIndex="10" alignItems="center">
              <Heading marginBottom="2rem" textAlign="center" fontStyle="italic">Vardagsrum</Heading>
              
              <MenuItemsSmall product={'Nocarellaoliver'} price={50} />
              <MenuItemsSmall product={'Husets marinerade oliver'} price={35} />
              <MenuItemsSmall product={'Heta nötter'} price={35} />
              <MenuItemsSmall product={'Chips'} price={25} />
              <MenuItemsSmall product={'Bouqerones'} price={75} />
              <MenuItemsSmall product={'Veckans dipp och pickles'} price={50} />
              <MenuItemsSmall product={'Ölkorv från Blåkulla'} price={55} />
              <MenuItemsSmall product={'Ostbricka'} price={195} />
              <MenuItemsSmall product={'Charkbricka för 2'} price={185} />
            </Flex>
            <Link href={'/meny'}>
              <Button
                minW="10.8rem"
                aria-label="Till Menyn!"
                fontWeight="bold"
                letterSpacing="wide"
                display="inline-flex"
                alignItems="center"
                justifyContent="center"
                textTransform="uppercase"
                color="main.coretext"
                paddingX="10"
                paddingY="5"
                rounded="lg"
                transition="background 0.2s ease-in-out"
                bg="none"
                border="1px solid"
                _hover={{ bg: 'main.green' }}
                _active={{ bg: 'sage.darker' }}
                marginTop="2rem"
              >
                Till hela menyn 
                <Icon as={MenuIcon} fontSize="lg" />
              </Button>
            </Link>
          </Flex>
        </Box>
      </Box>


      <Box className="section">
        <Box className="wrapper">
          <Flex borderRadius="10px" border="1px solid" flexDirection="column" padding="2rem" alignItems="center" marginLeft={{ base: '0rem', md: '3rem', lg: '6.25rem' }}>
            <Heading
            lineHeight="1"
            fontSize={{ base: '3.125rem', md: '3rem', lg: '3.75rem' }}
            letterSpacing="tight"
            display="flex"
            flexDirection="column"
            gap="10px"
            marginBottom="2rem"
            fontWeight="600"
            position="relative" 
            zIndex="10"
            >
              Sugen på att boka ett bord?
            </Heading>
            <Link href={'/meny'}>
              <Button
                minW="10.8rem"
                maxW="30rem"
                aria-label="Till Bokning!"
                fontWeight="bold"
                letterSpacing="wide"
                display="inline-flex"
                alignItems="center"
                justifyContent="center"
                textTransform="uppercase"
                color="main.coretext"
                bg="main.green"
                paddingX="10"
                paddingY="5"
                rounded="lg"
                transition="background 0.2s ease-in-out"
                border="1px solid"
                _hover={{ bg: '#156256' }}
                _active={{ bg: '#156256' }}
                marginTop="1rem"
              >
                Boka bord 
                <Icon as={BookingIcon} fontSize="lg" />
              </Button>
            </Link>
          </Flex>
        </Box>
      </Box>

      <Box as="section" className="section">
        <Box className="wrapper">
          <Box marginLeft={{ base: '0rem', md: '3rem', lg: '6.25rem' }}>
            <Heading size="3xl" letterSpacing="tight" position="relative">
              Våra senaste Events
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

            <Link href="/events" passHref>
              <ViewMore>Ta ett titt på alla events!</ViewMore>
            </Link>
          </Box>
        </Box>
      </Box>
    </Container>
  )
}

export default Home
