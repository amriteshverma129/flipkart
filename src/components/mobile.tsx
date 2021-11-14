import React from 'react'
import mobiles from '../mobile.json'
const Mobiles = () => {
    return (
        <React.Fragment>
            <div className="container-fluid" >
                <div className="row">
                    {mobiles.map((item, index) => {
                        return <div key={index} className="card" style={{ width: "400px" }}>
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

export default Mobiles
