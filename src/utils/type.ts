export interface SelectedObject {
  id: string;
  productName?: string;
  image?: string;
  cpu?: string;
  ram?: string;
  storage?: string;
  screen?: string;
  price?: string;
  description?: string;
  quantity?: number;
}

export interface Cart {
  cartQuantity: number;
  cartItemArray: SelectedObject[];
}
