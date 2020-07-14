import React from 'react';
import ReactDOM from 'react-dom';
import Post from './Post.js';
import { BrowserRouter } from 'react-router-dom';

  it('renders app', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <Post />
      </BrowserRouter>, div)
    ReactDOM.unmountComponentAtNode(div)
  })