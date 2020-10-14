import React,{useEffect,useState,lazy,Suspense} from 'react';

function Post({comment}) {
  
    
  return (
     <div>
          <h4>{comment.name +' says:'}</h4>
          <p>{comment.content}</p>
        </div>
  );
}

export default Post;
