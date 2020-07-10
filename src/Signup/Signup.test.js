import React from 'react';
import ReactDOM from 'react-dom';
import Signup from './Signup.js';
import { BrowserRouter } from 'react-router-dom';

  it('renders app', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <Signup />
      </BrowserRouter>, div)
    ReactDOM.unmountComponentAtNode(div)
  })