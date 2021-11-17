import React from 'react'
import { connect } from 'react-redux'
import { mapDispatchToProps, mapStateToProps } from './container'
import { SelectedObject } from './interface'

export const Cart = (props: any) => {
    return (
        <React.Fragment>
            {props.cartItemArray.map((item: SelectedObject, index: any) => {
                return <div key={index}>
                    <img src={item.image} alt={item.productName} height="300px" width="200px" />
                    {item.productName}<br />
                    {item.cpu}<br />
                    {item.id}<br />
                    <button className="btn btn-success" onClick={() => props.decreaseQuantity({ id: item.id, quantity: 1 })}>-</button>{item.quantity}
                    <button className="btn btn-success" onClick={() => props.increaseQuantity({ id: item.id, quantity: 1 })}>+</button><br />
                    <button className="btn btn-primary m-2" onClick={() => props.decreaseQuantity({ id: item.id, quantity: item.quantity })}>Remove</button>

                </div>
            })}
        </React.Fragment>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
