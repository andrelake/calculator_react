import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Calculator from './main/Calculator';

ReactDOM.render(
  <>
    <h1>Calculator</h1>
    <Calculator />
  </>,
  document.getElementById('root')
);

serviceWorker.unregister();
