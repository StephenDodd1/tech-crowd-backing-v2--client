   import React, { Component } from 'react';
   import { Link, Route } from 'react-router-dom';
   import Comment from '../Comment/Comment'

export default class Post extends Component {
   render() {
      return(
         <ul>
            <li className='post-box'>
               <div id='post-title-post-1' className='post-header-box'>
                  <h4 className='post-name'>Post 1</h4>
                  <button className='comment-button' ><Link to='../../../Demo/Post-1/Comment/'>+ Comment</Link></button>
                  <button className='update-button' ><Link to='../../../Demo/Post-1/Update/'>Update</Link></button>
               </div>
               <p>Post PostPost Post PostPostPostPost PostPost Post PostPostPost Post PostPost Post PostPostPost</p>
               <Route path='/Demo/Post-1/Comment/' component={Comment} />
            </li>
            <li className='post-box'>
               <div id='post-title-post-2' className='post-header-box'>
                  <h4 className='post-name'>Post 2</h4>
                  <button className='comment-button'><Link to='../../../Demo/Post-2/Comment/'>+ Comment</Link></button>
                  <button className='update-button' ><Link to='../../../Demo/Post-2/Update/'>Update</Link></button>
               </div>
               <p>Post PostPost Post PostPostPostPost PostPost Post PostPostPost Post PostPost Post PostPostPost</p>
               <Route path='/Demo/Post-2/Comment/' component={Comment} />
            </li>

            <li className='post-box'>
                     <div id='post-title-post-3' className='post-header-box'>
                        <h4 className='post-name'>Post 3</h4>
                        <button className='comment-button'><Link to='../../../Demo/Post-3/Comment/'>+ Comment</Link></button>
                  <button className='update-button' ><Link to='../../../Demo/Post-3/Update/'>Update</Link></button>
                     </div>
                     <p>Post PostPost Post PostPostPostPost PostPost Post PostPostPost Post PostPost Post PostPostPost</p>
                     <Route path='/Demo/Post-3/Comment/' component={Comment} />
                  </li>
                  <li className='post-box'>
                     <div id='post-title-post-4' className='post-header-box'>
                        <h4 className='post-name'>Post 4</h4>
                        <button className='comment-button'><Link to='../../../Demo/Post-4/Comment/'>+ Comment</Link></button>
                  <button className='update-button' ><Link to='../../../Demo/Post-4/Update/'>Update</Link></button>
                     </div>
                     <p>Post PostPost Post PostPostPostPost PostPost Post PostPostPost Post PostPost Post PostPostPost</p>
                     <Route path='/Demo/Post-4/Comment/' component={Comment} />
                  </li>
                  <li className='post-box'>
                     <div id='post-title-post-5' className='post-header-box'>
                        <h4 className='post-name'>Post 5</h4>
                        <button className='comment-button'><Link to='../../../Demo/Post-5/Comment/'>+ Comment</Link></button>
                  <button className='update-button' ><Link to='../../../Demo/Post-5/Update/'>Update</Link></button>
                     </div>
                     <p>Post PostPost Post PostPostPostPost PostPost Post PostPostPost Post PostPost Post PostPostPost</p>
                     <Route path='/Demo/Post-5/Comment/' component={Comment} />
                  </li>
                  <li className='post-box'>
                     <div id='post-title-post-6' className='post-header-box'>
                        <h4 className='post-name'>Post 6</h4>
                        <button className='comment-button'><Link to='../../../Demo/Post-6/Comment/'>+ Comment</Link></button>
                  <button className='update-button' ><Link to='../../../Demo/Post-6/Update/'>Update</Link></button>
                     </div>
                     <p>Post PostPost Post PostPostPostPost PostPost Post PostPostPost Post PostPost Post PostPostPost</p>
                     <Route path='/Demo/Post-6/Comment/' component={Comment} />
                  </li>
                  <li className='post-box'>
                     <div id='post-title-post-7' className='post-header-box'>
                        <h4 className='post-name'>Post 7</h4>
                        <button className='comment-button'><Link to='../../../Demo/Post-7/Comment/'>+ Comment</Link></button>
                  <button className='update-button' ><Link to='../../../Demo/Post-7/Update/'>Update</Link></button>
                     </div>
                     <p>Post PostPost Post PostPostPostPost PostPost Post PostPostPost Post PostPost Post PostPostPost</p>
                     <Route path='/Demo/Post-7/Comment/' component={Comment} />
                  </li>
                  <li className='post-box'>
                     <div id='post-title-post-8' className='post-header-box'>
                        <h4 className='post-name'>Post 8</h4>
                        <button className='comment-button'><Link to='../../../Demo/Post-8/Comment/'>+ Comment</Link></button>
                  <button className='update-button' ><Link to='../../../Demo/Post-8/Update/'>Update</Link></button>
                     </div>
                     <p>Post PostPost Post PostPostPostPost PostPost Post PostPostPost Post PostPost Post PostPostPost</p>
                     <Route path='/Demo/Post-8/Comment/' component={Comment} />
                  </li>
         </ul>
   )}
}