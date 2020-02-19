import React from "react";
import { connect } from "react-redux";
//import { Link } from "react-router-dom";

class Product extends React.Component {
  render() {
    console.log(this.props.product);
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
              return <div>{product.products.imageUrl}</div>;
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
  console.log(reduxState.products);
  return { products: reduxState.products };
}
export default connect(mapStateToProps)(Product);
