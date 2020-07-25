import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import Comment from "../Comment/Comment";
import Comments from "../Comments/Comments";
import UpdatePost from "../UpdatePost/UpdatePost";

export default class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: this.props.posts
    };
  }
  handleUpdate = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const content = e.target.content.value;
    const type = e.target.type.value;
    const post = { title, content, type };
    fetch(`http://localhost:8000/api/posts/${e.target.post_id.value}`, {
      method: "PATCH",
      mode: "cors",
      credentials: "same-origin",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(post),
    }).then((res) => {
      if (!res.ok) {
        throw new Error("Something went wrong");
      }
      return res.json();
    });
  };
  
  componentDidUpdate() {
    if (this.props.posts !== this.state.posts){ this.setState({posts: this.props.posts})}
  }

  render() {
    console.log('props', this.props.posts, 'state', this.state.posts)

    console.log('props posts returned', this.props.posts);
    return (
      <ul>
          {this.props.posts.map((post, i) => {
              return (
                <li className={`${post.postId} 'post-box'`} key={i}>
                  <div id={post.title}>
                    <h4 className="post-name">{post.title}</h4>
                    <h5>
                      Posted by: {post.userId} on {post.date_posted}
                    </h5>
                    <button className="comment-button">
                      <Link to={`../../../Demo/${post.postId}/Comment/`}>
                        + Comment
                      </Link>
                    </button>
                    <button className="update-button">
                      <Link to={`../../../Demo/${post.postId}/Update`}>
                        Update
                      </Link>
                    </button>
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
                  </div>
                  <p>{post.content}</p>
                  <h4>Comments</h4>
                  <Route
                    path={`/Demo/${post.postId}/Comment/`}
                    render={() => <Comment postId={post.postId} />}
                  />
                  <Comments
                    postId={post.postId}
                    post_date={post.post_date}
                    username={post.username}
                  />
                </li>
              );
            })
          }
      </ul>
    );
  }
}
