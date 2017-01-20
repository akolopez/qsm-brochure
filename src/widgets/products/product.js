import React from 'react'

const Product = (props) => (
  //TODO(miggy): use tables for this
  <div>
    <div>{ props.product.name }</div>
    <div>{ props.product.description }</div>
  </div>
);

export default Product;
