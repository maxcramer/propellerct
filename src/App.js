import "./App.css";
import { useEffect, useState } from "react";

import List from "./components/list/list";

function App() {
  const [images, setImages] = useState(null);

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

  if (!images) return <div>No Images Avaliable</div>;

  return (
    <div className="App">
      <List images={images} />
    </div>
  );
}

export default App;
