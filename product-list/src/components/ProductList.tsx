import { Grid } from "@chakra-ui/react";
import React from "react";
import { useRecoilValue } from "recoil";
import { itemsAtom } from "root/atoms"; // importere fra root appen
import { Item } from "root/item"; // importere fra root appen
import ProductItem from "./ProductItem";

const ProductList = () => {
  // NB: Vi importerer itemsAtom state fra root appen
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
