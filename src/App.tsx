import Footer from "./components/footer";
import Navbar from "./components/navbar";
import "./App.css";
import { createBrowserRouter, Outlet } from "react-router-dom";
import Laptop from "./components/laptop";
import Mobiles from "./components/mobile";
import Cart from "./components/cart";
import MobileDetail from "./components/mobileDetail";
import LaptopDetail from "./components/laptopDetail";
import React from "react";

const AppLayout = () => {
  return (
    <React.Fragment>
      <Navbar />
      <div className="container mx-auto">
        <Outlet />
      </div>
      <Footer />
    </React.Fragment>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Laptop />,
      },
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
