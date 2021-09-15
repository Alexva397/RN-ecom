import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import productsReducer from './store/reducers/products';
import ShopNavigator from './navigation/shopNavigator';

const rootReducer = combineReducers({
  products: productsReducer
});

const store = createStore(rootReducer);

export default function App() {
  console.log(store)

  return (
    <Provider store={store}>
      <ShopNavigator />
    </Provider>
  );
}


