import React from 'react';
import PropTypes from 'prop-types';

const Product = ({ name, price, quantity }) => (
  <div>
    <div className="product-name">{name}</div>
    <div className="product-price">{price} руб.</div>
    <div className="product-stock">{quantity ? quantity : '0'} шт.</div>
  </div>
);

Product.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.number
}

export default Product;