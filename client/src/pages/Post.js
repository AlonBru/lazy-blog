import React,{useEffect,useState,lazy,Suspense} from 'react';
import {useLocation,useHistory,useParams} from 'react-router-dom'
import axios from 'axios'
import Loading from '../components/Loading'
import AddComment from '../components/AddComment';
const Comment =  lazy(()=>import('../components/Comment'))
function Post({}) {
  const [title,setTitle] = useState()
  const [content,setContent] = useState()
  const [comments,setComments] = useState([])
  const params = useParams()

  const updateComments = async (comment) => {
    const success = axios.post(`/posts/${params.postId}/comments`,comment)
      .then(({data})=>{
        setComments(data)
      })
      .catch(e=>{
        // if(e.status == 500){
          console.error('there is a problem in the server')
        // }
      })
    return success
  }

  useEffect(()=>{
    axios.get(`/posts/${params.postId}`)
      .then(({data})=>{
      const post = data[0]
      setTitle(post.title)
      setContent(post.content)
      setComments(post.comments)
    })
  },[])
  return (
    <div className="post">
      <h3>{title}</h3>
      <Suspense fallback={<Loading />} >
      <div style={{whiteSpace:'pre-wrap',textAlign:'left'}}> {content}</div>
      </Suspense>
      <h2>Comments:</h2>
      <Suspense fallback={<Loading />} >
      {comments.map(comment=>{
        return <Comment key={comment.id} comment={comment} />
      })}        
      </Suspense>
        <AddComment update={updateComments}/>
    </div>
  );
}

export default Post;
