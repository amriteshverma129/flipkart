import React from "react";
import mobiles from "../mobile.json";
import { useNavigate, useParams } from "react-router";
import { useDispatch } from "react-redux";
import { Dispatch, PayloadAction } from "@reduxjs/toolkit";
import { SelectedObject } from "../utils/type";
import { addItem } from "../utils/cartSlice";

export const MobileDetail = () => {
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch<Dispatch<PayloadAction<SelectedObject>>>();

  let selectedMobile = mobiles.filter((item) => {
    if (item.id === String(params.id)) return true;
  });

  return (
    <React.Fragment>
      <div className="container-fluid">
        <div className="row card mobileCart">
          <div className="card-body">
            <div>
              <img
                src={selectedMobile[0].image}
                alt={selectedMobile[0].productName}
              />
            </div>
            <div className="card-body">
              <h1>{selectedMobile[0].productName}</h1>
              <span>{selectedMobile[0].cpu}</span>
              <br />
              <span>{selectedMobile[0].ram}</span>
              <br />
              <span>{selectedMobile[0].screen}</span>
              <br />
              <span>{selectedMobile[0].storage}</span>
              <br />
              <span>${selectedMobile[0].price}</span>
              <br />
              <details>
                <summary>Discription</summary>
                {selectedMobile[0].description}
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
                onClick={() => dispatch(addItem(selectedMobile[0]))}
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

export default MobileDetail;
