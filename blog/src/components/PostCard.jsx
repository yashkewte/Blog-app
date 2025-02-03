import React from 'react'
import {service} from '../appwrite/config'
import { Link } from 'react-router-dom'
import {Query} from 'appwrite'

function PostCard({$id, Title, ImageUrl}) {
  return (
    <Link to={`/post/${$id}`}>
        <div className='w-full bg-gray-100 rounded-xl p-4'>
            <div className='w-full justify-center mb-4'> 
                <img src={service.getFilePreview(ImageUrl)} alt={Title}
                     className='rounded-xl' />
            </div>
                <h2
                    className='text-xl font-bold'
                >{Title}</h2>
        </div>
    </Link>
  )
}

export default PostCard
