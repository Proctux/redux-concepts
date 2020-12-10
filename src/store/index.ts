import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import rootReducer from '../store/modules/rootReducer';

import { ICartState } from '../store/modules/cart/types';
import rootSaga from './modules/rootSaga';

export interface IState {
  cart: ICartState
}

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware]

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(...middlewares)
));

sagaMiddleware.run(rootSaga)

export default store;