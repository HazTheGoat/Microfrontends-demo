import {atom} from 'recoil'
import { Cart } from '../types/Cart'

export const cartAtom = atom<Cart>({
    key: "cartAtom",
    default: {
        items: []
    }
})

