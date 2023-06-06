import { StrictMode } from "react";
import ReactDom from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./styles/index.css";
import myRouter from "./App.jsx";
const root = ReactDom.createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <RouterProvider router={myRouter} />
  </StrictMode>
);
