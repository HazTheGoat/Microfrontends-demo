export interface Cart {
  items: Item[];
}

export interface Item {
  id: string;
  name: string;
  description: string;
  quantity: number;
  price: number;
}
