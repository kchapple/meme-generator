import { useEffect, useState } from "react";
import "./ImagePreview.css";
import { MemeProperties } from "../models/meme";
import { computeTransformStyle } from "../utilities";

interface ImagePreviewProps {
  meme: MemeProperties;
}

const ImagePreview: React.FC<ImagePreviewProps> = (
  props: ImagePreviewProps
) => {
  const [transformStyle, setTransformStyle] = useState(
    computeTransformStyle(
      props.meme.scale,
      props.meme.rotation,
      props.meme.mirror
    )
  );

  useEffect(() => {
    setTransformStyle(
      computeTransformStyle(
        props.meme.scale,
        props.meme.rotation,
        props.meme.mirror
      )
    );
  }, [props.meme.scale, props.meme.rotation, props.meme.mirror]);

  return (
    <div className="image-preview relative">
      <div
        className="absolute top-8 z-10 text-4xl font-bold uppercase"
        style={{ color: props.meme.textColor }}
      >
        {props.meme.topText}
      </div>
      <div
        className="absolute bottom-8 z-10 text-4xl font-bold uppercase"
        style={{ color: props.meme.textColor }}
      >
        {props.meme.bottomText}
      </div>
      <div
        className="image-container"
        style={{
          backgroundImage: `url(${props.meme.url})`,
          backgroundSize: "cover",
          width: "100%",
          height: "100%",
          transform: transformStyle,
        }}
      ></div>
    </div>
  );
};

export default ImagePreview;
