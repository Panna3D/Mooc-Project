import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import React from 'react';
import { AuthContextProvider } from './store/auth-context';

import cartStore from './store/reducer';
import './index.css';
import App from './App';

import { BrowserRouter} from 'react-router-dom';

ReactDOM.render(
  <AuthContextProvider>
    <BrowserRouter>
      <Provider store={cartStore}>
        <App />
      </Provider>
  </BrowserRouter>
  </AuthContextProvider>
,
  document.getElementById('root')
);    