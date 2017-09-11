import Reducer from '../reducers';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import ThunkMiddleware from 'redux-thunk';

export function getStore() {
  const finalCreateStore = compose(
    applyMiddleware(
      ThunkMiddleware,
    ),
  )(createStore);

  return finalCreateStore(Reducer);
}
