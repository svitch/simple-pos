import axios from 'axios';
import uuid from 'uuid';
import * as types from '../constants/ActionTypes';

const receiveProducts = products => ({
  type: types.RECEIVE_PRODUCTS,
  products
});

export const getAllProducts = () => dispatch => {
  axios
    .get('/goods', { headers: { 'X-Autorization': uuid() } })
    .then(response => dispatch(receiveProducts(response.data)))
    .catch(error => console.log(error.message));
}

const addToCartUnsafe = productId => ({
  type: types.ADD_TO_CART,
  productId
});

export const addToCart = productId => (dispatch, getState) => {
  if (getState().products.byId[productId].quantity > 0) {
    dispatch(addToCartUnsafe(productId));
  }
}

export const checkout = products => (dispatch, getState) => {
  const { cart } = getState();

  dispatch({
    type: types.CHECKOUT_REQUEST
  });

  axios
    .post('/sell', {
      type: 'SELL',
      datetime: (new Date()).toISOString(),
      goods_list: products
    })
    .then(() => dispatch({ type: types.CHECKOUT_SUCCESS, cart }))
    .catch(error => console.log(error.message));
}