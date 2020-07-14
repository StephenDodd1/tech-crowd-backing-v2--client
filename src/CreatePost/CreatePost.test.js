import React from 'react';
import ReactDOM from 'react-dom';
import CreatePost from './CreatePost.js';
import { BrowserRouter } from 'react-router-dom';

  it('renders app', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <CreatePost />
      </BrowserRouter>, div)
    ReactDOM.unmountComponentAtNode(div)
  })