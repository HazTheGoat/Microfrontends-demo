import { Grid } from "@chakra-ui/react";
import React from "react";
import { useRecoilValue } from "recoil";
import { itemsAtom } from "root/atoms";
import { Item } from "root/item";
import ProductItem from "./ProductItem";

const ProductList = () => {
  const items: Item[] = useRecoilValue<Item[]>(itemsAtom);

  return (
    <>
      <Grid templateColumns="repeat(4, 1fr)" gap={6}>
        {items.length &&
          items.map((item) => (
            <ProductItem key={item.id} item={item}></ProductItem>
          ))}
      </Grid>
    </>
  );
};

export default ProductList;
