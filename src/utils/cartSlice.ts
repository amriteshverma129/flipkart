import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { SelectedObject } from "./type";

export interface CartState {
  cartQuantity: number;
  cartItemArray: SelectedObject[];
}

// Define the initial state using that type
const initialState: CartState = {
  cartQuantity: 0,
  cartItemArray: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<SelectedObject>) => {
      state.cartItemArray.push(action.payload);
      state.cartQuantity++;
    },
    removeItem: (state, action: PayloadAction<SelectedObject>) => {
      state.cartItemArray = state.cartItemArray.filter(
        (cartItem) => cartItem.id !== action.payload.id
      );
      state.cartQuantity--;
    },
    clearItem: (state) => {
      state.cartItemArray = [];
      state.cartQuantity = 0;
    },
  },
});
export const { addItem, removeItem, clearItem } = cartSlice.actions;
export default cartSlice.reducer;
