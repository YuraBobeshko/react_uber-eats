import React from 'react';
import { Provider } from 'react-redux';
import './App.scss';
import { store } from './store';
import { RestaurantsListPage } from './components/RestaurantsListPage/RestaurantsListPage'

export const App = () => (
  <Provider store={store}>
    <div className="page">
      <RestaurantsListPage />
    </div>
  </Provider>
);
