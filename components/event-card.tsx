import {
  AbsoluteCenter,
  Badge,
  Box,
  DarkMode,
  Heading,
  HStack,
  Icon,
  LinkBox,
  LinkOverlay,
  Stack,
  Text,
  useToken,
} from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import { SVGProps } from 'react';
import { EventIcon } from './nav-icons'

type EventCardProps = {
  data: any;
};

export default function EventCard(props: EventCardProps) {
  const { data: event } = props;

  return (
    <LinkBox
      display="flex"
      data-group
      gap="2rem"
      flexDirection={{ base: 'column', md: 'row' }}
      _hover={{ bg: 'rgba(138, 180, 248, 0.1)' }}
      rounded="2xl"
      width={{ md: 'calc(100% + 2rem)' }}
      marginLeft={{ md: '-2rem' }}
      padding={{md: "2rem"}}
      paddingBottom="2rem"
      transition="background 0.2s ease-in-out"
    >
      <Box>
        <EventCoverImage src={event.image} alt={event.title} />
      </Box>

      <Stack spacing="4" marginTop="2">
        <Heading as="h3" size="lg">
          <Link passHref href={event.url}>
            <LinkOverlay isExternal>{event.title}</LinkOverlay>
          </Link>
        </Heading>

        <Text maxWidth={{ md: '37.5rem' }}>{event.description}</Text>

        <HStack spacing="10">
          <Text casing="uppercase" fontWeight="bold" fontSize="sm" letterSpacing="wider">
            <Box as="span" color="sage.base" marginRight="2">
              I fokus:
            </Box>
            {event.product}
          </Text>
          <DarkMode>
            <Badge color="sage.base" colorScheme="orange">
              {event.type}
            </Badge>
          </DarkMode>
        </HStack>
      </Stack>
    </LinkBox>
  );
}

type EventCoverImageProps = {
  src: string;
  alt: string;
};

function EventCoverImage(props: EventCoverImageProps) {
  const { src, alt } = props;
  return (
    <Box position="relative">
      <Box position="relative" rounded="lg" overflow="hidden" width="18.75rem" height="10.5rem">
        <Image alt={alt} src={src} objectFit="cover" layout="fill" />
      </Box>
      <AbsoluteCenter display="none" _groupHover={{ display: 'block' }}>
        <Icon as={EventIcon} aria-hidden fontSize="6xl" />
      </AbsoluteCenter>
    </Box>
  );
}
