import React, { useState } from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import productsReducer from './store/reducers/products';
import ShopNavigator from './navigation/shopNavigator';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });
};

const rootReducer = combineReducers({
  products: productsReducer
});

const store = createStore(rootReducer);

export default function App() {

  const [loaded, setLoaded] = useState(false);

  if (!loaded) {
    return ( 
      <AppLoading 
      startAsync={fetchFonts}
      onFinish={() => setLoaded(true)}
      onError={(err) => console.log(err)}
      />
    );
  }

  return (
    <Provider store={store}>
      <ShopNavigator />
    </Provider>
  );
}


