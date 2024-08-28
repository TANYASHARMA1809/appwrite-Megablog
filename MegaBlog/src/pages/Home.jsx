import React ,{useEffect,useState}from 'react'
import appwriteService from '../appwrite/config'
import {Container,PostCard} from '../components'
import { useNavigate } from 'react-router-dom'

function Home() {
    const [posts,setPosts]=useState([])
    const navigate = useNavigate();

    useEffect(()=>{
        appwriteService.getPosts().then((posts)=>{
            if(posts){
                setPosts(posts.documents)
            }
        })
    },[])


    if(posts.length === 0){
        return (
            <div className="w-full py-8 mt-4 text-center">
            <Container>
                <div className="flex flex-wrap">
                    <div className="p-2 w-full">
                        <h1 className="text-2xl font-bold hover:text-gray-500">
                            Login to read posts
                        </h1>
                        <section className='text-center py-12'>
                            <h1 className='text-4xl font-bold text-white'>Welcome to the Blog</h1>
                            <p className='mt-4 text-lg text-gray-200'>Discover amazing content and join our community.</p>
                            <p className='mt-4 text-pretty text-white mx-auto'>A blog website serves as an online platform where individuals or groups can share their thoughts, ideas, and expertise on various topics. It's a space for creative expression, knowledge sharing, and community engagement, 
                                allowing writers to connect with readers through posts that can range from personal stories to professional insights. Blog websites often feature a mix of written content, images, and multimedia, offering a dynamic way for audiences 
                                to discover and explore content tailored to their interests. Whether for personal passion or business, a blog website is a powerful tool for communication and influence in the digital age.</p>
                            <button className='mt-6 px-6 py-2 bg-white text-fuchsia-950 font-bold rounded-lg 'onClick={() => navigate('/login')}>
                             Get Started
                            </button>
                        </section>
                    </div>
                </div>
            </Container>
        </div>
        )
    }
    return(
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post)=>(
                        <div key={post.$id} className='p-2 sm:w-1/2 md:w-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
  

}

export default Home
