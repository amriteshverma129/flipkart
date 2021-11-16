export interface SelectedObject {
    id: string,
    quantity: number,
}
export interface CartObject {
    cartQuantity: number,
    cartArray: SelectedObject[]
}
const initialState: CartObject = {
    cartQuantity: 0,
    cartArray: []
}

export default function reducer(state = initialState, action: any) {
    switch (action.type) {

        case "INCREASE_QUANTITY":
            let newCartArray: any[] = state.cartArray.filter((cartObject) => {
                if (cartObject.id === action.selectedObject.id) {
                    cartObject.quantity = cartObject.quantity + 1;
                    return true
                }
            })
            if (newCartArray.length === 1) {
                return { ...state, cartQuantity: state.cartQuantity + 1 }
            }
            return { ...state, cartQuantity: state.cartQuantity + 1, cartArray: [...state.cartArray, { id: action.selectedObject.id, quantity: action.selectedObject.quantity }] };
            break;
        case "DECREASE_QUANTITY":
            console.log("AMritesh verma")
            console.log(state.cartArray)
            console.log(action.selectedObject.id)
            let array = state.cartArray.filter((cartObject) => {
                if (cartObject.id === action.selectedObject.id) {
                    cartObject.quantity = cartObject.quantity - 1;
                    return cartObject
                }
                return cartObject
            })
            state.cartArray = array;
            return state
            break;

        default:
            return state
    }
}
