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
    <header className='w-full overflow-hidden py-3 shadow-xl bg-gradient-to-r from-rose-100 to-fuchsia-950'>
      <Container>
        <nav className='flex items-center'>
          
          <div className='mr-4'>
            <Link to='/'>
              <Logo />
            </Link>
          </div>
          <h1 className='ml-1 font-mono text-4xl text-black '>Website</h1>
          <ul className='flex ml-auto'>
            {navItems.map((item)=>
            item.active ? (
              <li key= {item.name}>
                <button
                onClick={()=>navigate(item.slug)}
                className='inline-block px-6 py-2 duration-200 hover:bg-gray-400 rounded-full text-xl text-white'
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


