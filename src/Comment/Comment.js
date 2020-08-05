import React, { Component, useState } from "react";
import config from "../config";
import { Link, withRouter } from "react-router-dom";
import UserContextConsumer from "../Context";

class Comment extends Component {
  //static contextType = UserContextConsumer;
  constructor(props) {
    super(props);
  }
 /* componentDidUpdate() {
    const [comments] = React.useState({ comments: this.context.comments });
  }*/
  submitComment = (e) => {
    //console.log(this.context.comments);
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
      .then(res=> {
        this.props.history.push("/Demo");
        return alert("Refresh the page to view your comment");
      })
  };
  render() {
    //console.log(this.context.comments);
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
