import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Homepage extends Component {
  render() {
    return (
      // <nav classNameName="nav-wrapper">
      //   <div className="container">
      //     <Link to="/" className="brand-logo">
      //       Shopping
      //     </Link>

      //     <ul className="right">
      //       <li>
      //         <Link to="/">Home</Link>
      //       </li>
      //       <li>
      //         <Link to="/cart">My cart</Link>
      //       </li>
      //       <li>
      //         <Link to="/cart">
      //           <i className="material-icons">shopping_cart</i>
      //         </Link>
      //       </li>
      //     </ul>
      //   </div>
      // </nav>

      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Webshop
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Profile
              </a>
            </li>
            <li className="nav-item dropdown">
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </li>
            <li className="nav-item"></li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Shopping cart
              </a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    );
  }
}
