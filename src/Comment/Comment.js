import React, { Component } from 'react';

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
               <button type='submit'>Submit</button>
            </form>
         </div>
      )
   }
}