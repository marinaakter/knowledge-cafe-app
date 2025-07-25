import React from "react";
import PropTypes from "prop-types";
import { IoMdBookmark } from "react-icons/io";
const Blog = ({ blog }) => {
  const {
    cover,
    title,
    author,
    reading_time,
    author_img,
    hashtags,
    posted_date,
  } = blog;
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
        <div className="flex items-center gap-3">
          <span>{reading_time} min read</span>
          <button className="text-2xl">
            <IoMdBookmark />
          </button>
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
      <button class=" mt-4 group flex h-10 items-center justify-center rounded-md border border-teal-600 bg-gradient-to-b from-blue-600 via-blue-500 to-blue-600 px-4 text-neutral-50 shadow-[inset_0_1px_0px_0px_#5eead4] hover:bg-gradient-to-b hover:from-teal-600 hover:via-teal-600 hover:to-teal-600 active:[box-shadow:none]">
        <span class="block group-active:[transform:translate3d(0,1px,0)]">
          Mark As Read
        </span>
      </button>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};

export default Blog;
