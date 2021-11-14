import React from 'react'
import laptops from '../laptop.json';
import { mapDispatchToProps, mapStateToProps } from './container'
import { connect } from 'react-redux'
import { useHistory } from 'react-router';

export const LaptopDetail = (props: any) => {
    const history = useHistory()
    let selectedLaptop = laptops.filter((item) => {
        if (item.id === String(props.match.params.id)) {
            return true;
        }
    })

    return (
        <React.Fragment>
            <img src={selectedLaptop[0].image} alt={selectedLaptop[0].productName} height="300px" width="200px" />
            {selectedLaptop[0].productName}
            {selectedLaptop[0].cpu}
            <button className="btn btn-success" onClick={() => props.decreaseQuantity()}>-</button>{props.quantity}
            <button className="btn btn-success" onClick={() => props.increaseQuantity()}>+</button><br />
            <button className="btn btn-primary m-2" onClick={() => { console.log("Amritesh Verma"); history.push('/cart') }}>Move to Cart</button>
            <button className="btn btn-primary m-2">Back</button>
        </React.Fragment>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(LaptopDetail);
