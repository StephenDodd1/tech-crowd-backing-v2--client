import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import { UserContext } from './Context';

ReactDOM.render(
 // <UserContext>
    <BrowserRouter>
      <App />
    </BrowserRouter>,
 //</UserContext>,
  document.getElementById('root')
);
