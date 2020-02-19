import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Homepage extends Component {
  render() {
    return (
      <div>
        <p>Welcome to the cart</p>
        <li>
          <Link to="/cart">Link to cart</Link>
        </li>
      </div>
    );
  }
}
