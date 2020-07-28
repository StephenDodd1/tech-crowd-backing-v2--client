import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

 class CreatePost extends Component {


   render() {
      return(
         <div>
            <h3>What is your post about?</h3>
            <form onSubmit={this.props.createPost}>
               &emsp;&emsp;&emsp;<select name='type' defaultValue='select below'>
                  <option value='Technology'>Technology</option>
                  <option value='Investment'>Investment</option>
               </select><br/><br/>
               <label htmlFor='title-input'>Title&emsp;</label>
               <input name='title' id='title-input' /><br/><br/>
               <label htmlFor='content-input'>Post&emsp;</label>
               <textarea name='content' id='content-input'/><br/>
               <button className='submit-post' type='submit' >Submit</button>
               <button type='click'>Cancel</button>
            </form>
         </div>
      )
   }
}
export default withRouter(CreatePost);