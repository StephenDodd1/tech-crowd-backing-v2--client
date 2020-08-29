import React, { Component, /*useState*/ } from "react";
import config from "../config";
import { Link, withRouter } from "react-router-dom";
import { UserContext } from "../Context";

class Comment extends Component {
  constructor(props) {
    super(props);
  }
  static contextType = UserContext;
  submitComment = (e) => {
    e.preventDefault();
    console.log(this.context)
    const comment = e.target.comment.value;
    const userid = this.context.user.userId;
    const addedComment = { comment, userid };
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
      })
  };
  render() {
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
          <button type="click" className='submit-button'>
            <Link to="../../../Demo/">Cancel</Link>
          </button>
        </form>
      </div>
    );
  }
}
export default withRouter(Comment);
