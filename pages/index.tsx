import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Flex, Heading, Text, Box, Button, Icon } from '@chakra-ui/react'
import Container from '../components/container'
import { BookingIcon } from '../components/nav-icons'; 

const Home: NextPage = () => {
  return (
    <Container>
      <Box className="section" paddingBlock="0">
        <Flex justifyContent="center" alignItems="center" minHeight="calc(100vh)" backgroundImage="/static/images/background.webp" backgroundAttachment="fixed" backgroundPosition="center" backgroundRepeat="no-repeat" backgroundSize="cover" >
          <Flex padding={{ base: '1rem'}}>
            <Image src="/static/images/flogotagline.webp" width="400" height="300" alt="Fabrik.se beigh logo" />
          </Flex>
        </Flex>
      </Box>
      <Box className="section">
        <Box className="wrapper">
          <Heading
            lineHeight="1"
            fontSize={{ base: '3.125rem', md: '3rem', lg: '4.25rem' }}
            letterSpacing="tight"
            display="flex"
            flexDirection="column"
            gap="10px"
            marginBottom="2rem"
          >
            Mat, dryck och kärlek i hjärtat av Osby.
          </Heading>
          <Text fontSize={{ base: 'lg', md: '2xl' }} maxWidth="70ch" marginBottom="2rem">
            En dröm går i uppfyllelse. Ett nytt ställe för mat och dryck – Fabrik – ska öppna i lokalerna där Oredssons butik tidigare låg.
            De fyras gäng bakom konceptet har tillsammans en gedigen erfarenhet och kunskap.
          </Text>
          <Link href={'/boka-bord'}>
            <Button
              minW="10.8rem"
              aria-label="Till Bokning!"
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
              bg="main.yellow"
              _hover={{ bg: 'sage.dark' }}
              _active={{ bg: 'sage.darker' }}
            >
              Till Bokning 
              <Icon as={BookingIcon} fontSize="lg" />
            </Button>
          </Link>
        </Box>
      </Box>
    </Container>
  )
}

export default Home
