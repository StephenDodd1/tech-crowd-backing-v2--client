import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './Nav.js';
import { BrowserRouter } from 'react-router-dom';

  it('renders app', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <Nav />
      </BrowserRouter>, div)
    ReactDOM.unmountComponentAtNode(div)
  })