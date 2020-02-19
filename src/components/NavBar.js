import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Homepage extends Component {
  render() {
    return (
      <div>
        <p>hey im the homepage</p>
        <li>
          <Link to="/"></Link>
        </li>
      </div>
    );
  }
}
