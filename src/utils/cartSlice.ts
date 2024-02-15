import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartQuantity: 0,
    cartItemArray: [],
  },
  reducers: {
    addItem: () => {},
    removeItem: () => {},
    // addItem: (state, action) => {
    //   for (let i = 0; i < state.cartItemArray.length; i++) {
    //     if (state.cartItemArray[i].id === action.payload.selectedObject.id) {
    //       state.cartItemArray[i].quantity += 1;
    //       break;
    //     }
    //   }
    //   state.cartItemArray.push(action.payload.selectedObject);
    //   state.cartQuantity += 1;
    // },
    // removeItem: (state, action) => {
    //   let array = state.cartItemArray.filter((cartItem: any) => {
    //     if (cartItem.id === action.payload.selectedObject.id) {
    //       if (
    //         cartItem.quantity === 1 ||
    //         cartItem.quantity === action.payload.selectedObject.quantity
    //       ) {
    //         return false;
    //       } else {
    //         cartItem.quantity =
    //           cartItem.quantity - action.payload.selectedObject.quantity;
    //         return true;
    //       }
    //     }
    //     return true;
    //   });
    //   state.cartItemArray = array;
    //   if (state.cartQuantity <= 0) {
    //     return state;
    //   } else {
    //     return {
    //       ...state,
    //       cartQuantity:
    //         state.cartQuantity - action.payload.selectedObject.quantity,
    //     };
    //   }
    // },
  },
});
export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
