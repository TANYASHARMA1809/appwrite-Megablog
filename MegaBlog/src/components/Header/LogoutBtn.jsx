import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
import { logout } from '../../store/authSlice'


function LogoutBtn() {
    const dispatch=useDispatch();
    const logoutHandler=()=>{
        authService.logout().then(()=>{
            dispatch(logout()) //this is done so that store must hve updated information
        })
    }
  return (
    <div>
      <button className='inline-block px-2 sm:px-4 py-1 sm:py-2 text-sm sm:text-lg duration-200 hover:bg-gray-400 ring-2 ring-blue-500/[.55] rounded-full text-white' 
      onClick={logoutHandler}>Logout</button>
    </div>
  )
}

export default LogoutBtn
