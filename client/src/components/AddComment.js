import React,{useState,useRef} from 'react';
import {useParams} from 'react-router-dom'
function AddComment({update},ref) {
  const Params = useParams()
  const nameRef = useRef()
  const contentRef = useRef()
  const submitRef = useRef()

  const firstInput = (e) => {
    if(e.key === 'Enter'){
      contentRef.current.focus()
    }
  }
  const secondInput = (e) => {
    if(e.key === 'Enter'){
      submitRef.current.focus()
    }
  }
  const submit = (e) => {
    if(e.key === 'Enter'||e.type === 'click'){
      let name = nameRef.current.value
      let content = contentRef.current.value
      if(name===''||content===''){return}
      update({name,content})
      .then(()=>{
        nameRef.current.value = '';
        contentRef.current.value = '';
      })
      
      
    }
  }
  return (
     <div>
     Add a comment!
     <input 
      onKeyUp={firstInput}
      ref={nameRef}
       placeholder='name'
     />
     <input 
      onKeyUp={secondInput}
      ref={contentRef}
       placeholder='comment'
     />
     <button
      onKeyUp={submit}
      onClick={submit}
       ref={submitRef}
     >
     submit
     </button>
    </div>
  );
}
export default AddComment;
