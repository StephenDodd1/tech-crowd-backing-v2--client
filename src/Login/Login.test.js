import React from 'react';
import ReactDOM from 'react-dom';
import Login from './Login.js';
import { BrowserRouter } from 'react-router-dom';

  it('renders app', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>, div)
    ReactDOM.unmountComponentAtNode(div)
  })