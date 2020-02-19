import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Homepage extends Component {
  render() {
    return (
      <div>
        <p>This is our from</p>
        <li>
          <Link to="/form">Link to form</Link>
        </li>
      </div>
    );
  }
}
