import React, { Component } from "react";
import config from "../config";
import { Link, withRouter } from "react-router-dom";

class Comment extends Component {
  render() {
   console.log(this.props.submitComment)
   console.log(this.props.postId)
    return (
      <div>
        <form onSubmit={this.props.submitComment}>
          <textarea
            placeholder="Enter your comment here. Remember to be respectful."
            name="comment"
          />
          <br />
          <button type="submit" className="submit-button">
            Submit
          </button>
          <button type="click">
            <Link to="../../../Demo/">Cancel</Link>
          </button>
        </form>
      </div>
    );
  }
}
export default withRouter(Comment);
