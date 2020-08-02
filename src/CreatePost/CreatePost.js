import React, { Component } from "react";
import config from "../config";
import { withRouter } from "react-router-dom";

class CreatePost extends Component {
  createPost = (e) => {
    e.preventDefault();
    const type = e.target.type.value;
    const title = e.target.title.value;
    const content = e.target.content.value;
    const userid = 1;
    const newPost = {
      userid,
      type,
      title,
      content,
    };
    fetch(`${config.API_ENDPOINT}/api/posts`, {
      method: "POST",
      mode: "cors",
      credentials: "same-origin",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${config.API_TOKEN}`,
      },
      body: JSON.stringify(newPost),
    })
      .then((res) => res.json())
      .then((res) => {
        this.props.history.push("/Demo");
        return alert("Refresh the page to view your post");
      });
  };

  render() {
    return (
      <div>
        <h3>What is your post about?</h3>
        <form onSubmit={this.props.createPost}>
          &emsp;&emsp;&emsp;
          <select name="type" defaultValue="select below">
            <option value="Technology">Technology</option>
            <option value="Investment">Investment</option>
          </select>
          <br />
          <br />
          <label htmlFor="title-input">Post Title&emsp;</label>
          <input name="title" id="title-input" />
          <br />
          <br />
          <label htmlFor="content-input">Post&emsp;</label>
          <textarea name="content" id="content-input" />
          <br />
          <button className="submit-post" type="submit">
            Submit
          </button>
          <button type="click">Cancel</button>
        </form>
      </div>
    );
  }
}
export default withRouter(CreatePost);
