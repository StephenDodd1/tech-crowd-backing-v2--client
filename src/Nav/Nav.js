import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Nav extends Component {
   render() {
      const userSignup = !this.props.user.userId ? <li><Link className = 'nav-link' to='../../../Signup/'>Signup</Link></li> : <li><Link className = 'nav-link' to='../../../contact/'>Contact</Link></li>
      const userLogin = !this.props.user.userId ? <li><Link className = 'nav-link' to='../../../Login/'>LOGIN</Link></li> : <li><Link className='nav-link' to='../../../CreatePost'>POST</Link></li>
      return(
         <nav className='right'>
            <ul>
               <li><Link className = 'nav-link' to='../../../'>Home</Link></li>
               {userSignup}
               {userLogin}
               <li><Link className = 'nav-link' to='../../../Demo/'>DEMO</Link></li>
            </ul>
         </nav>
      )
   }
}