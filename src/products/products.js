import React from 'react';
import './products.css';

class Products extends React.Component {

  render() {
    let { searchImage, productName, category } = this.props.data;
    return (
      <div className="product">
        <img src={searchImage} width="150" height="150" alt={productName}/>
        <p>{productName}</p>
        <p>{category}</p>
      </div>
    );;
  }
}
export default Products;
