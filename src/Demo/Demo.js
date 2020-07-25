import React, { Component } from "react";
import { Link } from "react-router-dom";
import Post from "../Post/Post";
import postsContext from "../Context";

export default class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  static contextType = postsContext;

  componentDidMount() {
    fetch("http://localhost:8000/api/posts", {
      method: "GET",
      mode: "cors",
      credentials: "same-origin",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        this.setState({ posts: data });
      });
  }

  searchPosts = (e) => {
    e.preventDefault();
    fetch(`http://localhost:8000/api/posts/${e.target.search.value}`, {
      method: "GET",
      mode: "cors",
      credentials: "same-origin",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((posts) => {
        if (!posts) {
          return posts.json("No results matched your search.");
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
              <Link to="../../../CreatePost/">+ Post</Link>
            </button>
          </div>
          <div id="search-barcontainer">
            <h5>Search:</h5>
            <form onSubmit={this.searchPosts}>
              <input
                placeholder="Type a company or technology, then press enter to search"
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
