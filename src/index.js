import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import { UserContext } from './Context';

ReactDOM.render(
 
    <BrowserRouter>
      <UserContext>
        <App />
      </UserContext>
    </BrowserRouter>,
 
  document.getElementById('root')
);
