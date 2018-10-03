import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div id="footer">
        <div className="container">
          <div className="row">
            <div className="col-md">&copy; {new Date().getFullYear()} КООПТОРГ - магазин всего четырех товаров</div>
            <div className="col-md-auto">demo by Sergey S.</div>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer;