import "./App.scss";
import { useEffect, useState } from "react";

import List from "./components/list/list";
import Pagination from "./components/pagination/pagination";
function App() {
  const [images, setImages] = useState([]);

  const [loading, setLoading] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(9);

  useEffect(() => {
    fetchData();
    async function fetchData() {
      const res = await fetch(
        `https://images-api.nasa.gov/search?media_type=image`
      );
      const data = await res.json();
      const items = await data.collection.items;
      setImages(items);
    }
  }, []);

  if (!images) return <div>Loading...</div>;

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFistPost = indexOfLastPost - postsPerPage;
  const currentPosts = images.slice(indexOfFistPost, indexOfLastPost);

  // set Pagination numbers
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="App">
      <List images={currentPosts} loading={loading} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={images.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
}

export default App;
