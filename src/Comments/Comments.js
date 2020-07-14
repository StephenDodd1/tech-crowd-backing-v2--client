import React, { Component } from 'react';

export default class Comments extends Component {
   constructor(props) {
      super(props);
      this.state = {
         comments: []
      }
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
         console.log(data)
         this.setState({comments: data})
      })
   }
   
   render() {
      return(
         <ul id='comments-box' >
            {this.state.comments.map(comment => {
               return(
                  <li className = 'comment-box'>
                     <h5>Posted by: {this.props.username} on {this.props.post_date}</h5>
                     <p class='comment-content'>{comment.comment}</p>
                     <button>DELETE</button>
                  </li>
               )
            })}
         </ul>
      )
   }
}