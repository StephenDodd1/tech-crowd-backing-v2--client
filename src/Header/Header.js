import React from 'react';
import Nav from '../Nav/Nav'

export default function Header(props) {
   return(
      <header className="App-header">
         <Nav user={props.user}/>
         <h1>#TechCrowdBacking</h1>
         <h2>Tech for Investors<br/>
             Investing for Tech</h2>
      </header>
   )
}