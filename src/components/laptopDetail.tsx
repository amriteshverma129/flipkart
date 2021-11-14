import React from 'react'
import laptops from '../laptop.json';
import { mapDispatchToProps } from './container'
import { connect } from 'react-redux'

export const LaptopDetail = (props: any) => {
    console.log(props.match.params.id)
    let selectedLaptop = laptops.filter((item) => {
        if (item.id === String(props.match.params.id)) {
            return true;
        }
    })

    return (
        <React.Fragment>
            {selectedLaptop[0].productName}
            {selectedLaptop[0].cpu}
            <button className="btn btn-success" onClick={() => console.log("hello")}>-</button>0
            <button className="btn btn-success" onClick={() => console.log("hello world")}>+</button>
        </React.Fragment>
    )
}

export default connect(null, mapDispatchToProps)(LaptopDetail)
