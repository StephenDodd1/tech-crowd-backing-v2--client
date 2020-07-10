import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header.js';
import { BrowserRouter } from 'react-router-dom';

  it('renders app', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>, div)
    ReactDOM.unmountComponentAtNode(div)
  })