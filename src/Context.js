import React, { Component } from "react";
const { Provider, Consumer } = React.createContext();
class UserContext extends Component {
  state = {
    userAuth: false,
    userId: 0,
  };
  toggleUserAuth = () => {
    this.setState((prevState) => {
      return {
        userAuth: prevState.userAuth === false ? true : false,
      };
    });
  };
  updateUserId = () => {
    this.setState((prevState) => {
      return {
        userId: user.userId,
      };
    });
  };
  render() {
    return (
      <Provider
        value={{
          userAuth: this.state.userAuth,
          toggleUserAuth: this.toggleUserAuth,
          userId: this.state.userId,
          updateUserId: this.updateUserId,
        }}
      ></Provider>
    );
  }
}

export default { UserContext }
export { Consumer as UserContextConsumer };
