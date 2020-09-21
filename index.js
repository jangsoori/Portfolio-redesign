import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { Reset } from "styled-reset";
import { createGlobalStyle } from "styled-components";
import Theme from "./Theme";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { applyMiddleware, compose } from "redux";
import store from "./redux/store";

const GlobalStyle = createGlobalStyle`
  body,html,#root {
    height:100%;
    
  }
  html{
      /* 1rem = 10px */
  font-size: 62.5%;
    font-family: 'Montserrat', sans-serif;
  }
  body{
    line-height:1.5;
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
  }
`;

const root = document.querySelector("#root");
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Theme>
        <GlobalStyle />
        <Reset />
        <App />
      </Theme>
    </BrowserRouter>
  </Provider>,

  root
);
