import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link, Route } from 'react-router-dom';
import Comment from '../Comment/Comment';
import Post from '../Post/Post'

export default class Demo extends Component {
   render() {
      return(
         <div id='forum-container'>
            <div id='forum-controls'>
               <div id='button-container'>
                  <button id='create-post-button' type = 'submit' className='right'><Link to='../../../CreatePost/'>+ Post</Link></button>
               </div>
               <div id='search-barcontainer'>
                  <h5>Search:</h5>
                  <form>
                     <input 
                        placeholder='Type a company or technology, then press enter to search'
                        id='search-bar-input'
                        />
                  </form> 
               </div>
            </div>
            <div id='posts-container'>
               <Post />
            </div>
         </div>
      )
   }
}