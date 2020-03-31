import React, { Component } from "react";
//import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchProductsAndCategories } from "../store/Product/actions";
class NavBar extends Component {
  state = { searchTerm: "", searchSubbmited: false };

  componentDidMount() {
    this.props.dispatch(fetchProductsAndCategories);
  }
  search = e => {
    e.preventDefault();
    const x = this.props.products;
    const search = x.filter(product => product.name === this.state.searchTerm);
    return search;
  };
  render() {
    console.log(this.state.searchQuery);
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <input
          onChange={e => this.setState({ searchQuery: e.target.value })}
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
          Search
        </button>
        <a className="navbar-brand" href="#">
          Webshop
        </a>

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
            <li className="nav-item dropdown"></li>
            <li className="nav-item"></li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Shopping cart
              </a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0"></form>
        </div>
      </nav>
    );
  }
}
function mapStateToProps(reduxstore) {
  return {
    products: reduxstore.products
  };
}
export default connect(mapStateToProps)(NavBar);
