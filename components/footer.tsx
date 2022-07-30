import { Box, Flex, GridItem, Heading, HStack, SimpleGrid, Text } from '@chakra-ui/react';
import Link from 'next/link';
import siteConfig from 'site.config';
import LinkItem from './link-item';
import { EmailIcon, GithubIcon, TwitterIcon } from './social-icons';

function FooterLink({ href, children }) {
  return (
    <Link href={href} passHref>
      <Box as="a">{children}</Box>
    </Link>
  );
}

export default function Footer() {
  return (
    <Box className="section" borderTop="1px solid" borderColor="maincolor.bordergray">
      <Box  className="wrapper">
        <SimpleGrid columns={{ base: 4, md: 12 }} spacing="16">
          <GridItem colSpan={6}>
            <Box>
              <Heading marginBottom="6" size="lg">
                Fabrik.se
              </Heading>
              <Text fontSize="lg" maxWidth="22rem">
                Mat, dryck och kärlek i hjärtat av Osby.
              </Text>
            </Box>

            <HStack marginTop="9" spacing={{ base: '8', md: '10' }}>
              <LinkItem href={siteConfig.profiles.email} icon={GithubIcon}>
                GitHub
              </LinkItem>
              <LinkItem href={siteConfig.profiles.instagram} icon={TwitterIcon}>
                Twitter
              </LinkItem>
              <LinkItem href={siteConfig.profiles.mobile} icon={EmailIcon}>
                Email
              </LinkItem>
            </HStack>
          </GridItem>

          <GridItem colSpan={6}>
            <Heading as="h2" marginBottom="6" size="lg">
              Links
            </Heading>
            <Flex direction="column" gap="4">
              <FooterLink href="/blog/setup-authentication-firebase">test</FooterLink>
            </Flex>
          </GridItem>
        </SimpleGrid>

        <Text marginTop="20">
          All rights reserved &copy; Fabrik.se {new Date().getFullYear()}
        </Text>
      </Box>
    </Box>
  );
}
