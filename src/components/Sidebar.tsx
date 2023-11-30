import { MemeProperties } from "../models/meme";
import TextInput from "./TextInput";
import { validateRotation, validateScale, validateString } from "../validators";
import { Label } from "./Label";

interface SidebarProps {
  meme: MemeProperties;
  setMeme: React.Dispatch<React.SetStateAction<MemeProperties>>;
}

const Sidebar: React.FC<SidebarProps> = (props: SidebarProps) => {
  const handlePropertyChange = (
    propertyName: string,
    newValue: string | number | boolean
  ) => {
    props.setMeme({
      ...props.meme,
      [propertyName]: newValue,
    });
  };

  const handleUrlChange = (newUrl: string | number) => {
    handlePropertyChange("url", newUrl);
  };

  const handleScaleChange = (newScale: string | number) => {
    handlePropertyChange("scale", newScale);
  };

  const handleRotationChange = (newRotation: string | number) => {
    handlePropertyChange("rotation", newRotation);
  };

  const handleMirrorChange = (newMirror: boolean) => {
    handlePropertyChange("mirror", newMirror);
  };

  const handleTopTextChange = (newText: string | number) => {
    handlePropertyChange("topText", newText);
  };

  const handleBottomTextChange = (newText: string | number) => {
    handlePropertyChange("bottomText", newText);
  };

  const handleTextColorChange = (newTextColor: string) => {
    handlePropertyChange("textColor", newTextColor);
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
              testid="url-input"
              id="url"
              label="URL"
              placeholder="https://image.com/pic.png"
              value={props.meme.url}
              validate={validateString}
              change={handleUrlChange}
            />
          </div>

          <div className="mb-6">
            <TextInput
              testid="scale-input"
              id="scale"
              label="SCALE (1-200%)"
              placeholder="100"
              value={props.meme.scale}
              validate={validateScale}
              change={handleScaleChange}
            />
          </div>
          <div className="mb-6">
            <TextInput
              testid="rotation-input"
              id="rotation"
              label="ROTATION (0-360 degrees)"
              placeholder="0"
              value={props.meme.rotation}
              validate={validateRotation}
              change={handleRotationChange}
            />
          </div>
          <div className="mb-6 flex items-center">
            <input
              data-testid="mirror-checkbox"
              id="mirror"
              type="checkbox"
              className="form-checkbox text-gray-600 h-5 w-5 mr-2 mb-2"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleMirrorChange(e.target.checked)
              }
            />
            <Label text="MIRROR" htmlFor="mirror" />
          </div>
        </section>
        <section className="mb2">
          <h2 className="text-gray-200 text-lg mb-6">Text</h2>
          <div className="mb-6">
            <TextInput
              testid="topText-input"
              id="topText"
              label="TOP"
              placeholder="top text...."
              value={props.meme.topText}
              validate={validateString}
              change={handleTopTextChange}
            />
          </div>
          <div className="mb-6">
            <TextInput
              testid="bottomText-input"
              id="bottomText"
              label="BOTTOM"
              placeholder="bottom text...."
              value={props.meme.bottomText}
              validate={validateString}
              change={handleBottomTextChange}
            />
          </div>
          <div className="mb-6 flex flex-col">
            <Label text="COLOR" htmlFor="color" />
            <input
              data-testid="color-input"
              id="color"
              type="color"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                handleTextColorChange(e.target.value);
              }}
            ></input>
          </div>
        </section>
      </form>
    </nav>
  );
};

export default Sidebar;
