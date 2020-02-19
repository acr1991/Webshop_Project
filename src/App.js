import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Form from "./components/Form";
import Product from "./components/Product";
import Cart from "./components/Cart";
import Homepage from "./components/Homepage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/form" component={Form} />
        <Route path="/product/:id" component={Product} />
        <Route path="/cart" component={Cart} />
        <Route component={Homepage} />
      </Switch>
    </div>
  );
}

export default App;
