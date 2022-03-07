import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from '../src/components/Store/index.js';

// Declear provider for high level component to use Redux
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);
