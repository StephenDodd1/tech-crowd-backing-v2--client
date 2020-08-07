import React from 'react'

const UserContext = React.createContext({user:{}, logout: logout, login: login});

export {
  UserContext
}