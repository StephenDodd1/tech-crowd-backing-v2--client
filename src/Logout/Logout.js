import React from 'react'

export default function LogoutButton() {
  defaultProps ={ }
  return (
    <div>
      <button onClick={props.logout}>Logout</button>
    </div>)
}