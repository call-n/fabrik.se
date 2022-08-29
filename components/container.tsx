import { Box } from '@chakra-ui/react';
import Footer from 'components/footer';
import Navbar from 'components/navbar';
import React from 'react';

export default function Container({
  children,
  hsize
}: {
  children: React.ReactNode;
  hsize: number
}) {
  return (
    <Box backgroundColor="maincolor.corebg">
      <Navbar hsize={hsize} />
        <Box as="main" id="content" position="relative" zIndex={1}>
          {children}
        </Box>
    </Box>
  );
}
