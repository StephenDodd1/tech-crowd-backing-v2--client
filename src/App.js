import React, { Component } from 'react';
import Header from './Header/Header';
import Landing from './Landing/Landing';
import Signup from './Signup/Signup';
import Login from './Login/Login';
import Demo from './Demo/Demo';
import Post from './Post/Post';
import CreatePost from './CreatePost/CreatePost';
import { Route , Switch , Redirect} from 'react-router-dom';
import './App.css';

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
        <Route path='/CreatePost/' component={CreatePost} />
      </Switch>
    </div>
  );
}

export default App;
