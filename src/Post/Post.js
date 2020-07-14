   import React, { Component } from 'react';
   import { Link, Route } from 'react-router-dom';
   import Comment from '../Comment/Comment'

export default class Post extends Component {
   constructor(props){
      super(props);
      this.state = {
         posts: []
      }
   }

   componentDidMount() {
      fetch('http://localhost:8000/content/posts', {
         method: 'GET',
         mode: 'cors',
         credentials: 'same-origin',
         headers: {
            'Content-type': 'application/json'
         }
      })
      .then(res => res.json())
      .then(data => {
         console.log(data)
         this.setState({posts: data})
      })
   }

   render() {
      return(
         <ul>
            {this.state.posts.map(post => {
            return (
               <li className='post-box'>
                  <div id={post.postId}>
                     <h4 className='post-name'>{post.title}</h4><h5>Posted by: {post.username} on: {post.post_date}</h5>
                     <button className='comment-button' ><Link to={`../../../Demo/${post.postId}/Comment/`}>+ Comment</Link></button>
                     <button className='update-button' ><Link to={`../../../Demo/${post.postId}/Update/`}>Update</Link></button>
                  </div>
                  <p>{post.content}</p>
                  <Route path={`/Demo/${post.postId}/Comment/`} component={Comment} />
               </li>
            )
            })}
         </ul>
   )}
}