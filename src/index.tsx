import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import appRouter from "./App";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import { RouterProvider } from "react-router-dom";

ReactDOM.render(
  <Provider store={appStore}>
    <RouterProvider router={appRouter} />
  </Provider>,
  document.getElementById("root")
);
