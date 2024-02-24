import React from "react";
import laptops from "../laptop.json";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { Dispatch, PayloadAction } from "@reduxjs/toolkit";
import { addItem } from "../utils/cartSlice";
import { itemType } from "../utils/type";

export const Laptops = () => {
  const navigate = useNavigate();
  const dispatch =
    useDispatch<
      Dispatch<PayloadAction<{ item: itemType; quantity: number }>>
    >();

  const handleTitleClick = (item: itemType) => {
    navigate(`/laptop/${item.id}`);
  };
  return (
    <React.Fragment>
      <div className="grid gap-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 p-4">
        {laptops.map((item: itemType) => {
          return (
            <div
              key={item.id}
              className="w-[100%] border-2 border-slate-100 rounded-md hover:shadow-xl cursor-pointer"
              // onClick={() => handleTitleClick(item)}
            >
              <div className="h-[200px] w-[100%] rounded-md relative">
                <img
                  src={item.image}
                  alt={item.productName}
                  className="h-[100%] w-[100%] rounded-tr-lg rounded-tl-lg object-contain"
                  height="250px"
                  width="100%"
                ></img>
                <div className="absolute top-3 right-3 px-3 py-2 text-[12px] rounded-full text-[#ffffff] bg-[#000000]">
                  {item.storage}
                </div>
              </div>
              <div className="p-5">
                <h2 className="text-xl font-semibold mb-2 hover:text-[#f00303db]">
                  {item.productName}
                </h2>
                <span className="mb-1 block">{item.cpu}</span>
                <span className="mb-1 block">{item.ram}</span>
                <span className="mb-1 block">{item.screen}</span>
                <span className="mb-1 block">{item.price}</span>
                {/* <details>
                  <summary>Discription</summary>
                  {item.description}
                </details> */}
                <a
                  href="#"
                  onClick={() => dispatch(addItem({ item, quantity: 1 }))}
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Add To Cart
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default Laptops;
