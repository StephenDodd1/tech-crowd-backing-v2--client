import React, { Component } from "react";
import config from "../config";
import { Link, Route, withRouter } from "react-router-dom";
import Comment from "../Comment/Comment";
import Comments from "../Comments/Comments";
import UpdatePost from "../UpdatePost/UpdatePost";
import moment from "moment";

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: this.props.posts,
    };
  }
  //static ContextType = UserContextConsumer;

  handleUpdate = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const content = e.target.content.value;
    const type = e.target.type.value;
    const post = { title, content, type };
    fetch(`${config.API_ENDPOINT}/api/post/${e.target.post_id.value}`, {
      method: "PATCH",
      mode: "cors",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${config.API_TOKEN}`,
      },
      body: JSON.stringify(post),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Something went wrong");
        }
        return res.json();
      })
      .then((res) => {
        this.props.history.push("/");
      });
  };

  updateComments = () => {
    return window.location.reload(false);
  };

  render() {
    return (
      <ul>
        {this.props.posts.map((post, i) => {
          return (
            <li className={`${post.postId} 'post-box'`} key={i}>
              <div className="title-container" id={post.title}>
                <h4 className="post-name">{post.title}</h4>
                <Link
                  className="fa-container"
                  to={`../../../Demo/${post.postId}/Update`}
                >
                  <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                </Link>
              </div>
              <h5>
                Posted by: {post.userId} on {moment(post.date_posted).fromNow()}
              </h5>
              <Route
                exact
                path={`/Demo/${post.postId}/Update/`}
                render={() => {
                  return (
                    <UpdatePost
                      title={post.title}
                      type={post.type}
                      content={post.content}
                      username={post.username}
                      postId={post.postId}
                      handleUpdate={this.handleUpdate}
                    />
                  );
                }}
              />
              <Route exact path="/Demo/" />
              <p className="post-content">{post.content}</p>
              <div className="title-container">
                <h4>Comments</h4>
                <Link
                  className="fa-container"
                  to={`../../../Demo/${post.postId}/Comment/`}
                >
                  <i className="fa fa-plus-square-o" aria-hidden="true"></i>
                </Link>
              </div>
              <Route
                path={`/Demo/${post.postId}/Comment/`}
                render={() => <Comment postId={post.postId} />}
              />
              <Comments
                postId={post.postId}
                post_date={post.post_date}
                username={post.username}
                updateComments={this.updateComments}
              />
            </li>
          );
        })}
      </ul>
    );
  }
}
export default withRouter(Post);
