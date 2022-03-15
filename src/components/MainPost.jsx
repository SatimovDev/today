import React from 'react'
import { Link } from 'react-router-dom'

export const MainPost = ({ post }) => {

  if(post === undefined) return <button className='btn btn-square btn-ghost loading'></button>

  return (
    <div className='card lg:card-side bg-base-200 shadow-xl'>
        <figure><img src="https://api.lorem.space/image/car?w=400&h=400" alt="Album"/></figure>
    <div class="card-body">
        <h2 class="card-title">{post.title}</h2>
        <p>{post.body}</p>
        <div class="card-actions justify-end">
            <Link to={`/overview/${post.id}`}  className="btn btn-primary">Read More...</Link>
        </div>
    </div>
    </div>
  )
}
