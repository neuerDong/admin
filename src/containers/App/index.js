/**
 * External dependencies
 */
import React from 'react';
import { Provider } from 'react-redux';

/**
 * Internal dependencies
 */
import * as storeConfig from '../../store/index';
import Route from '../../routes/index';


export default () => {
  const store = storeConfig.getStore();

  return (
    <Provider store={store}>
      <Route />
    </Provider>
  );
};
