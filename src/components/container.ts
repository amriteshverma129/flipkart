import { increaseQuantity, decreaseQuantity } from './action'

export let mapDispatchToProps = (dispatch: any) => {
    return {
        increaseQuantity: () => {
            dispatch(increaseQuantity())
        },
        decreaseQuantity: () => {
            dispatch(decreaseQuantity())
        }
    }
}

export let mapStateToProps = (state: any) => {
    return {
        quantity: state.quantity,
    }
}