import React, { Component } from 'react';

class Products extends Component {
  constructor() {
    super();
  }
  render() {
    const products = this.props.products;
    return (
      <div className="section">
        <div className="container">
          <div className="row product-list">
          {products.map(product => (
            <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="card product-small">
                <div className="card-body">
                  <div className="product-name">{product.name}</div>
                  <div className="product-price">{product.price} руб.</div>
                  <div className="product-stock">{product.quantity} шт.</div>
                  <div className="product-button">
                    <a href="#" className="btn btn-warning btn-block">Купить</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Products;