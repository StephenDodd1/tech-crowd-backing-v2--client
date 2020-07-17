import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class Comment extends Component {

   submitComment = (e) => {
      e.preventDefault();
      const comment = e.target.comment.value;
      const addedComment = {comment}
      fetch(`http://localhost:8000/content/${this.props.postId}/comment`, {
         method: 'POST',
         mode: 'cors',
         credentials: 'same-origin',
         headers: {
            'Content-type': 'application/json'
         },
         body: JSON.stringify(addedComment)
      })
      .then(res => res.json())
   }
   render() {
      
      return(
         <div>
            <form onSubmit={this.submitComment}>
               <textarea placeholder='Enter your comment here. Remember to be respectful.' name='comment'/>
               <button type='submit'className='submit-button' >Submit</button>
               <button type='click' ><Link to='../../../Demo/' >Cancel</Link></button>
            </form>
         </div>
      )
   }
}