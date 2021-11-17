import { Cart } from "./interface";
const initialState: Cart = {
    cartQuantity: 0,
    cartItemArray: []
}

export default function reducer(state = initialState, action: any) {
    switch (action.type) {

        case "INCREASE_QUANTITY":
            let newCartItemArray: any[] = state.cartItemArray.filter((cartItem) => {
                if (cartItem.id === action.selectedObject.id) {
                    cartItem.quantity = cartItem.quantity + action.selectedObject.quantity;
                    return true
                }
            })
            if (newCartItemArray.length === 1) {
                return { ...state, cartQuantity: state.cartQuantity + action.selectedObject.quantity }
            }
            return { ...state, cartQuantity: state.cartQuantity + 1, cartItemArray: [...state.cartItemArray, action.selectedObject] };
            break;
        case "DECREASE_QUANTITY":
            let array = state.cartItemArray.filter((cartItem) => {
                if (cartItem.id === action.selectedObject.id) {
                    if (cartItem.quantity === 1 || cartItem.quantity === action.selectedObject.quantity) {
                        return false
                    }
                    else {
                        cartItem.quantity = cartItem.quantity - action.selectedObject.quantity;
                        return true;
                    }
                }
                return true
            })
            state.cartItemArray = array;
            if (state.cartQuantity <= 0) {
                return state
            }
            else {
                return { ...state, cartQuantity: state.cartQuantity - 1 }
            }
            break;

        default:
            return state
    }
}
