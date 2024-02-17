import React from "react";
import laptops from "../laptop.json";
import { useNavigate } from "react-router";

export const Laptops = () => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <div className="container-fluid">
        <div className="row">
          {laptops.map((item, index) => {
            return (
              <div
                key={item.id}
                className="card"
                style={{ width: "400px" }}
                onClick={() => {
                  navigate(`/laptop/${item.id}`);
                }}
              >
                <h3 className="card-header">{item.productName}</h3>
                <img
                  src={item.image}
                  alt={item.productName}
                  className="card-img-top"
                  height="250px"
                  width="100%"
                  style={{ objectFit: "cover" }}
                ></img>
                <span>{item.cpu}</span>
                <span>{item.ram}</span>
                <span>{item.screen}</span>
                <span>{item.storage}</span>
                <span>{item.price}</span>
                <details>
                  <summary>Discription</summary>
                  {item.description}
                </details>
              </div>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Laptops;
