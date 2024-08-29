import React from 'react'
import appwriteService from '../appwrite/config'
import {Link} from 'react-router-dom'


function PostCard({$id, title, featuredImage}) {
  return (
    <Link to={`/post/${$id}`}>
      <div className='w-full bg-slate-400 rounded-xl p-4 m-2 flex flex-wrap px-6 py-8 ring-1 ring-slate-200 shadow-xl'>
        <div className='w-full justify-center mb-4'>
          <img src={appwriteService.getFilePreview(featuredImage)} 
          alt={title} className='rounded-xl'/>
        </div>
        <h2 className='text-xl font-normal text-slate-900 text-wrap hover:text-amber-50'>{title}</h2>
      </div>
    </Link>
  )
}

export default PostCard
