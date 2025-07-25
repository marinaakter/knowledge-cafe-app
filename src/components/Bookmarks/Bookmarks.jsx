import React from 'react'

const Bookmarks = ({ bookmarks }) => {
  return (
    <div className="md:w-1/3">
      <h1 className="my-3 text-3xl ml-5">Bookmarks: {bookmarks.length} </h1>
    </div>
  );
};

export default Bookmarks
