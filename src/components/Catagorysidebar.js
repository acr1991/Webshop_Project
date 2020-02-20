import React from "react";
import { connect } from "react-redux";

class Categorysidebar extends React.Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.categories.map(categories => {
            return <li>{categories.name}</li>;
          })}
        </ul>
      </div>
    );
  }
}
function mapStateToProps(reduxState) {
  console.log(reduxState.categories);
  return { categories: reduxState.products.categories };
}
export default connect(mapStateToProps)(Categorysidebar);
