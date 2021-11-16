import { increaseQuantity, decreaseQuantity } from './action'
import { SelectedObject } from './reducer';
import { CartObject } from './reducer';

export let mapDispatchToProps = (dispatch: any) => {
    return {
        increaseQuantity: (selectedObject: SelectedObject) => {
            dispatch(increaseQuantity(selectedObject))
        },
        decreaseQuantity: (selectedObject: SelectedObject) => {
            dispatch(decreaseQuantity(selectedObject))
        }
    }
}

export let mapStateToProps = (state: CartObject) => {
    return {
        cartQuantity: state.cartQuantity,
        cartArray: state.cartArray
    }
}