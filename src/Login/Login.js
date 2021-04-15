import React, { Component } from "react";
import config from "../config";
import LoginService from "./login-service";
import { UserContext } from "../Context";

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
  static contextType = UserContext;

  handleSubmitBasicAuth = (e) => {
    e.preventDefault();
    const { username, password } = e.target;
    LoginService.saveAuthToken(
      LoginService.makeBasicAuthToken(username.value, password.value)
    );
    fetch(`${config.API_ENDPOINT}/api/user`, {
      method: "POST",
      mode: "cors",
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
        this.setState({ userId: data.data.user.userid });
        this.context.loginUser(data.data.user.userid);
        return this.onLoginSuccess();
      });
    username.value = "";
    password.value = "";
  };
  onLoginSuccess = () => {
    const { location, history } = this.props;
    const destination = (location.state || {}).from || "/Demo";
    history.push(destination);
  };
  render() {
    return (
      <div id="login-container">
        <h3>LOGIN -- TechCrowdBacking</h3>
        <form onSubmit={this.handleSubmitBasicAuth}>
          <div className="input-label">
            <label htmlFor="username">Username</label>
            <input id="username" name="username" className="input" />
          </div>
          <div className="input-label">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              className="input"
              autocomplete="current-password"
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
