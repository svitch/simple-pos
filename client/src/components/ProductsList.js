import React from 'react';
import PropTypes from 'prop-types';

const ProductsList = ({ title, children }) => (
  <div id="main">
    <div className="page-heading">
      <div className="container">{title}</div>
    </div>
    <div className="section">
      <div className="container">
        <div className="row product-list">{children}</div>
      </div>
    </div>
  </div>
);

ProductsList.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node
}

export default ProductsList;