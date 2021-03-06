import React from 'react';
import ReactDOM from 'react-dom';
import Landing from './Landing.js';
import { BrowserRouter } from 'react-router-dom';

  it('renders app', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <Landing />
      </BrowserRouter>, div)
    ReactDOM.unmountComponentAtNode(div)
  })