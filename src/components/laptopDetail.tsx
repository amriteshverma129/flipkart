import React from "react";
import laptops from "../laptop.json";
import { useNavigate, useParams } from "react-router";

export const LaptopDetail = (props: any) => {
  const navigate = useNavigate();
  const params = useParams();

  let selectedLaptop = laptops.filter((item) => {
    if (item.id === String(params.id)) return true;
  });

  return (
    <React.Fragment>
      <div className="container-fluid">
        <div className="row card laptopCart">
          <div className="card-body">
            <div>
              <img
                src={selectedLaptop[0].image}
                alt={selectedLaptop[0].productName}
              />
            </div>
            <div className="card-body">
              <h1>{selectedLaptop[0].productName}</h1>
              <span>{selectedLaptop[0].cpu}</span>
              <br />
              <span>{selectedLaptop[0].ram}</span>
              <br />
              <span>{selectedLaptop[0].screen}</span>
              <br />
              <span>{selectedLaptop[0].storage}</span>
              <br />
              <span>${selectedLaptop[0].price}</span>
              <br />
              <details>
                <summary>Discription</summary>
                {selectedLaptop[0].description}
              </details>
              <button
                className="btn btn-primary m-2"
                onClick={() => {
                  navigate("/cart");
                }}
              >
                Move to Cart
              </button>
              <button
                className="btn btn-primary m-2"
                onClick={() =>
                  props.increaseQuantity({ ...selectedLaptop[0], quantity: 1 })
                }
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default LaptopDetail;
