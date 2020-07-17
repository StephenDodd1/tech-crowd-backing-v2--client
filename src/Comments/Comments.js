import React, { Component } from 'react';

export default class Comments extends Component {
   constructor(props) {
      super(props);
      this.state = {
         comments: []
      }
   }

   handleDelete = (e) => {
      e.preventDefault();
      fetch(`http://localhost:8000/content/comments/${this.state.commentId}`, {
         method: 'DELETE',
         mode: 'cors',
         credentials: 'same-origin',
         headers: {
            'Content-type': 'application/json'
         }
      })
   }

   componentDidMount(){
      fetch(`http://localhost:8000/content/${this.props.postId}/comments`, {
         method: 'GET',
         mode: 'cors',
         credentials: 'same-origin',
         headers: {
            'Content-type': 'application/json'
         }
      })
      .then(res => res.json())
      .then(data => {
         this.setState({comments: data})
      })
   }

   render() {
      return(
         <ul id='comments-box' >
            {this.state.comments.map((comment, i) => {
               return(
                  <li className = 'comment-box' key={i}>
                     <h5>Posted by: {this.props.username} on {this.props.post_date}</h5>
                     <p className='comment-content'>{comment.comment}</p>
                     <button type='submit' onClick={this.handleDelete}>DELETE</button>
                  </li>
               )
            })}
         </ul>
      )
   }
}