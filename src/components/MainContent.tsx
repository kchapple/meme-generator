import { MemeProperties } from "../models/meme";
import ImagePreview from "./ImagePreview";

interface MainProps {
  meme: MemeProperties;
}

const MainContent: React.FC<MainProps> = (props: MainProps) => {
  return (
    <main className="main flex flex-col flex-grow ml-0">
      <div className="main-content flex flex-col flex-grow p-8">
        <div className="flex flex-col border-4 border-gray-400 border-dashed bg-white rounded mt-4">
          <ImagePreview meme={props.meme} />
        </div>
      </div>
    </main>
  );
};

export default MainContent;
