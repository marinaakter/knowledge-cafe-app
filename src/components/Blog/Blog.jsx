import React from "react";
import PropTypes from "prop-types";
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
        <div className="flex items-center gap-4">
          <span>{reading_time} min read</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="30"
            height="30"
            viewBox="0 0 24 24"
          >
            <path d="M 6 2 C 4.8444444 2 4 2.9666667 4 4 L 4 22.039062 L 12 19.066406 L 20 22.039062 L 20 20.599609 L 20 4 C 20 3.4777778 19.808671 2.9453899 19.431641 2.5683594 C 19.05461 2.1913289 18.522222 2 18 2 L 6 2 z"></path>
          </svg>
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
