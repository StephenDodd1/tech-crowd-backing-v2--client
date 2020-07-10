import React, { Component } from 'react';
import Header from './Header/Header';
import Landing from './Landing/Landing';
import Signup from './Signup/Signup';
import Login from './Login/Login';
import Demo from './Demo/Demo'
import { Route , Switch , Redirect} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' >
          <Redirect to='/home'/>
        </Route>
        <Route path='/home' component={Landing} />
        <Route path='/Signup/' component={Signup} />
        <Route path='/Login/' component={Login} />
        <Route path='/Demo/' component={Demo} />
      </Switch>
    </div>
  );
}

export default App;
