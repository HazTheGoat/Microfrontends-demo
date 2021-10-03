import { atom } from "recoil";
import { Cart, Item } from "../types/Cart";
import { fakeItems } from "./../fakeData";
export const cartAtom = atom<Cart>({
  key: "cartAtom",
  default: {
    items: [],
  },
});

export const itemsAtom = atom<Item[]>({
  key: "itemsAtom",
  default: fakeItems,
});
