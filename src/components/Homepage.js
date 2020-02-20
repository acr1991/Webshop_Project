import React, { Component } from "react";
import { fetchProductsAndCategories } from "../store/Product/actions.js";
import { connect } from "react-redux";
import NavBar from "./NavBar";
import ProductList from "./ProductList";
import Categorysidebar from "./Catagorysidebar";

class Homepage extends Component {
  componentDidMount() {
    console.log(this.props);
    this.props.dispatch(fetchProductsAndCategories());
  }

  render() {
    // const products_copy = [...this.props.products];
    // products_copy.sort((a, b) => a.title - b.title);
    // console.log(products_copy);
    return (
      <div className="products">
        <NavBar />
        <div name="pageContainer" style={{ display: "flex" }}>
          <div style={{ flex: 1 }}>
            <Categorysidebar />
          </div>
          <div style={{ flex: 4 }}>
            <ProductList />
          </div>
        </div>
      </div>
    );
  }
}
function mapStateToProps(reduxState) {
  console.log(reduxState.categories);
  return { products: reduxState.categories };
}
export default connect(mapStateToProps)(Homepage);

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
