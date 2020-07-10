import React, { Component } from 'react';
import Header from './Header/Header';
import Landing from './Landing/Landing';
import Signup from './Signup/Signup';
import Login from './Login/Login';
import Demo from './Demo/Demo'
import { Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Header />
      <Route exact path='/' component={Landing} />
      <Route path='/Signup/' component={Signup} />
      <Route path='/Login/' component={Login} />
      <Route path='/Demo/' component={Demo} />
    </div>
  );
}

export default App;
