import React, {useState,useEffect} from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'
import Post from './Post'
function Home() {
  const [posts,setPosts] = useState([])
  useEffect(()=>{
    axios.get('/posts')
   .then(({data}) => {
     setPosts(data)
   });
    
  },[])
  return (
    <div className="home">
     {posts.map(post=>{
      return <Link to={`/posts/${post.id}`}>
      <div>
        <h3>{post.title}</h3>
      </div>
      </Link>
     })}
     
    </div>
  );
}

export default Home;
