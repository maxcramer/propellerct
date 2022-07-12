import "./App.css";
import { useEffect, useState } from "react";

import List from "./components/list/list";

function App() {
  const [images, setImages] = useState([]);

  const [loading, setLoading] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

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
  console.log(images);
  // if (!images) return <div>No Images Avaliable</div>;

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFistPost = indexOfLastPost - postsPerPage;
  const currentPosts = images.slice(indexOfFistPost, indexOfLastPost);

  return (
    <div className="App">
      <List images={currentPosts} loading={loading} />
    </div>
  );
}

export default App;
