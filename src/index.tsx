import ReactDOM from "react-dom/client";
import appRouter from "./App";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import { RouterProvider } from "react-router-dom";

const Root = () => {
  const rootNode = document.getElementById("root");
  if (!rootNode) return;
  const root = ReactDOM.createRoot(rootNode);
  return root.render(
    <Provider store={appStore}>
      <RouterProvider router={appRouter} />
    </Provider>
  );
};
Root();
