import { useState } from "react";
import "./App.css";
import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";
import { ImageProperties } from "./models/models";

function App() {
  const [image, setImage] = useState<ImageProperties>({
    url: "https://cdn-images.article.com/products/SKU2128/2890x1500/image88982.jpg",
    scale: 100,
    rotation: 0,
  });

  return (
    <div className="flex flex-row min-h-screen bg-gray-100 text-gray-800">
      <Sidebar image={image} setImage={setImage} />
      <MainContent image={image} />
    </div>
  );
}

export default App;
