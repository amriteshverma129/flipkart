import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CartType, itemType } from "./type";

// Define the initial state using that type
const initialState: CartType = {
  cartQuantity: 0,
  cartItemArray: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (
      state,
      action: PayloadAction<{ item: itemType; quantity: number }>
    ) => {
      const { item, quantity } = action.payload;
      const existingItem = state.cartItemArray.find(
        (cartItem) => cartItem.item.id === item.id
      );
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.cartItemArray.push({ item, quantity });
      }
      state.cartQuantity += quantity;
    },
    removeItem: (
      state,
      action: PayloadAction<{ item: itemType; quantity: number }>
    ) => {
      const { item, quantity } = action.payload;
      state.cartItemArray = state.cartItemArray
        .map((cartItem) => {
          if (cartItem.item.id === item.id) {
            cartItem.quantity -= quantity;
          }
          return cartItem;
        })
        .filter((cartItem) => cartItem.quantity > 0);
      state.cartQuantity -= quantity;
    },
    clearItem: (
      state,
      action: PayloadAction<{ item: itemType; quantity: number }>
    ) => {
      const { item } = action.payload;
      state.cartItemArray = state.cartItemArray.filter(
        (cartItem) => cartItem.item.id !== action.payload.item.id
      );
      state.cartItemArray = [];
      state.cartQuantity = 0;
    },
  },
});
export const { addItem, removeItem, clearItem } = cartSlice.actions;
export default cartSlice.reducer;
