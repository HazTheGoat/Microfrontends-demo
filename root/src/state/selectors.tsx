import { selector } from "recoil";
import { cartAtom } from "./atoms";

export const cartItemsCountSelector = selector({
    key: 'cartItemsCountSelector',
    get: ({get}) => {
      const cart = get(cartAtom);
  
      return cart.items.length
    },
  });