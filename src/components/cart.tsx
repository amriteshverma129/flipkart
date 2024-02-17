import React from "react";
import { SelectedObject } from "./interface";
import { useDispatch, useSelector } from "react-redux";
import { CartState, addItem, removeItem } from "../utils/cartSlice";
import { Dispatch, PayloadAction } from "@reduxjs/toolkit";

export const Cart = () => {
  const dispatch = useDispatch<Dispatch<PayloadAction<SelectedObject>>>();
  const cartItemArray = useSelector(
    (store: { cart: CartState }) => store.cart.cartItemArray
  );

  return (
    <React.Fragment>
      <div className="container-fluid">
        {cartItemArray.map((item: SelectedObject, index: any) => {
          return (
            <div key={index} className="row card cart">
              <div className="card-body">
                <div>
                  <img src={item.image} alt={item.productName} />
                </div>
                <div className="card-body">
                  <h1>{item.productName}</h1>
                  <span>{item.cpu}</span>
                  <br />
                  <span>{item.ram}</span>
                  <br />
                  <span>{item.screen}</span>
                  <br />
                  <span>{item.storage}</span>
                  <br />
                  <span>${item.price}</span>
                  <br />
                  <details>
                    <summary>Discription</summary>
                    {item.description}
                  </details>
                  <button
                    className="btn btn-success"
                    onClick={() => dispatch(addItem(item))}
                  >
                    -
                  </button>
                  <span className="p-2">{item.quantity}</span>
                  <button
                    className="btn btn-success mr-5"
                    onClick={() => dispatch(addItem(item))}
                  >
                    +
                  </button>
                  <button
                    className="btn btn-primary m-2"
                    onClick={() => dispatch(removeItem(item))}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default Cart;
