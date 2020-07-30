import React, { Component } from "react";
import config from "../config";
import moment from "moment";

export default class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
    }
  }

  handleDelete = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    fetch(`${config.API_ENDPOINT}/api/comments/${e.target.value}`, {
      method: "DELETE",
      mode: "cors",
      credentials: "same-origin",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${config.API_TOKEN}`,
      },
    }).then(
      this.setState({
        comments: this.state.comments.filter((comments) => {
          console.log(comments.commentId);
          return comments.commentId !== Number(e.target.value);
        }),
      })
    );
  };

  componentDidMount() {
    fetch(`${config.API_ENDPOINT}/api/${this.props.postId}/comments`, {
      method: "GET",
      mode: "cors",
      credentials: "same-origin",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${config.API_TOKEN}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        this.setState({ comments: data });
      });
  }

  render() {
    return (
      <ul id="comments-box">
        {this.state.comments.map((comment, i) => {
          return (
            <li className="comment-box" key={i}>
              <h5>
                Posted by: {this.props.username} {" "}
                {moment(this.props.post_date).fromNow()}
              </h5>
              <p className="comment-content">{comment.comment}</p>
              <button
                className="delete-button"
                type="click"
                onClick={this.handleDelete}
                value={comment.commentId}
                name={comment.userId}
              >
                &ndash;
              </button>
            </li>
          );
        })}
      </ul>
    );
  }
}
