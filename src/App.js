import React, { Component } from "react";
import Header from "./Header/Header";
import Landing from "./Landing/Landing";
import Signup from "./Signup/Signup";
import Login from "./Login/Login";
import Demo from "./Demo/Demo";
import CreatePost from "./CreatePost/CreatePost";
import { Route, Switch, Redirect } from "react-router-dom";
import config from './config';
import { withRouter } from 'react-router-dom';
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
  }
  createPost = (e) => {
    e.preventDefault();
    const type = e.target.type.value;
    const title = e.target.title.value;
    const content = e.target.content.value;
    const userid = 1;
    const newPost = {
      userid,
      type,
      title,
      content,
    };
    fetch(`${config.API_ENDPOINT}/api/posts`, {
      method: "POST",
      mode: "cors",
      credentials: "same-origin",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${config.API_TOKEN}`,
      },
      body: JSON.stringify(newPost),
    })
      .then((res) => res.json())
      .then((data) => this.setState({
        posts: data
      }))
      .then(this.props.history.push("/Demo"));
  };
  render() {
    console.log(this.context.userId)
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route path="/home" component={Landing} />
          <Route path="/Signup/" component={Signup} />
          <Route path="/Login/" component={Login} />
          <Route path="/Demo/" component={Demo} />
          <Route
            path="/CreatePost/"
            render={() => <CreatePost createPost={this.createPost} />}
          />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
