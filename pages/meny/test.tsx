import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Flex, Heading, Text, Box, Button, Icon } from '@chakra-ui/react'
import Container from '../../components/container'
import { BookingIcon, MenuIcon } from '../../components/nav-icons'
import MenuCard from '../../components/menu-card'

const Test: NextPage = () => {
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
                Test
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
            <Flex flexDirection="column" flex="1" paddingLeft={{ base: '0rem', md: '3rem', lg: '6.25rem' }} width="100%">
                <Heading
                    lineHeight="1"
                    fontSize={{ base: '3.125rem', md: '3rem', lg: '3.75rem' }}
                    letterSpacing="1px"
                    display="flex"
                    flexDirection="column"
                    gap="10px"
                    marginBottom="2rem"
                    fontWeight="600"
                    width="100%"
                    color="main.tan"
                    paddingBottom="1rem"
                    textDecoration="underline"
                >
                    Test
                </Heading>
                {[
                    {product: 'Sable fish with saffron', price: 10, desc: 'baked with basil, saffron, ölefls, sdasdas, asdasd, asdasd, asdasd, and asdasdasd'},
                    {product: 'lol1', price: 100, desc: 'baked with basil, saffron, ölefls, sdasdas, asdasd, asdasd, asdasd, and asdasdasd'},
                    {product: 'lol3', price: 112, desc: 'baked with basil, saffron, ölefls, sdasdas, asdasd, asdasd, asdasd, and asdasdasd'},
                    {product: 'lol5', price: 12, desc: 'baked with basil, saffron, ölefls, sdasdas, asdasd, asdasd, asdasd, and asdasdasd'},
                    {product: 'Sable fish with saffron1', price: 10, desc: 'baked with basil, saffron, ölefls, sdasdas, asdasd, asdasd, asdasd, and asdasdasd'},
                    {product: 'lol1123', price: 100, desc: 'baked with basil, saffron, ölefls, sdasdas, asdasd, asdasd, asdasd, and asdasdasd'},
                    {product: 'lol31', price: 112, desc: 'baked with basil, saffron, ölefls, sdasdas, asdasd, asdasd, asdasd, and asdasdasd'},
                    {product: 'lol512312', price: 12, desc: 'baked with basil, saffron, ölefls, sdasdas, asdasd, asdasd, asdasd, and asdasdasd'},
                ].map((item) => (
                    <Box key={item.product} marginBottom="3rem">
                        <Flex justifyContent="space-between" borderBottom="1px solid" paddingBottom="1rem" marginBottom="1rem" width="100%" borderColor="main.tan">
                            <Box fontWeight="600" fontStyle="italic" fontSize="30px" maxWidth={{base: "16rem", md:"30rem"}}>
                                {item.product}
                            </Box>
                            <Box color="main.tan">
                                {item.price} kr
                            </Box>
                        </Flex>
                        <Box>{item.desc}</Box>
                    </Box>
                ))}
            </Flex>
        </Box>
    </Box>
    </Container>
  )
}

export default Test
