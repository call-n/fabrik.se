import { Box, Heading, HStack, LinkBox, LinkOverlay, Text } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRightIcon } from './social-icons';

type MenuCardProps = {
    data: any;
  };
  
export default function MenuCard(props: MenuCardProps) {
    const { data: menuItem } = props;

    return (
        <LinkBox 
            display="flex"
            flexDirection="column"  
            alignItems="flex-start"
            position="relative"
            padding="1.25rem"
            border="1px solid"
            borderColor="main.tan"
            borderRadius="10px"
            maxWidth="37rem"
            textDecoration="none"
            wordBreak="break-word"
            _hover={{ bg: '#03203c', borderColor: 'main.coretext' }}
        >
            <Box overflow="hidden" position="relative" zIndex="1">
            <Image 
                src={menuItem.image} 
                alt={menuItem.title} 
                width="570" 
                height="330" 
                objectFit="cover" 
                style={{aspectRatio: '5/3', borderRadius: '3px', height: 'auto', maxWidth: '100%'}} />
            </Box>

            <Heading size="md" fontWeight="semibold" marginY="4">
                {menuItem.title}
            </Heading>

            <Link href={`/meny${menuItem.slug}`} passHref >
                <LinkOverlay>
                    <HStack display="inline-flex" border="1px solid" padding=".5rem" borderRadius="10px" >
                        <Text fontWeight="bold" color="main.coretext">
                            Titta mer
                        </Text>
                        <Box transform="auto" transition="transform 0.2s" _groupHover={{ translateX: '3px' }}>
                            <ArrowRightIcon color="main.tan" />
                        </Box>
                    </HStack>
                </LinkOverlay>
            </Link>
        </LinkBox>
  );
}
