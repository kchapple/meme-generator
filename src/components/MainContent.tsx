import { ImageProperties } from "../models/models";
import ImagePreview from "./ImagePreview";

interface MainProps {
  image: ImageProperties;
}

const MainContent: React.FC<MainProps> = (props: MainProps) => {
  return (
    <main className="main flex flex-col flex-grow -ml-64 md:ml-0 transition-all duration-150 ease-in">
      <div className="main-content flex flex-col flex-grow p-4">
        <div className="flex flex-col flex-grow border-4 border-gray-400 border-dashed bg-white rounded mt-4">
          <ImagePreview
            scale={props.image.scale}
            rotation={props.image.rotation}
            url={props.image.url}
          />
        </div>
      </div>
    </main>
  );
};

export default MainContent;
