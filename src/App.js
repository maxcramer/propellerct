import "./App.css";
import { useEffect, useState } from "react";

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
      console.log(items);
      setImages(items);
    }
  }, []);
  if (!images) return <div>No Images Avaliable</div>;

  return (
    <div className="App">
      {images.map((item) => (
        <div key={item.href}>
          <h2>Testing</h2>
        </div>
      ))}
    </div>
  );
}

export default App;
