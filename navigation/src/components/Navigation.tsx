import React from "react";
import {
  Box,
  Stack,
  Link,
  Popover,
  PopoverTrigger,
  Badge,
  Heading,
} from "@chakra-ui/react";
import { NAV_ITEMS } from "./navigation.config";
import {useRecoilValue} from 'recoil';
import { cartItemsCountSelector } from "root/selectors";

export const Navigation = () => {
  
  const cartItemsLength = useRecoilValue(cartItemsCountSelector);


  return (
    <>
      <Stack my={5} direction={"row"} justifyContent={"center"}>
        <Stack direction={"row"} spacing={4}>
          {NAV_ITEMS.map((navItem) => (
            <Box key={navItem.label}>
              <Popover trigger={"hover"} placement={"bottom-start"}>
                <PopoverTrigger>
                  <Link
                    p={2}
                    href={navItem.href ?? "#"}
                    fontSize={"sm"}
                    fontWeight={500}
                  >
                    {navItem.label}
                  </Link>
                </PopoverTrigger>
              </Popover>
            </Box>
          ))}
          <Box>
            <Badge colorScheme="green">Cart: {cartItemsLength}</Badge>
          </Box>
        </Stack>
      </Stack>

      <Stack
        alignItems="center"
        mb={7}
        direction={"row"}
        justifyContent={"center"}
      >
        <Heading>Xalando</Heading>
      </Stack>
    </>
  );
};

export default Navigation;
