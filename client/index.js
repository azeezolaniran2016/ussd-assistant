import 'babel-polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './Routes';
import './style/index.css';

ReactDOM.render(
  <Router history={browserHistory} routes={Routes} />,
  document.getElementById('root')
);
