import React, { Component } from "react";
import { UserContext } from "./Context";
import Header from "./Header/Header";
import Landing from "./Landing/Landing";
import Signup from "./Signup/Signup";
import Login from "./Login/Login";
import Demo from "./Demo/Demo";
import CreatePost from "./CreatePost/CreatePost";
import LogoutButton from "./Logout/Logout";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import config from "./config";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      user: {},
    };
    this.logout = this.logout.bind(this);
  }
  logout() {
    this.setState({ user: {} });
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
      .then((data) =>
        this.setState({
          posts: data,
        })
      )
      .then(this.props.history.push("/Demo"));
  };
  render() {
    const value = {
      user: this.state.user,
      logoutUser: this.logout,
    };
    //console.log(this.context.userId)
    return (
      <UserContext.Provider>
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
            <UserContext.Consumer>
              {({ user, logoutUser }) => (
                <Route
                  path="/CreatePost/"
                  render={() => {
                    return (
                      <>
                        <LogoutButton onClick={logoutUser} />
                        <CreatePost value={user} createPost={this.createPost} />
                      </>
                    );
                  }}
                />
              )}
            </UserContext.Consumer>
          </Switch>
        </div>
      </UserContext.Provider>
    );
  }
}

export default withRouter(App);
