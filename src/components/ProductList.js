import React, { Component } from "react";
import { connect } from "react-redux";

class ProductList extends Component {
  render() {
    const products = this.props.products;
    console.log(products);
    if (!products)
      return (
        <div>
          <h2>Loading</h2>
        </div>
      );
    return (
      <div>
        <ul>
          {products.length > 0 ? (
            products.map(product => {
              return <div>{product.imageUrl}</div>;
            })
          ) : (
            <div>Loading...</div>
          )}
        </ul>
      </div>
    );
  }
}
function mapStateToProps(reduxState) {
  console.log(reduxState.products.list);
  return {
    products: reduxState.products.list
  };
}
export default connect(mapStateToProps)(ProductList);
