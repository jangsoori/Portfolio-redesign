import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App.js";
import { Reset } from "styled-reset";
const root = document.querySelector("#root");

ReactDOM.render(
  <>
    <Reset />
    <App />
  </>,
  root
);
