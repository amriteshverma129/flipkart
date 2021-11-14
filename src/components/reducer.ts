const initialState = {
    quantity: 0
}

export default function reducer(state = initialState, action: any) {
    switch (action.type) {

        case "INCREASE_QUANTITY":
            return { ...state, quantity: state.quantity + 1 };
            break;
        case "DECREASE_QUANTITY":
            return { ...state, quantity: state.quantity - 1 };
            break;

        default:
            return state
    }
}
