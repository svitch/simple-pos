import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import ProductsContainer from './ProductsContainer';

const App = () => (
  <div id="page">
    <Header />
    <ProductsContainer />
    <Footer />
  </div>
);

export default App;