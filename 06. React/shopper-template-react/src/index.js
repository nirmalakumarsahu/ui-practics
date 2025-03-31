import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import { CookiesProvider } from "react-cookie";
import { ShopperIndex } from "./components/shopper-index/shopper-index";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CookiesProvider>
      <ShopperIndex />
    </CookiesProvider>
  </React.StrictMode>
);
