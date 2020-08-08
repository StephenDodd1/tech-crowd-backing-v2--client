import React, { Component } from "react";

export default class LogoutButton extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <button onClick={this.props.logout}>Logout</button>
      </div>
    );
  }
}
