import React from 'react'
import {Container,Logo,LogoutBtn} from '../index'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function Header() {
  const authStatus=useSelector((state)=>state.auth.status)
  const navigate=useNavigate()
  const navItems=[
    {
      name:'Home',
      slug:'/',
      active:true
    },{
      name: "Login",
      slug: "/login",
      active: !authStatus,
  },
  {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
  },
  {
      name: "My Posts",
      slug: "/my-posts",
      active: authStatus,
  },
  {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
  },
  ]
  return (
    <header className='w-full overflow-hidden py-3 shadow-xl bg-gradient-to-r from-zinc-6+00 to-zinc-600'>
      <Container>
        <nav className='flex items-center justify-between'>
          
          <div className='flex items-center space-x-1 md:space-x-2'>
            <Link to='/'>
              <Logo />
            </Link>
          </div>
          {/* <h1 className='text-xl text-black sm:text-2xl md:text-4xl px-1 md:px-2 '>Website</h1> */}
          <ul className='flex items-center space-x-2 md:space-x-4'>
            {navItems.map((item)=>
            item.active ? (
              <li key= {item.name}>
                <button
                onClick={()=>navigate(item.slug)}
                className='inline-block px-2 sm:px-4 py-1 sm:py-2 text-sm sm:text-lg duration-200 hover:bg-gray-400 rounded-full text-white'
                >{item.name}</button>
              </li>
            ): null)}
{/* below statement means 1st one is true then only statement after && which is written inside () will be performing its action */}
            {authStatus && (
              <li>
                <LogoutBtn/>
              </li>
            )}
          </ul>
        </nav>
        </Container>
    </header>
  )
}


