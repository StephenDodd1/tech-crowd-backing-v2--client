import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';


export default class Nav extends Component {
   render() {
      return(
         <nav className='right'>
            <ul>
               <li><Link to='../'>Home</Link></li>
               <li><Link to='../Signup/'>Signup</Link></li>
               <li><Link to='../Login/'>LOGIN</Link></li>
               <li><Link to='../Demo/'>DEMO</Link></li>
            </ul>
         </nav>
      )
   }
}