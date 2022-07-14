/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useEffect } from 'react';

import { Provider } from 'react-redux';
import generateStore from './redux/store';

import Root from './screens/Root';

const App = () => {
  const store = generateStore()

  return (
    <Provider store={store}>
      <Root/>
    </Provider>

  );
}

export default App;
