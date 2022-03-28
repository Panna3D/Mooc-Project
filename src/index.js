import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import React from 'react';

import store from './store/reducer';
import './index.css';
import App from './App';
// import App from './AppRouter';

import { BrowserRouter} from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);    