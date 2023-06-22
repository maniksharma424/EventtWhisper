import { StrictMode } from "react";
import ReactDom from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./styles/index.css";
import myRouter from "./App.jsx";
import { Provider } from "react-redux";
import store from "./config/store";
const root = ReactDom.createRoot(document.getElementById("root"));

root.render(

    <Provider store={store}>
      <RouterProvider router={myRouter} />
    </Provider>

);
