import React from "react";
import laptops from "../laptop.json";
import { useNavigate, useParams } from "react-router";
import { useDispatch } from "react-redux";
import { Dispatch, PayloadAction } from "@reduxjs/toolkit";
import { addItem } from "../utils/cartSlice";
import { itemType } from "../utils/type";

export const LaptopDetail = () => {
  const navigate = useNavigate();
  const params = useParams();
  const dispatch =
    useDispatch<
      Dispatch<PayloadAction<{ item: itemType; quantity: number }>>
    >();

  let selectedLaptop = laptops.filter((item) => {
    if (item.id === String(params.id)) return true;
  });

  return (
    <React.Fragment>
      <div className="">
        <div className="">
          <div className="">
            <div>
              <img
                src={selectedLaptop[0].image}
                alt={selectedLaptop[0].productName}
              />
            </div>
            <div className="">
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
                className=""
                onClick={() => {
                  navigate("/cart");
                }}
              >
                Move to Cart
              </button>
              <button
                className=""
                onClick={() =>
                  dispatch(addItem({ item: selectedLaptop[0], quantity: 1 }))
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
