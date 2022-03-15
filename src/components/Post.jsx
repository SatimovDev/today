import React from 'react'
import { Link } from 'react-router-dom'

export const Post = ({post}) => {
  return (
    <div class="card w-96 bg-base-100 shadow-xl">
  <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">{post.title.substring(0,15).toUpperCase()}</h2>
    <p>{post.body.substring(0,30)}</p>
    <div class="card-actions justify-end">
      <Link to={`/overview/${post.id}`} class="btn btn-primary">Buy Now</Link>
    </div>
  </div>
</div>
  )
}
