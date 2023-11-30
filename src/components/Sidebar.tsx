import { ImageProperties } from "../models/models";
import TextInput from "./TextInput";
import { validateRotation, validateScale, validateString } from "../validators";

interface SidebarProps {
  image: ImageProperties;
  setImage: Function;
}

const Sidebar: React.FC<SidebarProps> = (props: SidebarProps) => {
  const handleScaleChange = (newScale: number | string) => {
    props.setImage((prevImage: ImageProperties) => ({
      ...prevImage,
      scale: newScale,
    }));
  };

  const handleRotationChange = (newRotation: number | string) => {
    props.setImage((prevImage: ImageProperties) => ({
      ...prevImage,
      rotation: newRotation,
    }));
  };

  return (
    <nav className="sidebar w-64 bg-blue-400">
      <div className="py-4 text-center">
        <span className="text-white text-2xl font-bold uppercase">
          Meme Generator
        </span>
      </div>
      <form className="sidebar-content px-4 py-6">
        <section className="mb-2">
          <h2 className="text-gray-200 text-lg mb-6">Image</h2>
          <div className="mb-6">
            <TextInput
              id={"url"}
              label="URL"
              placeholder="https://image.com/pic.png"
              value={props.image.url}
              validate={validateString}
              change={() => {}}
            />
          </div>

          <div className="mb-6">
            <TextInput
              id={"scale"}
              label="SCALE (1-200%)"
              placeholder="100"
              value={props.image.scale}
              validate={validateScale}
              change={handleScaleChange}
            />
          </div>
          <div className="mb-6">
            <TextInput
              id={"rotation"}
              label="ROTATION (0-360 degrees)"
              placeholder="0"
              value={props.image.rotation}
              validate={validateRotation}
              change={handleRotationChange}
            />
          </div>
          <div className="mb-6 flex items-center">
            <input
              type="checkbox"
              id="mirror"
              className="form-checkbox text-gray-600 h-5 w-5 mr-2 mb-2"
            />
            <label
              className="text-gray-700 text-sm font-bold mb-2"
              htmlFor="mirror"
            >
              MIRROR
            </label>
          </div>
        </section>
        <section>
          <h2 className="text-gray-200 text-lg mb-6">Text</h2>
        </section>
      </form>
    </nav>
  );
};

export default Sidebar;
