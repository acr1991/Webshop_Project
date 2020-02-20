import React from "react";
import { connect } from "react-redux";

class Categorysidebar extends React.Component {
  render() {
    return (
      <div>
        <nav>
          <ul>
            {this.props.categories.map(categories => {
              return (
                <li>
                  <a href={categories.id}>{categories.name}</a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    );
  }
}
function mapStateToProps(reduxState) {
  console.log(reduxState.categories);
  return { categories: reduxState.products.categories };
}
export default connect(mapStateToProps)(Categorysidebar);
