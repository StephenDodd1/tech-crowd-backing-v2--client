import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class Comment extends Component {

   componentDidMount() {
      fetch('http://localhost:8000/content/:postId/comment', {
         method: 'POST',
         mode: 'cors',
         credentials: 'same-origin',
         headers: {
            'Content-type': 'application/json'
         }
      })
      .then(res => res.json())
      .then(data => {
      })
   }
   render() {
      
      return(
         <div>
            <form>
               <textarea placeholder='Enter your comment here. Remember to be respectful.' />
               <button type='submit'className='submit-button' onClick = {this.onSubmit}>Submit</button>
               <button type='click'  ><Link to='../../../Demo/' >Cancel</Link></button>
            </form>
         </div>
      )
   }
}