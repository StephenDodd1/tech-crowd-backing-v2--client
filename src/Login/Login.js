import React, { Component } from 'react';
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
      username.value = '';
      password.value = '';
      console.log('login ran')
      this.props.onLoginSuccess();
   }
   onloginSuccess = () => {
      const { location, history } = this.props;
      const destination = (location.state || {}).from || '/'
      console.log('login success')
      this.history.push(destination)
   }
   render() {
      return(
         <div id='login-container'>
            <h3>LOGIN -- TechCrowdBacking</h3>
            <form onSubmit={this.handleSubmitBasicAuth}>
               <div className='input-label'>
                  <label htmlFor='username'>Username</label>
                  <input id='username' className='input'/>
               </div>
               <div className='input-label'>
                  <label htmlFor='password'>Create Password</label>
                  <input id='password' type='password' className='input'/>
               </div>
               <button type='submit'>Submit</button>
            </form>
         </div>
      )
   }
}