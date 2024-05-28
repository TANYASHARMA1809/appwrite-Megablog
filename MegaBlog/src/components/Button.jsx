import React from 'react'

export default function Button({
    children,
    type='button',
    bgColor='bg-blue-500',
    textColor ='text-white',
    className='',
    ...props
}) {
  return (
    <button className={`px-4 py-2 rounded-lg  ${bgColor} ${textColor} ${className}`} {...props}>
      {children}
    </button>
  )
}

//forwardRef hook example use
// hm apna login form bna rhe hai,ush login form k andr input field alg hai,vhi same input field username,password sb mai use krnge
// login page alg jgh hai,toh uski state ka access chahiye hoga toh input field ka reference dega
//or yh reference hm forwardReference hook ki help se dnge



