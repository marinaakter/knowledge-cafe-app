import React from 'react'
import PropTypes from "prop-types";
const Blog = ({ blog }) => {
    const { cover, title, author, reading_time, author_img, hashtags,posted_date } = blog;    
  return (
    <div className=" mb-4 p-3 bg-emerald-200 rounded-2xl">
      <img
        className="w-full mb-8 rounded-xl"
        src={cover}
        alt={`Cover picture of the title ${title}`}
      />
      {/* Author and reading time div */}
      <div className="flex justify-between items-center">
        {/* author pic, date div */}
        <div className="md:flex items-center">
          <div>
            <img
              className="rounded-full w-1/3 md:w-2/3"
              src={author_img}
              alt=""
            />
          </div>
          <div>
            <p className=""> {author} </p>
            <p> {posted_date} </p>
          </div>
        </div>
        {/* Reading time div */}
        <div>
          <span>{reading_time} min read</span>
        </div>
      </div>
      <h2 className="text-4xl font-bold mb-4">{title}</h2>
      <p>
        {hashtags.map((hash, idx) => (
          <span key={idx}>
            {" "}
            <a href=""> {hash} </a>{" "}
          </span>
        ))}
      </p>
      <button class=" px-3 py-3 bg-blue-500 transition delay-100 duration-200 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-white hover: text-black rounded">
        Mark as Read
      </button>
    </div>
  );
}

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}

export default Blog
