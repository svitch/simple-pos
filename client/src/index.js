import React, { Component } from 'react';
import { render } from 'react-dom';
import Products from './components/Products';
import axios from 'axios';
import logo from './logo.svg';
import './styles.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      cart: []
    }
  }
  getProducts() {
    axios.get('/goods').then(response => {
      this.setState({
        products: response.data
      });
    });
  }
  componentWillMount() {
    this.getProducts();
  }
  render() {
    return (
      <div id="page">
        <div id="header">
          <div className="container">
            <div className="row">
              <div className="col">
                <img src={logo} id="page-logo" alt="logo" />
              </div>
              <div className="col-auto">
                <div className="cart">
                  <div className="cart-title">Корзина</div>
                  <span className="cart-quantity">0 товаров</span> / <span className="cart-price">0 руб.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="main">
          <div className="page-heading">
            <div className="container">Только свежие продукты</div>
          </div>
          <Products
            products={this.state.products}
          />
        </div>
        <div id="footer">
          <div className="container">
            <div className="row">
              <div className="col-md">&copy; 2018 КООПТОРГ - магазин всего четырех товаров</div>
              <div className="col-md-auto">demo by Sergey S.</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('root') );