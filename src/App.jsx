import './App.css'
import Blogs from './components/Blogs/Blogs';
import Bookmarks from './components/Bookmarks/Bookmarks';
import Header from './components/Header/Header';

function App() {
  return (
    <>
      <div className="bg-gray-200 p-2">
        <Header></Header>
        <div className="md:flex max-w-7xl mx-auto bg-white rounded-2xl p-2 md:p-5">
          <Blogs></Blogs>
          <Bookmarks></Bookmarks>
        </div>
      </div>
      <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
    </>
  );
}

export default App
