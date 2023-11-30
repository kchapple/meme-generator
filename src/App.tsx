import { useState } from "react";
import "./App.css";
import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";
import { MemeProperties } from "./models/meme";

const App: React.FC = () => {
  const [meme, setMeme] = useState<MemeProperties>({
    url: "https://cdn-images.article.com/products/SKU2128/2890x1500/image88982.jpg",
    scale: 100,
    rotation: 0,
    mirror: false,
    topText: "Top text...",
    bottomText: "Bottom text...",
    textColor: "#000000",
  });

  return (
    <div
      data-testid="app"
      className="flex flex-row min-h-screen bg-gray-100 text-gray-800"
    >
      <Sidebar meme={meme} setMeme={setMeme} />
      <MainContent meme={meme} />
    </div>
  );
};

export default App;
