/*  Individual post on blog page 
    Title is a link
    Description is body of the post
    Description is not visible on page
*/

import React from 'react'
import {Link} from "react-router-dom"
import PostAuthor from './PostAuthor'

const PostItem = ({postID, category, title, description, authorID, thumbnail}) => {
    /* Shorten the length of the description if  > 145 chars */
    const shortDescription = description.length > 145 ? description.substr(0, 145) + '...' : description;
  
    return (
    <article className="post">
        <div className="post__thumbnail">
            <img src={thumbnail} alt={title} />
        </div>
        <div className="post__content">
            <Link to={`/posts/${postID}`}>
                <h3>{title}</h3>
            </Link>
            <p>{shortDescription}</p>
            <div className="post__footer">
                <PostAuthor />
                <Link to={`/posts/categories/${category}`} className='btn category'>{category}</Link>
            </div>
        </div>
    </article>
  )
}

export default PostItem