import React, { Component, useState } from "react";
import config from "../config";
import { Link, withRouter } from "react-router-dom";
import Context from "../Context";

class Comment extends Component {
  static contextType = Context;
  submitComment = (e) => {
    e.preventDefault();
    const comment = e.target.comment.value;
    const addedComment = { comment };
    fetch(`${config.API_ENDPOINT}/api/${this.props.postId}/comment`, {
      method: "POST",
      mode: "cors",
      credentials: "same-origin",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${config.API_TOKEN}`,
      },
      body: JSON.stringify(addedComment),
    })
      .then((res) => res.json())
      .then((data) => this.setState({ comments: data }))
      .then((res) => {
         alert('Refresh the page to view your comment')
         return this.props.history.push("/Demo")});
  };
  render() {
     console.log(this.Context.comments)
    const [comments] = React.useState({ comments: this.Context.comments });
    return (
      <div>
        <form onSubmit={this.submitComment}>
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
