import { Flex, Box } from '@chakra-ui/react';

type LinkItemProps = {
  product: String,
  price: any
};

export default function LinkItem(props: LinkItemProps) {
  const { product, price } = props;
  return (
    <Flex maxWidth="27.5rem" justifyContent="space-between" fontWeight="600" borderBottom="1px solid" paddingBottom=".5rem" marginBottom="1.5rem" width="100%">
        <Box>
            {product}
        </Box>
        <Box>
            {price} kr
        </Box>
    </Flex>
  );
}
