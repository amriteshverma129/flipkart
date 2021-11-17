import React from 'react'
import { connect } from 'react-redux'
import { mapDispatchToProps, mapStateToProps } from './container'
import { SelectedObject } from './interface'

export const Cart = (props: any) => {
    return (
        <React.Fragment>
            <div className="container-fluid">
                {props.cartItemArray.map((item: SelectedObject, index: any) => {
                    return <div key={index} className="row card cart">
                        <div className="card-body" >
                            <div ><img src={item.image} alt={item.productName} /></div>
                            <div className="card-body">
                                <h1>{item.productName}</h1>
                                <span>{item.cpu}</span><br />
                                <span>{item.ram}</span><br />
                                <span>{item.screen}</span><br />
                                <span>{item.storage}</span><br />
                                <span>${item.price}</span><br />
                                <details><summary>Discription</summary>{item.description}</details>
                                <button className="btn btn-success" onClick={() => props.decreaseQuantity({ ...item, quantity: 1 })}>-</button><span className="p-2">{item.quantity}</span>
                                <button className="btn btn-success mr-5" onClick={() => props.increaseQuantity({ ...item, quantity: 1 })}>+</button>
                                <button className="btn btn-primary m-2" onClick={() => props.decreaseQuantity({ ...item, quantity: item.quantity })}>Remove</button>

                            </div>
                        </div>
                    </div>
                })}
            </div>
        </React.Fragment>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
