import React, { Children } from 'react'

//container accept the properties as a children
//it is just a box,iske andr height width styling properties define jrte hai
function Container({children}) {
  return <div className='w-full max-w-7xl mx-auto px-4'>
      {children}</div>;
  
}

export default Container
