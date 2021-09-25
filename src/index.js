import React from "react";
import ReactDOM from "react-dom";
import "modern-normalize";
import App from "./Components/App";
import "./index.css";
import data from "./data";

ReactDOM.render(
  <>
    <App data={data} />
  </>,
  document.getElementById("root")
);
