import React from "react";
import { SelectedObject } from "../utils/type";
import { useDispatch, useSelector } from "react-redux";
import { CartState, addItem, clearItem, removeItem } from "../utils/cartSlice";
import { Dispatch, PayloadAction } from "@reduxjs/toolkit";

export const Cart = () => {
  const dispatch = useDispatch<Dispatch<PayloadAction<SelectedObject>>>();
  const cartItemArray = useSelector(
    (store: { cart: CartState }) => store.cart.cartItemArray
  );
  const count = useSelector(
    (store: { cart: CartState }) => store.cart.cartQuantity
  );

  return (
    <React.Fragment>
      <div className="p-10 border-2 border-slate-100 m-10 rounded-md">
        <h1 className="text-[36px] font-bold mb-10">Shopping Cart</h1>
        <div className="flex">
          <div className="w-2/3">
            {cartItemArray.map((item: SelectedObject, index: any) => {
              return (
                <div
                  key={index}
                  className={`border-[#f3f1f1] border-t-2 mr-20 flex py-5 ${
                    index === cartItemArray.length - 1 ? `border-b-2` : ``
                  }`}
                >
                  <div className="bg-slate-100 h-[180px] w-[150px] flex justify-center items-center p-2 mr-5">
                    <img src={item.image} alt={item.productName} />
                  </div>
                  <div className="relative w-[100%] flex">
                    <div className="w-8/12">
                      <h1 className="font-semibold text-[18px] mb-5 ">
                        {item.productName}
                      </h1>
                      <span className="block text-[14px]">${item.price}</span>
                    </div>
                    <div className=" w-2/12">
                      <button
                        className="btn btn-success"
                        onClick={() => dispatch(removeItem(item))}
                      >
                        -
                      </button>
                      <span className="p-2">{count}</span>
                      <button
                        className="btn btn-success mr-5"
                        onClick={() => dispatch(addItem(item))}
                      >
                        +
                      </button>
                    </div>
                    <div className="w-2/12">
                      <button
                        className="  rounded-md py-1 px-4 bg-cyan-700 text-[white]"
                        // onClick={() => dispatch(clearItem())}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="w-1/3 ">
            <div className="border-2 border-slate-100 rounded-md p-5 bg-slate-100">
              <h3 className="font-semibold text-[rgb(255, 0, 255)]">
                Order Summary
              </h3>
              <div className="flex flex-col">
                <div className="text-[grey] text-[14px] border-[#dddbdb] border-b-2 py-3">
                  Subtotal
                </div>
                <div className="text-[grey] text-[14px] border-[#dddbdb] border-b-2 py-3">
                  Shipping estimate{" "}
                </div>
                <div className="text-[grey] text-[14px] border-[#dddbdb] border-b-2 py-3">
                  Tax extimate
                </div>
                <div className="text-[grey]  text-[14px] py-3">Order Total</div>
              </div>
              <button className=" w-[100%] p-2 rounded-md bg-sky-700 text-[white] mt-3">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Cart;
