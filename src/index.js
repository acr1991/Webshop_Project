import React from "react";
import ReactDOM from "react-dom";
//import "./index.css";
import App from "./App";
//import { Provider } from "react redux";
import * as serviceWorker from "./serviceWorker";
//import store from "./store";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);

serviceWorker.unregister();
