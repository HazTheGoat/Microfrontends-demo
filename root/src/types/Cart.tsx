export interface Cart {
    items: Item[]
}

export interface Item {
    id: string,
    name: string,
    quantity: number
}