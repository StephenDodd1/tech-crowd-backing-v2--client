import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class UpdatePost extends Component {

render() {
   return(
      <div>
         <h3>What is your post about?</h3>
         <form onSubmit={e => this.props.handleUpdate(e)} >
            <input type="hidden" name="post_id" value={this.props.postId} />
            &emsp;&emsp;&emsp;<select name='type' defualtvalue={this.props.type} >
               <option value='Technology'>Technology</option>
               <option value='Investment'>Investment</option>
            </select><br/><br/>
            <label htmlFor='title-input'>Title&emsp;</label>
            <input id='title-input' name='title' type='text'  defaultValue={this.props.title} /><br/><br/>
            <label htmlFor='content-input'>Post&emsp;</label>
            <textarea id='content-input' name='content' defaultValue={this.props.content} />
            <button type='submit' className='submit-button' >Submit</button>
            <button id='update-cancel' type='click' ><Link to='../../../Demo/' >Cancel</Link></button>
         </form>
      </div>
      )
   }
}