import React from 'react'
import { connect } from 'react-redux';
import laptops from '../laptop.json';
import { mapDispatchToProps, mapStateToProps } from './container';

export const Laptops = (props: any) => {
    console.log(props.quantity);

    return (
        <React.Fragment>
            <div className="container-fluid" >
                <div className="row">
                    {laptops.map((item, index) => {
                        return <div key={item.id} className="card" style={{ width: "400px" }} onClick={() => { props.history.push(`/detail/laptop/${item.id}`) }}>
                            <h3 className="card-header">{item.productName}</h3>
                            <img src={item.image} alt={item.productName} className="card-img-top" height="250px" width="100%" style={{ objectFit: "cover" }}></img>
                            <span>{item.cpu}</span>
                            <span>{item.ram}</span>
                            <span>{item.screen}</span>
                            <span>{item.storage}</span>
                            <span>{item.price}</span>
                            <details><summary>Discription</summary>{item.description}</details>
                        </div>
                    })}
                </div>
            </div>
        </React.Fragment>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Laptops)
