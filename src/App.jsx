import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const handleAddToBookmark = (blog) => {
    const newBookmarks = [...bookmarks, blog]
    setBookmarks(newBookmarks)
  };

  return (
    <>
      <div className="bg-gray-200 p-2">
        <Header></Header>
        <div className="md:flex max-w-7xl md:mx-auto bg-white rounded-2xl p-2 md:p-5">
          <Blogs handleAddToBookmark={handleAddToBookmark}></Blogs>
          <Bookmarks bookmarks={bookmarks}></Bookmarks>
        </div>
      </div>
    </>
  );
}

export default App;
