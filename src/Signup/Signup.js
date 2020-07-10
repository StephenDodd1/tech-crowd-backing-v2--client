import React, { Component } from 'react';

export default class Signup extends Component {
   render() {
      return(
         <div id='signup-form-container'>
            <h3>Signup -- TechCrowdBacking</h3>
            <form>
               <div class='input-label'>
                  <label htmlFor='email-address'>Email</label>
                  <input id='email-address' class='input'/>
               </div>
               <div class='input-label'>
                  <label htmlFor='password'>Create Password</label>
                  <input id='password' class='input'/>
               </div>
               <div class='input-label'>
                  <label htmlFor='confirm-password'>Confirm Password</label>
                  <input id='confirm-password' class='input'/>
               </div>
               <div class='input-label'>
                  <label htmlFor='screen-name'>Screen Name</label>
                  <input id='screen-name' class='input'/>
               </div>
               <div class='input-label'>
                  <label htmlFor='first-name'>First Name</label>
                  <input id='first-name' class='input'/>
               </div>
               <div class='input-label'>
                  <label htmlFor='last-name'>Last Name</label>
                  <input id='last-name' class='input'/>
               </div>
               <div class='input-label'>
                  <label htmlFor='date-of-birth'>Date of Birth</label>
                  <input id='date-of-birth' class='input'/>
               </div>
               <button type='submit'>Create Account Now</button>
            </form>
         </div>
      )
   }
}