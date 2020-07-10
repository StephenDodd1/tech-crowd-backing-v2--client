import React from 'react';
import ReactDOM from 'react-dom';
import Demo from './Demo.js';
import { BrowserRouter } from 'react-router-dom';

  it('renders app', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <Demo />
      </BrowserRouter>, div)
    ReactDOM.unmountComponentAtNode(div)
  })