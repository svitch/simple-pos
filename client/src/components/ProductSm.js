import React from 'react';
import PropTypes from 'prop-types';

const ProductSm = ({ name, price, quantity }) => (
  <div className="cart-item">
    <span className="cart-item-name">{name}</span>
    <span className="cart-item-price">{price} руб.</span>
    <span className="cart-item-stock">{quantity ? quantity : '0'} шт.</span>
  </div>
);

ProductSm.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.number
}

export default ProductSm;