import React, { Component } from "react";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import { createBrowserRouter, Outlet } from "react-router-dom";
import Laptop from "./components/laptop";
import Mobiles from "./components/mobile";
import Cart from "./components/cart";
import MobileDetail from "./components/mobileDetail";
import LaptopDetail from "./components/laptopDetail";

const AppLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      // {
      //   path: "/",
      //   element: <Body />,
      // },
      {
        path: "/laptop",
        element: <Laptop />,
      },
      {
        path: "/mobile",
        element: <Mobiles />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/mobile/:id",
        element: <MobileDetail />,
      },
      {
        path: "/laptop/:id",
        element: <LaptopDetail />,
      },
    ],
    // errorElement: <ErrorComp />,
  },
]);
export default appRouter;
