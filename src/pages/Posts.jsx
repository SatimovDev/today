import React from 'react'
import { Post } from '../components/Post'

export const Posts = ({posts}) => {
  if(posts.length === 0) return <button className='btn btn-square btn-ghost loading'></button>
  return (
    <div className='grid grid-cols-4 gap-10 mt-10'>
      {posts.map((item,index) => {
        return<Post key={index} post={item}/>
      })}
    </div>
  )
}
