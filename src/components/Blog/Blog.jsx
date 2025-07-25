import React from 'react'
import PropTypes from "prop-types";
const Blog = ({ blog }) => {
    const { cover, title, author, reading_time, author_img, hashtags } = blog;    
  return (
    <div className='mb-20'>
      <img className='w-full mb-8 rounded-3xl' src={cover} alt={`Cover picture of the title ${title}`} />
      {/* Author and reading time div */}
      <div className="flex justify-between items-center">
        {/* author pic, date div */}
        <div>
          <img className='rounded-full w-1/2' src={author_img} alt="" />
        </div>
        {/* Reading time div */}
        <div>
          <span>{reading_time} min read</span>
        </div>
      </div>
      <h2 className="text-4xl mb-4">{title}</h2>
      <p>
        {
          hashtags.map((hash, idx) => <span key={idx}> <a href=""> {hash} </a> </span> )
      }
      </p>
    </div>
  );
}

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}

export default Blog
