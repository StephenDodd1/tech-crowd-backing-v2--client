import React from 'react';
import ReactDOM from 'react-dom';
import Comment from './Comment.js';
import { BrowserRouter } from 'react-router-dom';

  it('renders app', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <Comment />
      </BrowserRouter>, div)
    ReactDOM.unmountComponentAtNode(div)
  })