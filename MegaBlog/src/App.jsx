import {useDispatch} from 'react-redux'
import React,{useState,useEffect} from 'react'
import './App.css'
import authService from './appwrite/auth';
import { login, logout } from './store/authSlice';

import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  // console.log(process.env.REACT_APP_APPWRITE_URL)..for react
  //console.log(import.meta.env.VITE_APPWRITE_URL)

  //jab database se kch puchna ho toh ek loading statement lgakr puch skte hai
  //uske basis pr hm conditional rendering krskte hai if else lgakr

  const [loading,setLoading]=useState(true);
  const dispatch=useDispatch();

  useEffect(()=>{
    authService.getCurrentUser()
    .then((userData)=>{
      if(userData){
        dispatch(login({userData}))
      }else{
        dispatch(logout())
      }
    })//callback k andr data milta hai .then k callback function k andr
    .finally(()=>setLoading(false))
  },[])

  return !loading ? (
    <div className='bg-gradient-to-r from-rose-100 to-fuchsia-950 '>
        <Header/>
        <main >
          <Outlet/>
        </main>
        <Footer/>
    </div>
  ):null

  // return (
  //   <>
  //     <h1>Mega Blog</h1>
  //   </>
  // )
}

export default App
