import React, { Component } from "react";
import config from "../config";
import LoginService from "./login-service";
import { UserContext } from '../Context'

export default class Login extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
    onLoginSuccess: () => {},
  };
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      userId: null,
    };
  }
  handleSubmitBasicAuth = (e) => {
    e.preventDefault();
    const { username, password } = e.target;
    LoginService.saveAuthToken(
      LoginService.makeBasicAuthToken(username.value, password.value)
    );
    console.log(LoginService.getAuthToken());
    fetch(`${config.API_ENDPOINT}/api/user`, {
      method: "POST",
      mode: "cors",
      credentials: "same-origin",
      headers: {
        "Content-type": "application/json",
        Authorization: `basic ${LoginService.getAuthToken()}, Bearer ${
          config.API_TOKEN
        }`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        window.localStorage.setItem(config.JWT_TOKEN, data.data.jwtToken);
        console.log(data.data)
        console.log(this.context)
        return this.onLoginSuccess();
      });
    username.value = "";
    password.value = "";
  };
  onLoginSuccess = () => {
    console.log(this.state.userId);
    const { location, history } = this.props;
    const destination = (location.state || {}).from || "/Demo";
    this.context.login()
    history.push(destination);
  };
  render() {

  Login.contextType=UserContext;
    return (
      //<UserContext.Consumer></UserContext.Consumer>
      <div id="login-container">
        <h3>LOGIN -- TechCrowdBacking</h3>
        <form onSubmit={this.handleSubmitBasicAuth
         }>
          <div className="input-label">
            <label htmlFor="username">Username</label>
            <input id="username" name="username" className="input" />
          </div>
          <div className="input-label">
            <label htmlFor="current-password">Password</label>
            <input
              id="current-password"
              name="password"
              type="password"
              className="input"
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      )}
     
  }

