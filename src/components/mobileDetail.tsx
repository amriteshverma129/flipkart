import React from 'react'
import mobiles from '../mobile.json';
import { mapDispatchToProps, mapStateToProps } from './container'
import { connect } from 'react-redux'
import { useHistory } from 'react-router';
import { SelectedObject } from './interface';

export const MobileDetail = (props: any) => {
    const history = useHistory()
    let selectedMobile = mobiles.filter((item) => {
        if (item.id === String(props.match.params.id))
            return true;
    })

    // let quantity: number = 0;
    // props.cartItemArray.filter((cartItem: SelectedObject) => {
    //     if (cartItem.id === props.match.params.id)
    //         quantity = cartItem.quantity;
    // })

    return (
        <React.Fragment>
            <img src={selectedMobile[0].image} alt={selectedMobile[0].productName} height="300px" width="200px" />
            {selectedMobile[0].productName}
            {selectedMobile[0].cpu}
            {/* <button className="btn btn-success" onClick={() => props.decreaseQuantity({ ...selectedMobile[0], quantity: 1 })}>-</button>{quantity}
            <button className="btn btn-success" onClick={() => props.increaseQuantity({ ...selectedMobile[0], quantity: 1 })}>+</button><br /> */}
            <button className="btn btn-primary m-2" onClick={() => { history.push('/cart') }}>Move to Cart</button>
            <button className="btn btn-primary m-2" onClick={() => props.increaseQuantity({ ...selectedMobile[0], quantity: 1 })}>Add to Cart</button>

        </React.Fragment>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(MobileDetail);
