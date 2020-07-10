import React from 'react';
import ReactDOM from 'react-dom';
import Nav from '../Nav/Nav'

export default function Header() {
   return(
      <header className="App-header">
         <Nav />
         <h1>TechCrowdBacking</h1>
         <h2>Some content</h2>
      </header>
   )
}