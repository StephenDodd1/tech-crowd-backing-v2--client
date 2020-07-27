import React from 'react';


const Context = React.createContext({
   posts: [],
   comments: [],
   userAuth: false
})

export default Context;