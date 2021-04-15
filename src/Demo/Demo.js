import React, { Component } from "react";
import config from "../config";
import { Link } from "react-router-dom";
import Post from "../Post/Post";
import LogoutButton from "../Logout/Logout";
import { UserContext } from "../Context";

export default class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }
  static contextType = UserContext;
  componentDidMount() {
    console.log(config.API_TOKEN)
    fetch(`${config.API_ENDPOINT}/api/posts`, {
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
        this.setState({ posts: data });
      });
  }

  searchPosts = (e) => {
    e.preventDefault();
    fetch(`${config.API_ENDPOINT}/api/posts/${e.target.search.value}`, {
      method: "GET",
      mode: "cors",
      credentials: "same-origin",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${config.API_TOKEN}`,
      },
    })
      .then((posts) => {
        if (!posts) {
          return alert("No results matched your search.");
        } else {
          return posts.json();
        }
      })
      .then((data) => {
        return this.setState({ posts: data });
      });
    e.target.reset();
  };

  render() {
    return (
      <div id="forum-container">
        <div id="forum-controls">
          <div id="button-container">
            <button id="create-post-button" type="submit" className="right">
              <Link id="post-button" to="../../../CreatePost/">
                + Post
              </Link>
            </button>
            <LogoutButton onClick={this.context.logoutUser} />
          </div>
          <div id="search-barcontainer">
            <h5>Search:</h5>
            <form onSubmit={this.searchPosts}>
              <input
                placeholder="Search for a company or technology"
                id="search-bar-input"
                name="search"
              />
              <button type="submit">Search</button>
            </form>
          </div>
        </div>
        <div id="posts-container">
          <Post posts={this.state.posts} />
        </div>
      </div>
    );
  }
}
