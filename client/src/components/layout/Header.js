import React, { Component } from 'react';
import CartContainer from '../../containers/CartContainer';
import logo from '../../logo.svg';

class Header extends Component {
  render() {
    return (
      <div id="header">
        <div className="container">
          <div className="row">
            <div className="col">
              <img src={logo} id="page-logo" alt="logo" />
            </div>
            <div className="col-auto">
              <CartContainer />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Header;