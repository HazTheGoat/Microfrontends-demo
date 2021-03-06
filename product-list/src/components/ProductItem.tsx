import React from "react";
import { Item } from "root/item"; // NB: Importere fra root appen
import { Box, Button, Image, Stack, Heading } from "@chakra-ui/react";
import { useRecoilState } from "recoil";
import { cartAtom } from "root/atoms"; // NB: Importere fra root appen
import { Cart } from "../../../root/src/types/Cart";

const ProductItem = ({ item }: Item) => {
  // NB: Vi importerer cartAtom state fra root appen
  const [cart, setCart] = useRecoilState<Cart>(cartAtom);

  const handleAddToCart = () => {
    // NB: Vi oppdaterer state i root appen
    setCart((e) => {
      console.log("E: ", e);

      return { ...e, items: [...e.items, item] };
    });
  };
  return (
    <Box w="100%" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image w="100%" src={item.imgSrc} />

      <Box p="6">
        <Box d="flex" alignItems="baseline">
          <Box
            w="100%"
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            isTruncated
          >
            <Heading as="h1" size="lg">
              {item.name}
            </Heading>
            <p>{item.description}</p>
          </Box>
        </Box>

        <Box>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              {item.price}
              <Box as="span" color="gray.600" fontSize="sm">
                ,-
              </Box>
            </Box>
            <Box>
              <Button colorScheme="teal" onClick={() => handleAddToCart()}>
                Buy
              </Button>
            </Box>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductItem;
