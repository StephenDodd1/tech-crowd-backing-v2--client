import React, { Component } from "react";
import config from "../config";

export default class Signup extends Component {
  constructor(props){
    super(props);
  }
  handleSignup = (e) => {
    e.preventDefault();
    const t = e.target;
    if (!t["email"].value) {
      return alert("email is required");
    } else if (t.password.value !== t["confirm-password"].value) {
      return alert("password is incorrect");
    } else if (!t.username.value) {
      return alert("username is required");
    } else if (!t.firstname.value || !t.lastname.value) {
      return alert("first and last name required");
    } else if (!t.dob.value) {
      return alert("must enter a valid date of birth and be over 18 years old");
    } else {
      const email = t.email.value;
      const password = t.password.value;
      const username = t.username.value;
      const fn = t.firstname.value;
      const ln = t.lastname.value;
      const dob = t.dob.value;
      const user = { email, password, username, fn, ln, dob };
      fetch(`${config.API_ENDPOINT}/api/users`, {
        method: "POST",
        mode: "cors",
        credentials: "same-origin",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${config.API_TOKEN}`,
        },
        body: JSON.stringify(user),
      }).then((res) => {
        if (!res.ok) {
          throw new Error("Something went wrong");
        }
        res.json(200, alert("user created"));
        return this.history.push('/Demo')
      });
    }
  };
  render() {
    return (
      <div name="signup-form-container">
        <h3>Signup -- TechCrowdBacking</h3>
        <form onSubmit={this.handleSignup}>
          <div className="input-label">
            <label htmlFor="email">Email</label>
            <input name="email" className="input" />
          </div>
          <div className="input-label">
            <label htmlFor="password">Create Password</label>
            <input name="password" type="password" className="input" />
          </div>
          <div className="input-label">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input name="confirm-password" type="password" className="input" />
          </div>
          <div className="input-label">
            <label htmlFor="username">Screen Name</label>
            <input name="username" className="input" />
          </div>
          <div className="input-label">
            <label htmlFor="firstname">First Name</label>
            <input name="firstname" className="input" />
          </div>
          <div className="input-label">
            <label htmlFor="lastname">Last Name</label>
            <input name="lastname" className="input" />
          </div>
          <div className="input-label">
            <label htmlFor="dob">Date of Birth</label>
            <input name="dob" className="input" />
          </div>
          <button type="submit">Create Account Now</button>
        </form>
      </div>
    );
  }
}
