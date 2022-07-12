import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [images, setImages] = useState(null);

  useEffect(() => {
    fetchData();
    async function fetchData() {
      const res = await fetch(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=4r7rlpLmJt48cg4tmTUYangEZIQUqE1kwAiPPOcS`
      );
      console.log(res);
      const data = await res.json();
      setImages(data);
    }
  }, []);
  if (!images) return <div>No Images Avaliable</div>;
  console.log(images);

  return <div className="App"></div>;
}

export default App;
