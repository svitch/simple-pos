import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addToCart } from '../actions';
import { getVisibleProducts } from '../reducers/products';
import ProductItem from '../components/ProductItem';
import ProductsList from '../components/ProductsList';

const ProductsContainer = ({ products, addToCart }) => (
  <ProductsList title="Только свежие продукты">
    {products.map(product =>
      <ProductItem
        key={product.uuid}
        product={product}
        onAddToCartClicked={() => addToCart(product.uuid)} />
    )}
  </ProductsList>
);

ProductsContainer.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    uuid: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired
  })).isRequired,
  addToCart: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  products: getVisibleProducts(state.products)
});

export default connect(
  mapStateToProps,
  { addToCart }
)(ProductsContainer);