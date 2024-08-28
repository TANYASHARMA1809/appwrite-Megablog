import React from 'react'

import { Container,PostCard } from '../components'
import { useSelector } from 'react-redux'

function MyPosts() {

    // const [posts,setPosts] =useState([])
    // useEffect(()=>{},[])

    // appwriteService.getPosts([]).then((posts)=>{
    //     if(posts){
    //         setPosts(posts.documents)
    //     }
    // })

    const user =useSelector((state) => state.auth.userData);
    const allPosts=useSelector((state) => state.posts.posts);
    const posts=allPosts.filter((post)=>post.userId === user?.$id);



  return (
    <div className='w-full my-6 max-w-7xl mx-auto'>
      <Container>
      {
                    posts.length === 0 ? (
                        <>
                        <h1 className='text-2xl font-bold text-center'>You have not posted anything yet</h1>
                        </>
                    ) : (
                        <div className='flex flex-wrap gap-8'>
                        {posts.map((post) => (
                        <div key={post.$id} className='w-[23%]'>
                    <PostCard {...post} />
                </div>
            ))}
        </div>
        )}
      </Container>
    </div>
  )
}

export default MyPosts