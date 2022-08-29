import { Flex, Box } from '@chakra-ui/react';

type LinkItemProps = {
  product: String,
  desc: String,
  price: any
};

export default function LinkItem(props: LinkItemProps) {
  const { product, price, desc } = props;
  return (
    <Flex maxWidth="27.5rem" justifyContent="space-between" fontWeight="600" borderBottom="1px solid" paddingBottom=".5rem" marginBottom="1.5rem" width="100%" flexDirection="column">
        <Flex flexDirection="row" justifyContent="space-between">
          <Box letterSpacing="1.5px">
              {product.toUpperCase()}
          </Box>
          <Box>
              {price} kr
          </Box>
        </Flex>
        <Box fontSize="16px" fontStyle="italic">
          {desc}
        </Box>
    </Flex>
  );
}
