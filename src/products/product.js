import React from 'react'

import image from '../widgets/process-header.jpg'

const Product = (props) => (
  //TODO(miggy): use tables for this
  <div className="pure-g bordered-round">
    <div className="pure-u-1-5"><p className="is-center"><img src={ image } alt="product-image" className="pure-img-responsive" />{ props.product.name }</p></div>
    <div className="pure-u-4-5"><p className="padded">{ props.product.description }</p></div>
  </div>
);

export default Product;
