import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from '../store/modules/rootReducer';

import { ICartState } from '../store/modules/cart/types';

export interface IState {
  cart: ICartState
}

const store = createStore(rootReducer, composeWithDevTools());

export default store;