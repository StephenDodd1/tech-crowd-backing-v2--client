import React, { Component } from "react";
import { UserContext } from "./Context";
import Header from "./Header/Header";
import Landing from "./Landing/Landing";
import Signup from "./Signup/Signup";
import Login from "./Login/Login";
import Demo from "./Demo/Demo";
import CreatePost from "./CreatePost/CreatePost";
import Contact from './Contact/Contact'
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import config from "./config";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      posts: [],
    };
    this.logout = this.logout.bind(this);
    this.login = this.login.bind(this);
  }
  logout() {
    this.setState({ user: {} });
    return this.props.history.push('/')
  }
  login(userid) {
    this.setState({ user: { userId: userid } });
  }
  createPost = (e) => {
    e.preventDefault();
    if(e.target.user_id.value) {
    const type = e.target.type.value;
    const title = e.target.title.value;
    const content = e.target.content.value;
    const userid = e.target.user_id.value;
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
      .then((res) => this.props.history.push("/Demo"));
    }
    else alert('You must be logged in to create a post')
  };
  render() {
    const value = {
      user: this.state.user,
      logoutUser: this.logout,
      loginUser: this.login,
    };
    return (
      <UserContext.Provider value={value}>
        <div className="App">
          <Header user={this.state.user}/>
          <Switch>
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
            <Route path="/home" component={Landing} />
            <Route path="/Signup/" component={Signup} />
            <Route path="/Contact/" component={Contact} />
            <UserContext.Consumer>
              {({ user, loginUser, logoutUser }) => {
                return (
                  <>
                    <Route
                      path="/Demo/"
                      render={() => {
                        return <Demo logout={logoutUser} />;
                      }}
                    />
                    <UserContext.Consumer>
                      {({ user }) => (
                        <Route
                          path="/CreatePost/"
                          render={() => {
                            return (
                              <>
                                <CreatePost
                                  user={user}
                                  createPost={this.createPost}
                                />
                              </>
                            );
                          }}
                        />
                      )}
                    </UserContext.Consumer>
                    <Route
                      user={user}
                      login={loginUser}
                      path="/Login/"
                      component={Login}
                    />
                  </>
                );
              }}
            </UserContext.Consumer>
            <Route path="/:route">
              <Redirect to="/Demo" />
            </Route>
          </Switch>
        </div>
      </UserContext.Provider>
    );
  }
}

export default withRouter(App);
