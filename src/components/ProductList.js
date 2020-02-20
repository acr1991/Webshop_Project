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
        {products.length > 0 ? (
          products.slice(0, 10).map(product => {
            return (
              <div className="card" style={cardStyle}>
                <img
                  src={product.imageUrl}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.price}</p>
                  <p className="card-inStock"> {product.inStock}</p>
                  <a href="#" className="btn btn-primary">
                    Add to cart
                  </a>
                </div>
              </div>
            );
          })
        ) : (
          <div>Loading...</div>
        )}
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

const cardStyle = {
  width: "280px",
  float: "left"
};
const divStyle = { display: "flex" };
export default connect(mapStateToProps)(ProductList);
