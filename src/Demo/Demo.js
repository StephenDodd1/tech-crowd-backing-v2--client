import React, { Component } from 'react';

export default class Demo extends Component {
   render() {
      return(
         <div id='forum-container'>
            <div id='button-container'>
               <button id='post-button' type = 'submit' class='right'>+ Post</button>
            </div>
            <div id='posts-container'>
               <ul>
                  <li class='post-box'>
                     <div id='post-title-post-1' class='post-header-box'>
                        <h4>Post 1</h4>
                        <button class='comment-button'>+ comment</button>
                     </div>
                     <p>Post PostPost Post PostPostPostPost PostPost Post PostPostPost Post PostPost Post PostPostPost</p>
                  </li>
                  <li class='post-box'>
                     <div id='post-title-post-2' class='post-header-box'>
                        <h4>Post 2</h4>
                        <button class='comment-button'>+ comment</button>
                     </div>
                     <p>Post PostPost Post PostPostPostPost PostPost Post PostPostPost Post PostPost Post PostPostPost</p>
                  </li>
                  <li class='post-box'>
                     <div id='post-title-post-3' class='post-header-box'>
                        <h4>Post 3</h4>
                        <button class='comment-button'>+ comment</button>
                     </div>
                     <p>Post PostPost Post PostPostPostPost PostPost Post PostPostPost Post PostPost Post PostPostPost</p>
                  </li>
                  <li class='post-box'>
                     <div id='post-title-post-4' class='post-header-box'>
                        <h4>Post 4</h4>
                        <button class='comment-button'>+ comment</button>
                     </div>
                     <p>Post PostPost Post PostPostPostPost PostPost Post PostPostPost Post PostPost Post PostPostPost</p>
                  </li>
                  <li class='post-box'>
                     <div id='post-title-post-5' class='post-header-box'>
                        <h4>Post 5</h4>
                        <button class='comment-button'>+ comment</button>
                     </div>
                     <p>Post PostPost Post PostPostPostPost PostPost Post PostPostPost Post PostPost Post PostPostPost</p>
                  </li>
                  <li class='post-box'>
                     <div id='post-title-post-6' class='post-header-box'>
                        <h4>Post 6</h4>
                        <button class='comment-button'>+ comment</button>
                     </div>
                     <p>Post PostPost Post PostPostPostPost PostPost Post PostPostPost Post PostPost Post PostPostPost</p>
                  </li>
                  <li class='post-box'>
                     <div id='post-title-post-7' class='post-header-box'>
                        <h4>Post 7</h4>
                        <button class='comment-button'>+ comment</button>
                     </div>
                     <p>Post PostPost Post PostPostPostPost PostPost Post PostPostPost Post PostPost Post PostPostPost</p>
                  </li>
                  <li class='post-box'>
                     <div id='post-title-post-8' class='post-header-box'>
                        <h4>Post 8</h4>
                        <button class='comment-button'>+ comment</button>
                     </div>
                     <p>Post PostPost Post PostPostPostPost PostPost Post PostPostPost Post PostPost Post PostPostPost</p>
                  </li>
               </ul>
            </div>
         </div>
      )
   }
}