import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App.js";
import { Reset } from "styled-reset";
import { createGlobalStyle } from "styled-components";
import Theme from "./Theme";

const GlobalStyle = createGlobalStyle`
html{
      /* 1rem = 10px */
  font-size: 62.5%;
    font-family: 'Barlow', sans-serif;
  }
  body{
    line-height:1.2;

  }
  a{
    font-size:inherit;
    color:inherit;
    text-decoration:none;
  }
  *{
    padding:0;
    margin:0;
    box-sizing:border-box;
    font-family: 'Barlow', sans-serif;

  }
`;
const root = document.querySelector("#root");

ReactDOM.render(
  <Theme>
    <GlobalStyle />
    <Reset />
    <App />
  </Theme>,
  root
);
