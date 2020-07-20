import React from 'react';


const postsContext = React.createContext({
   posts: [],
   userAuth: false
})

export default postsContext;