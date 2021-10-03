import { atom } from "recoil";
import { Cart } from "../types/Cart";
import { Item } from "../types/Item";
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
