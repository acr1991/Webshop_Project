import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Homepage extends Component {
  renderProduct = (product, index) => {
    return (
      <Product
        id={product.id}
        name={product.name}
        price={product.price}
        categoryId={product.categoryId}
        image={product.imageUrl}
        inStock={product.inStock}
        key={index} //USE THIS IT IS BETTER THAN USING SOMETHING DEPENDENT
      />
    );
  };

  render() {
    const products_copy = [...this.props.products];
    products_copy.sort((a, b) => a.title - b.title);
    console.log(products_copy);
    return (
      <div className="products">
        <ul>products_copy.map(this.renderProduct)</ul>
      </div>
    );
  }
}
