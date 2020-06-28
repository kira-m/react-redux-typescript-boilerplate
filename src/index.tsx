import React from 'react'; // eslint-disable-line no-unused-vars
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';
import App from './components/App';
import './styles/tailwind.css';

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>
, document.getElementById('app')
);