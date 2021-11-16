import React from 'react'
import { connect } from 'react-redux'
import { mapDispatchToProps, mapStateToProps } from './container'

export const Cart = (props: any) => {
    return (
        <React.Fragment>
            {props.cartQuantity}
        </React.Fragment>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
