import React from 'react';
import PropTypes from 'prop-types';
import Product from './Product';

const ProductItem = ({ product, onAddToCartClicked }) => (
  <div className="col-sm-6 col-md-4 col-lg-3">
    <div className="card product-small">
      <div className="card-body">
        <Product
          name={product.name}
          price={product.price}
          quantity={product.quantity} />
        <div className="product-button">
          <button
            onClick={onAddToCartClicked}
            className="btn btn-warning btn-block"
            disabled={product.quantity > 0 ? '' : 'disabled'}>
            {product.quantity > 0 ? 'Купить' : 'Продано'}
          </button>
        </div>
      </div>
    </div>
  </div>
);

ProductItem.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired
  }).isRequired,
  onAddToCartClicked: PropTypes.func.isRequired
}

export default ProductItem;
