import React, { useState, useEffect } from "react";
import OptimizedImage from "./OptimizedImage";
import { imageManager } from "../../data/modernImageData";

/**
 * Universal Image Component that can handle:
 * - Regular images (img tag)
 * - Background images (div with background)
 * - Picture elements with multiple sources
 */
const UniversalOptimizedImage = ({
  // Image identification
  imageId,
  src,
  alt,

  // Display mode
  mode = "image", // "image" | "background" | "picture"

  // Background-specific props
  backgroundSize = "cover",
  backgroundPosition = "center",
  backgroundRepeat = "no-repeat",

  // Styling
  className = "",
  style = {},

  // Container props (for background mode)
  children,

  // All other OptimizedImage props
  ...imageProps
}) => {
  const [imageData, setImageData] = useState(null);
  const [loading, setLoading] = useState(!!imageId);

  // Load image data asynchronously if imageId is provided
  useEffect(() => {
    if (imageId) {
      setLoading(true);
      imageManager
        .getImage(imageId)
        .then((data) => {
          setImageData(data);
          setLoading(false);
        })
        .catch(() => {
          setImageData(null);
          setLoading(false);
        });
    }
  }, [imageId]);

  // Don't render anything while loading image data
  if (loading) {
    return (
      <div className={`bg-gray-100 animate-pulse ${className}`} style={style} />
    );
  }

  const finalSrc = imageData?.url || src;
  const finalAlt = alt || imageData?.alt || "";
  const finalSizes = imageData?.sizes || imageProps.sizes;
  const finalAspectRatio = imageData?.aspectRatio || imageProps.aspectRatio;
  const finalPriority = imageData?.priority || imageProps.priority || false;

  if (mode === "background") {
    return (
      <div
        className={`absolute inset-0 ${className}`}
        style={{
          ...style,
          backgroundImage: `url(${finalSrc})`,
          backgroundSize: backgroundSize,
          backgroundPosition: backgroundPosition,
          backgroundRepeat: backgroundRepeat,
        }}
      >
        {children}
      </div>
    );
  }

  // Regular image mode
  return (
    <OptimizedImage
      src={finalSrc}
      alt={finalAlt}
      sizes={finalSizes}
      priority={finalPriority}
      aspectRatio={finalAspectRatio}
      className={className}
      style={style}
      {...imageProps}
    />
  );
};

export default UniversalOptimizedImage;
