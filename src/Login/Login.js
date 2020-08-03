import React, { Component } from 'react';
import config from '../config'
import LoginService from './login-service';

export default class Login extends Component {
   static defaultProps = {
      location: {},
      history: {
         push: () => {},
      },
      onLoginSuccess: () => {},
   }
   state = { error: null };
   handleSubmitBasicAuth = (e) => {
      e.preventDefault();
      const { username, password } = e.target;
      LoginService.saveAuthToken(
         LoginService.makeBasicAuthToken(username.value, password.value)
      );
      console.log(username)
      console.log(password.value)
      console.log(config.TOKEN_KEY)
      fetch(`${config.API_ENDPOINT}/api/user`, {
         method: "POST",
         mode: "cors",
         credentials: "same-origin",
         headers: {
           "Content-type": "application/json",
           Authorization: `basic ${config.TOKEN_KEY}`,
         }
      })
      username.value = '';
      password.value = '';
      this.onLoginSuccess();
   }
   onLoginSuccess = () => {
      const { location, history } = this.props;
      const destination = (location.state || {}).from || '/Demo'
      history.push(destination)
   }
   render() {
      return(
         <div id='login-container'>
            <h3>LOGIN -- TechCrowdBacking</h3>
            <form onSubmit={this.handleSubmitBasicAuth}>
               <div className='input-label'>
                  <label htmlFor='username'>Username</label>
                  <input id='username' name='username' className='input'/>
               </div>
               <div className='input-label'>
                  <label htmlFor='current-password'>Password</label>
                  <input id='current-password' name='password' type='password' className='input'/>
               </div>
               <button type='submit'>Submit</button>
            </form>
         </div>
      )
   }
}