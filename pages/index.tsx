import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Flex, Heading, Text, Box, Button, Icon } from '@chakra-ui/react'
import Container from '../components/container'
import { BookingIcon, GiftCardIcon, MenuIcon } from '../components/nav-icons'; 
import MenuItemsSmall from '../components/menu-items-small'
import ViewMore from '../components/view-more';
import EventCard from '../components/event-card';

const Home: NextPage = () => {
  return (
    <Container>
      <Box className="section" paddingBlock="0">
        <Flex justifyContent="center" alignItems="center" minHeight="calc(100vh)" backgroundImage="/static/images/overview.webp" backgroundAttachment="fixed" backgroundPosition="center" backgroundRepeat="no-repeat" backgroundSize="cover" >
          <Flex padding={{ base: '1rem'}} flexDirection="column">
            <Image src="/static/images/flogotagline.webp" width="400" height="300" alt="Fabrik.se beigh logo" />
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
                color="#092140"
                paddingX="10"
                paddingY="5"
                rounded="lg"
                transition="background 0.2s ease-in-out"
                bg="#ffdfc5"
                _hover={{ bg: 'rgb(157, 139, 124)' }}
                _active={{ bg: 'rgb(157, 139, 124)' }}
                marginTop="2rem"
              >
                Köp presentkort!
                <Icon as={GiftCardIcon} fontSize="lg" fill="#092140" />
              </Button>
            </Link>
          </Flex>
        </Flex>
      </Box>


      <Box position="absolute" left="0" top="calc(100vh)" width={{ base: '0rem', md: '3rem', lg: '6.25rem' }} paddingLeft="clamp(1.375rem, 1.2rem + 0.89vw, 2rem)" display={{base: "none", md: "flex", lg: "flex"}} height="calc(100% - 100vh)" zIndex="15">
        <Box borderLeft="1px solid" width="1rem" borderColor="main.tan"></Box>
        <Box borderLeft="1px solid" width="1rem" borderColor="main.tan"></Box>
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
              id="meny"
            >
              Våran Meny
            </Heading>
            
            <Flex flexDirection="column" backgroundColor="#f8f1eb" borderRadius="10px" position="relative" zIndex="10"  color="#687790" padding={{ base: '1rem', md: '2rem', lg: '2rem' }}>
              <Heading marginBottom="2rem">Vardagsrummet</Heading>
              
              <MenuItemsSmall product={'Nocarella-oliver'} desc="Stora, krispiga oliver från sicilien" price={50} />
              <MenuItemsSmall product={'Fabriks oliver'} desc="Marinerade med timjan, oregano & fänkålsfrön" price={35} />
              <MenuItemsSmall product={'Fabriks heta nötter'} desc="Paprika & chilirostade jordnötter" price={35} />
              <MenuItemsSmall product={'Chips från torres'} desc="Välj mellan tryffel och jamon" price={45} />
              <MenuItemsSmall product={'Boquerones'} desc="Spansk klassiker, serveras med Fabrik levain-bröd & citron" price={75} />
              <MenuItemsSmall product={'Saint marcellin'} desc="Rund, mjuk & gräddig färskost serveras med Fabriks levain-bröd & marmelad" price={120} />

              <Heading marginTop="1rem" marginBottom="1rem" paddingBottom="0.5rem" fontStyle="italic" fontSize="14px" borderBottom="1px solid">Serveras från 15.00 / 16.00</Heading>

              <MenuItemsSmall product={'Veckan dipp'} desc="Serveras med Fabriks levain-bröd" price={50} />
              <MenuItemsSmall product={'Ölkorv från blåkulla'} desc="Rökt och torkad hos Larssons Chark i Tollarp" price={55} />
              <MenuItemsSmall product={'Ostbricka'} desc="Serveras med fröknäcke & marmelad" price={145} />
              <MenuItemsSmall product={'Charkbricka'} desc="Serveras med Fabriks levian-bröd & säsongens tillbehör" price={135} />
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
                color="#092140"
                paddingX="10"
                paddingY="5"
                rounded="lg"
                transition="background 0.2s ease-in-out"
                bg="#ffdfc5"
                _hover={{ bg: 'rgb(157, 139, 124)' }}
                _active={{ bg: 'rgb(157, 139, 124)' }}
                marginTop="2rem"
              >
                Till hela menyn 
                <Icon as={MenuIcon} fontSize="lg" fill="#092140" />
              </Button>
            </Link>
          </Flex>
        </Box>
      </Box>

      <Box as="section" className="section">
        <Box className="wrapper">
          <Box marginLeft={{ base: '0rem', md: '3rem', lg: '6.25rem' }}>
            <Heading size="2xl" letterSpacing="tight" position="relative">
              Du kan hitta alla våra events på vår Instagram sida!
            </Heading>
            <Link href={'https://www.instagram.com/fabrikiosby/'}>
              <Button
                minW="10.8rem"
                aria-label="Till instgram!"
                fontWeight="bold"
                letterSpacing="wide"
                display="inline-flex"
                alignItems="center"
                justifyContent="center"
                textTransform="uppercase"
                color="#092140"
                paddingX="10"
                paddingY="5"
                rounded="lg"
                transition="background 0.2s ease-in-out"
                bg="#ffdfc5"
                _hover={{ bg: 'rgb(157, 139, 124)' }}
                _active={{ bg: 'rgb(157, 139, 124)' }}
                marginTop="2rem"
              >
                Om du är intresserad klick här!
              </Button>
            </Link>
          </Box>
        </Box>
      </Box>
    </Container>
  )
}

export default Home
