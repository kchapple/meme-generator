import React from "react";
import "./ImagePreview.css";

interface ImagePreviewProps {
  scale: number;
  rotation: number;
  url: string; // Dynamic image URL
}

const ImagePreview: React.FC<ImagePreviewProps> = ({
  scale,
  rotation,
  url,
}) => {
  return (
    <div className="image-preview">
      <div
        className="image-container"
        style={{
          background: `url(${url})`, // Use the dynamic URL
          backgroundSize: "cover",
          width: "100%",
          height: "100%",
          transform: `scale(${scale / 100}) rotate(${rotation}deg)`,
          //transformOrigin: "0 0", // Set the origin for rotation
        }}
      ></div>
    </div>
  );
};

export default ImagePreview;
