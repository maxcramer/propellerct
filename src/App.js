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
      setImages(items);
    }
  }, []);

  console.log(images);

  if (!images) return <div>No Images Avaliable</div>;
  return (
    <div className="App">
      {images.map((item) => (
        <div key={item.data[0].nasa_id} className="item_container">
          <h3>{item.data[0].title}</h3>
          <img src={item.links[0].href} alt="" />
          <p>{item.data[0].description}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
