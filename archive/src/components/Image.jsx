import { useState } from "react";

export default function Image({
  src,
  alt = "",
  compressedSrc = "",
  className = "",
}) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <>
      {/* If the Image is not loaded then show this blured image */}
      {!imageLoaded && (
        <img src={compressedSrc} className={`${className} blur-md`} />
      )}

      {/* Real Image */}
      <img
        src={src}
        alt={alt}
        onLoad={() => setImageLoaded(true)}
        className={`${className} ${imageLoaded ? "" : "hidden"}`}
      />
    </>
  );
}
