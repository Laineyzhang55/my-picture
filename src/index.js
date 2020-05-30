import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd/dist/antd.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {
  BrowserRouter as Router
} from 'react-router-dom';
import {Helmet} from 'react-helmet';

ReactDOM.render(  
    <Router>
      <Helmet>
      <title>My Picture</title>
      </Helmet>
      <App />
    </Router>
 ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();