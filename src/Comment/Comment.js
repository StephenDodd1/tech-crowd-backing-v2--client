import React, { Component } from 'react';
import config from '../config';
import { Link, withRouter } from 'react-router-dom'

class Comment extends Component {

   submitComment = (e) => {
      e.preventDefault();
      const comment = e.target.comment.value;
      const addedComment = { comment }
      fetch(`${config.API_ENDPOINT}/api/${this.props.postId}/comment`, {
         method: 'POST',
         mode: 'cors',
         credentials: 'same-origin',
         headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${config.API_TOKEN}`
         },
         body: JSON.stringify(addedComment)
      })
      .then(res => res.json())
      .then(data => this.setState({comments: data}))
      .then(res => this.props.history.push('/Demo'))
   }
   render() {
      
      return(
         <div>
            <form onSubmit={this.submitComment}>
               <textarea placeholder='Enter your comment here. Remember to be respectful.' name='comment'/><br/>
               <button type='submit'className='submit-button' >Submit</button>
               <button type='click' ><Link to='../../../Demo/' >Cancel</Link></button>
            </form>
         </div>
      )
   }
}
export default withRouter(Comment);