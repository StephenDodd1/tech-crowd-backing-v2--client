import React, { Component } from 'react';

export default class Comment extends Component {
   render() {
      return(
         <div>
            <p>Post Title</p>
            <button>DELETE</button>
            <form>
               <textarea placeholder='Enter your comment here. Remember to be respectful.' />
               <button type='submit'>Submit</button>
            </form>
         </div>
      )
   }
}