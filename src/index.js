import ReactDOM from 'react-dom';
import App from './App';
import react from 'react';
import { Provider } from 'react-redux';
/* import { BrowserRouter } from 'react-router-dom'; */
import { store } from './redux/store';

import 'modern-normalize/modern-normalize.css';
import 'index.css';
const root = document.querySelector('#root');

ReactDOM.render(
  <react.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </react.StrictMode>,
  root,
);
