import React,{useState,useEffect} from 'react'
import appwriteService from '../appwrite/config'
import { Container,PostCard } from '../components'

function AllPosts() {

    const [posts,setPosts] =useState([])
    useEffect(()=>{},[])

    appwriteService.getPosts([]).then((posts)=>{
        if(posts){
            setPosts(posts.documents)
        }
    })



  return (
    <div className='w-full my-6 max-w-7xl mx-auto'>
      <Container>
        <div className='flex flex-wrap gap-8'>
            {posts.map((post) => (
                <div key={post.$id} className='w-[23%]'>
                    <PostCard {...post} />
                </div>
            ))}
        </div>
      </Container>
    </div>
  )
}

export default AllPosts
