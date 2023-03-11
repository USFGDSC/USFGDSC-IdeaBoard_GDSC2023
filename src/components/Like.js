import React from 'react'
import {auth, db} from '../firebase'
import { useState } from "react";

const Like = ({ postID }) => {
  // const [liked, setLiked] = useState(false);
  // const [likeCount, setLikeCount] = useState(data.length);

  // const handleLikeClick = async () => {
  //   const user = auth.currentUser;
      
  //     const uid = user.uid;
        
  //     if (data.likes.includes(uid)) {
  //       // User has already liked this post
  //       setLiked(true);
  //     } 
        
  //     else {
  //       // User has not liked this post
  //       setLikeCount(likeCount + 1);
  //       setLiked(true);
  //       }
  // }

  return (
    <div>
      {/* <button onClick={handleLikeClick} disabled={liked}>LIKE</button>
      
      <p>{likeCount} Likes</p> */}
      <button >LIKE</button>
  </div>
  )
}

export default Like;