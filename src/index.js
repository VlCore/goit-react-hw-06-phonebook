import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import storage from 'storage';
import App from 'components/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={storage}>
  <App />
</Provider>,
);