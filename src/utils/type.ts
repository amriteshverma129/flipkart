export interface CartType {
  cartQuantity: number;
  cartItemArray: { item: itemType; quantity: number }[];
}

export type itemType = {
  id: string;
  productName?: string;
  image?: string;
  cpu?: string;
  ram?: string;
  storage?: string;
  screen?: string;
  price?: string;
  description?: string;
};
