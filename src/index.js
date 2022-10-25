import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/Navbar";
import Productos from "./components/Productos";
import './css/style.css'

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <Navbar />
    <Productos />
  </>
);
