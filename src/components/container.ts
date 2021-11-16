import { increaseQuantity, decreaseQuantity } from './action'
import { SelectedObject } from './interface';
import { Cart } from './interface';

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

export let mapStateToProps = (state: Cart) => {
    return {
        cartQuantity: state.cartQuantity,
        cartItemArray: state.cartItemArray
    }
}