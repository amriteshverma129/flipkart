import React from 'react'
import laptops from '../laptop.json';
import { mapDispatchToProps, mapStateToProps } from './container'
import { connect } from 'react-redux'
import { useHistory } from 'react-router';
import { SelectedObject } from './interface';

export const LaptopDetail = (props: any) => {
    const history = useHistory()
    let selectedLaptop = laptops.filter((item) => {
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
            <div className="container-fluid">

                <div className="row card laptopCart">
                    <div className="card-body" >
                        <div ><img src={selectedLaptop[0].image} alt={selectedLaptop[0].productName} /></div>
                        <div className="card-body">
                            <h1>{selectedLaptop[0].productName}</h1>
                            <span>{selectedLaptop[0].cpu}</span><br />
                            <span>{selectedLaptop[0].ram}</span><br />
                            <span>{selectedLaptop[0].screen}</span><br />
                            <span>{selectedLaptop[0].storage}</span><br />
                            <span>${selectedLaptop[0].price}</span><br />
                            <details><summary>Discription</summary>{selectedLaptop[0].description}</details>
                            {/* <button className="btn btn-success" onClick={() => props.decreaseQuantity({ ...selectedLaptop[0], quantity: 1 })}>-</button>{quantity}
                            <button className="btn btn-success" onClick={() => props.increaseQuantity({ ...selectedLaptop[0], quantity: 1 })}>+</button><br /> */}
                            <button className="btn btn-primary m-2" onClick={() => { history.push('/cart') }}>Move to Cart</button>
                            <button className="btn btn-primary m-2" onClick={() => props.increaseQuantity({ ...selectedLaptop[0], quantity: 1 })}>Add to Cart</button>

                        </div>
                    </div>
                </div>

            </div>
        </React.Fragment>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(LaptopDetail);
