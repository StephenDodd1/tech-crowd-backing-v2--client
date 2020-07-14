import React, { Component } from 'react';

export default class CreatePost extends Component {
   render() {
      return(
         <div>
            <h3>What is your post about?</h3>
            <form>
               &emsp;&emsp;&emsp;<select defaultValue='select below'>
                  <option value='Technology'>Technology</option>
                  <option value='Investment'>Investment</option>
               </select><br/><br/>
               <label htmlFor='title-input'>Title&emsp;</label>
               <input id='title-input' /><br/><br/>
               <label htmlFor='content-input'>Post&emsp;</label>
               <textarea id='content-input'/>
            </form>
         </div>
      )
   }
}