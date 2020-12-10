import { createStore } from 'redux';
import rootReducer from '../store/modules/rootReducer';

import { ICartState } from '../store/modules/cart/types';

const store = createStore(rootReducer);

export interface IState {
  cart: ICartState
}

export default store;