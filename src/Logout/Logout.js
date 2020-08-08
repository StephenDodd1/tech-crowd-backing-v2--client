import React, { Component } from "react";

export default class LogoutButton extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <button type='click' onClick={this.props.logout}>Logout</button>
      </div>
    );
  }
}
