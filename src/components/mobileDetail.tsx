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
            <div className="container-fluid">

                <div className="row card mobileCart">
                    <div className="card-body" >
                        <div ><img src={selectedMobile[0].image} alt={selectedMobile[0].productName} /></div>
                        <div className="card-body">
                            <h1>{selectedMobile[0].productName}</h1>
                            <span>{selectedMobile[0].cpu}</span><br />
                            <span>{selectedMobile[0].ram}</span><br />
                            <span>{selectedMobile[0].screen}</span><br />
                            <span>{selectedMobile[0].storage}</span><br />
                            <span>${selectedMobile[0].price}</span><br />
                            <details><summary>Discription</summary>{selectedMobile[0].description}</details>
                            {/* <button className="btn btn-success" onClick={() => props.decreaseQuantity({ ...selectedMobile[0], quantity: 1 })}>-</button>{quantity}
                            <button className="btn btn-success" onClick={() => props.increaseQuantity({ ...selectedMobile[0], quantity: 1 })}>+</button><br /> */}
                            <button className="btn btn-primary m-2" onClick={() => { history.push('/cart') }}>Move to Cart</button>
                            <button className="btn btn-primary m-2" onClick={() => props.increaseQuantity({ ...selectedMobile[0], quantity: 1 })}>Add to Cart</button>

                        </div>
                    </div>
                </div>

            </div>
        </React.Fragment>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(MobileDetail);

