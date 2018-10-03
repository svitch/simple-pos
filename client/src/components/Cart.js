import React from 'react';
import PropTypes from 'prop-types';
import ProductSm from './ProductSm';

const Cart = ({ products, total, onCheckoutClicked }) => {
  const hasProducts = products.length > 0
  const suffix =
    (products.length > 4) ? 'товаров' : (products.length > 1 && products.length < 5) ? 'товара' : 'товар'
  const nodes = hasProducts ? (
    products.map(product =>
      <ProductSm
        name={product.name}
        price={product.price}
        quantity={product.quantity}
        key={product.uuid}
      />
    )
  ) : ( '' );

  return (
    <div className="cart">
      <div className="cart-title">Корзина</div>
      { hasProducts ?
      <div>
        <span className="cart-quantity">{products.length} {suffix}</span> / <span className="cart-price">{total} руб.</span>
        <div className="card cart-dropdown">
          <div className="cart-nodes">{nodes}</div>
          { hasProducts ? 
          <button className="btn btn-success btn-sm btn-block" onClick={onCheckoutClicked}
            disabled={hasProducts ? '' : 'disabled'}>
            Оформить заказ
          </button> : null }
        </div>
      </div> : 'Ваша корзина пуста.' }
    </div>
  )
}

Cart.propTypes = {
  products: PropTypes.array,
  total: PropTypes.string,
  onCheckoutClicked: PropTypes.func
}

export default Cart;