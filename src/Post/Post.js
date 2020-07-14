   import React, { Component } from 'react';
   import { Link, Route } from 'react-router-dom';
   import Comment from '../Comment/Comment'
   import Comments from '../Comments/Comments'

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
               <li className={post.postId} className='post-box'>
                  <div id={post.title}>
                     <h4 className='post-name'>{post.title}</h4><h5>Posted by: {post.username} on {post.post_date}</h5>
                     <button className='comment-button' ><Link to={`../../../Demo/${post.postId}/Comment/`}>+ Comment</Link></button>
                     <button className='update-button' ><Link to={`../../../Demo/${post.postId}/Update/`}>Update</Link></button>
                  </div>
                  <p>{post.content}</p>
                  <h4>Comments</h4>
                  <Comments postId={post.postId} post_date={post.post_date} username={post.username}/>
                  <Route path={`/Demo/${post.postId}/Comment/`} component={Comment} />
               </li>
               )}
            )}
         </ul>
   )}
}