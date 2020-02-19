import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Homepage extends Component {
  render() {
    return (
      <div>
        <p>These are our products</p>
        <li>
          <Link to="/product">Link to product</Link>
        </li>
      </div>
    );
  }
}
