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
      <button className='inline-bock px-6 py-2 duration-200 hover:bg-gray-400 ring-2 ring-blue-500/[.55] rounded-full text-xl text-white' 
      onClick={logoutHandler}>Logout</button>
    </div>
  )
}

export default LogoutBtn
