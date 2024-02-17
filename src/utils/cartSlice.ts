import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { SelectedObject } from "../components/interface";

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
    removeItem: (state, action) => {
      state.cartItemArray.pop();
      state.cartQuantity--;
    },
  },
});
export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
