import React from 'react'
import laptops from '../laptop.json';
import { mapDispatchToProps, mapStateToProps } from './container'
import { connect } from 'react-redux'
import { useHistory } from 'react-router';
import { SelectedObject } from './interface';

export const LaptopDetail = (props: any) => {
    const history = useHistory()
    let selectedLaptop = laptops.filter((item) => {
        if (item.id === String(props.match.params.id)) {
            return true;
        }
    })
    console.log(props.cartQuantity)
    let quantity: number = 0;
    props.cartItemArray.filter((cartItem: SelectedObject) => {
        if (cartItem.id === props.match.params.id)
            quantity = cartItem.quantity;
    })

    return (
        <React.Fragment>
            <img src={selectedLaptop[0].image} alt={selectedLaptop[0].productName} height="300px" width="200px" />
            {selectedLaptop[0].productName}
            {selectedLaptop[0].cpu}
            <button className="btn btn-success" onClick={() => props.decreaseQuantity({ ...selectedLaptop[0], quantity: 1 })}>-</button>{quantity}
            <button className="btn btn-success" onClick={() => props.increaseQuantity({ ...selectedLaptop[0], quantity: 1 })}>+</button><br />
            <button className="btn btn-primary m-2" onClick={() => { history.push('/cart') }}>Move to Cart</button>
            <button className="btn btn-primary m-2">Back</button>
        </React.Fragment>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(LaptopDetail);
