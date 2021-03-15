import React, { Component } from "react";
import config from "../config";
import moment from "moment";
import { UserContext } from '../Context'

export default class Comments extends Component {
  static contextType = UserContext
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
    }
  }

  handleDelete = (e) => {
    e.preventDefault();
    const userId = this.context.user.userId
    console.log(userId, e.target.name)
    if(userId !== Number(e.target.name)){
      alert(`You cannot delete comments you did not create.`)
      return;
    }
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
    console.log(this.state.comments)
    return (
      <ul id="comments-box">
        {this.state.comments.map((comment, i) => {
          return (
            <li className="comment-box" key={i}>
              <h5 className='comment-header'>
                Posted by: {comment.username} {" "}
                {moment(comment.comment_date).fromNow()}
              </h5>
              <p className="comment-content">{comment.comment}</p>
              <button
                className="delete-button"
                type="click"
                onClick={(e) =>this.handleDelete(e)}
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
