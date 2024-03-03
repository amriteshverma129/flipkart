import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, clearItem, removeItem } from "../utils/cartSlice";
import { Dispatch, PayloadAction } from "@reduxjs/toolkit";
import { CartType, itemType } from "../utils/type";

export const Cart = () => {
  const dispatch =
    useDispatch<
      Dispatch<PayloadAction<{ item: itemType; quantity: number }>>
    >();
  const cartItemArray = useSelector(
    (store: { cart: CartType }) => store.cart.cartItemArray
  );
  const count = useSelector(
    (store: { cart: CartType }) => store.cart.cartQuantity
  );

  const subTotal = useMemo(() => {
    return cartItemArray.reduce(
      (acc, item) => item.quantity * Number(item?.item?.price) + acc,
      0
    );
  }, [cartItemArray]);
  const taxEstimate = useMemo(() => {
    return (subTotal * 18) / 100;
  }, [subTotal]);

  return (
    <React.Fragment>
      <div className="p-10 border-2 border-slate-100 m-10 rounded-md">
        <h1 className="text-[36px] font-bold mb-10">Shopping Cart({count})</h1>
        <div className="flex">
          <div className="w-2/3">
            {cartItemArray.map(
              (item: { item: itemType; quantity: number }, index: any) => {
                return (
                  <div
                    key={index}
                    className={`border-[#f3f1f1] border-t-2 mr-20 flex py-5 ${
                      index === cartItemArray.length - 1 ? `border-b-2` : ``
                    }`}
                  >
                    <div className="bg-slate-100 h-[180px] w-[150px] flex justify-center items-center p-2 mr-5">
                      <img src={item.item.image} alt={item.item.productName} />
                    </div>
                    <div className="relative w-[100%] flex">
                      <div className="w-8/12">
                        <h1 className="font-semibold text-[18px] mb-5 ">
                          {item.item.productName}
                        </h1>
                        <span className="block text-[14px]">
                          ${item.item.price}
                        </span>
                      </div>
                      <div className=" w-2/12">
                        <button
                          className="rounded-md py-1 px-2 bg-cyan-700 text-[white] text-[14px]"
                          onClick={() =>
                            dispatch(
                              removeItem({ item: item.item, quantity: 1 })
                            )
                          }
                        >
                          -
                        </button>
                        <span className="p-2">{item.quantity}</span>
                        <button
                          className="rounded-md py-1 px-2 bg-cyan-700 text-[white] text-[14px]"
                          onClick={() =>
                            dispatch(addItem({ item: item.item, quantity: 1 }))
                          }
                        >
                          +
                        </button>
                      </div>
                      <div className="w-2/12">
                        <button
                          className="  rounded-md py-1 px-4 bg-cyan-700 text-[white]"
                          onClick={() => dispatch(clearItem(item))}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                );
              }
            )}
          </div>
          <div className="w-1/3 ">
            <div className="border-2 border-slate-100 rounded-md p-5 bg-slate-100">
              <h3 className="font-semibold text-[rgb(255, 0, 255)]">
                Order Summary
              </h3>
              <div className="flex flex-col">
                <div className="text-[grey] text-[14px] border-[#dddbdb] border-b-2 py-3 flex flex-row justify-between">
                  <div>Subtotal</div>
                  <div>$ {subTotal}</div>
                </div>
                <div className="text-[grey] text-[14px] border-[#dddbdb] border-b-2 py-3 flex flex-row justify-between">
                  <div>Shipping estimate</div>
                  <div>$ 2</div>
                </div>
                <div className="text-[grey] text-[14px] border-[#dddbdb] border-b-2 py-3 flex flex-row justify-between">
                  <div>Tax extimate</div>
                  <div>$ {taxEstimate}</div>
                </div>
                <div className="text-[grey]  text-[14px] py-3 flex flex-row justify-between">
                  <div>Order Total</div>
                  <div>$ {taxEstimate + 2 + subTotal}</div>
                </div>
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
