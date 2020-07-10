import React, { Component } from 'react';

export default class Login extends Component {
   render() {
      return(
         <div id='login-container'>
            <h3>LOGIN -- TechCrowdBacking</h3>
            <form>
               <div className='input-label'>
                  <label htmlFor='email-address'>Email</label>
                  <input id='email-address' class='input'/>
               </div>
               <div className='input-label'>
                  <label htmlFor='password'>Create Password</label>
                  <input id='password' class='input'/>
               </div>
               <button type='submit'>Submit</button>
            </form>
         </div>
      )
   }
}