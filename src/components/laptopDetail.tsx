import React from 'react'
import laptops from '../laptop.json';
import { mapDispatchToProps, mapStateToProps } from './container'
import { connect } from 'react-redux'
import { useHistory } from 'react-router';
import { SelectedObject } from './reducer';

export const LaptopDetail = (props: any) => {
    console.log(props)
    const history = useHistory()
    let selectedLaptop = laptops.filter((item) => {
        if (item.id === String(props.match.params.id)) {
            return true;
        }
    })
    let quantity: number = 0
    props.cartArray.filter((cartObject: SelectedObject) => {
        if (cartObject.id === props.match.params.id)
            quantity = cartObject.quantity
    })

    return (
        <React.Fragment>
            <img src={selectedLaptop[0].image} alt={selectedLaptop[0].productName} height="300px" width="200px" />
            {selectedLaptop[0].productName}
            {selectedLaptop[0].cpu}
            <button className="btn btn-success" onClick={() => props.decreaseQuantity({ id: selectedLaptop[0].id, quantity: 1 })}>-</button>{quantity}
            <button className="btn btn-success" onClick={() => props.increaseQuantity({ id: selectedLaptop[0].id, quantity: 1 })}>+</button><br />
            <button className="btn btn-primary m-2" onClick={() => { history.push('/cart') }}>Move to Cart</button>
            <button className="btn btn-primary m-2">Back</button>
        </React.Fragment>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(LaptopDetail);
