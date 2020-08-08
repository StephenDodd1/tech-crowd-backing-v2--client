import React from 'react'

export default function LogoutButton() {
  return (
    <div>
      <button onclick={this.props.logout}>Logout</button>
    </div>)
}