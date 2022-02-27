import Phaser from "phaser";
import React from "react";
import ReactDOM from "react-dom";
import App from "./react-logic/components/App";
import playGame from "./phaser/scene";

import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById("root") || document.createElement("div")
);
