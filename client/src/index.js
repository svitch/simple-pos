import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './reducers';
import { getAllProducts } from './actions';
import App from './containers/App';
import './styles.css';

const middleware = [thunk];
const store = createStore(
  reducer,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

store.dispatch(getAllProducts());

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);