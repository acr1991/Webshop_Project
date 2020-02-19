import React, { Component } from "react";
import { fetchProducts } from "../store/Product/actions.js";
import { connect } from "react-redux";
import NavBar from "./NavBar";
import ProductList from "./ProductList";

class Homepage extends Component {
  componentDidMount() {
    console.log(this.props);
    this.props.dispatch(fetchProducts());
  }

  render() {
    // const products_copy = [...this.props.products];
    // products_copy.sort((a, b) => a.title - b.title);
    // console.log(products_copy);
    return (
      <div className="products">
        <NavBar />
        <div name="pageContainer">
          HOMEPAGE
          <ProductList />
        </div>
      </div>
    );
  }
}

export default connect()(Homepage);

// renderProduct = (product, index) => {
//   return (
//     <Product
//       id={product.id}
//       name={product.name}
//       price={product.price}
//       categoryId={product.categoryId}
//       image={product.imageUrl}
//       inStock={product.inStock}
//       key={index} //USE THIS IT IS BETTER THAN USING SOMETHING DEPENDENT
//     />
//   );
// };
