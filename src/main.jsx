/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

const el = document.getElementById("root")
const root = ReactDOM.createRoot(el)

root.render(<App />)

// ReactDOM.createRoot(document.getElementById("root")).render(<App />);
