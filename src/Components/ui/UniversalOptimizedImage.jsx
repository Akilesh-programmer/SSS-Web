import React from "react";
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
  // Get image data from manager if imageId is provided
  const imageData = imageId ? imageManager.getImage(imageId) : null;
  const finalSrc = imageData?.url || src;
  const finalAlt = alt || imageData?.alt || "";
  const finalSizes = imageData?.sizes || imageProps.sizes;
  const finalAspectRatio = imageData?.aspectRatio || imageProps.aspectRatio;
  const finalPriority = imageData?.priority || imageProps.priority || false;

  if (mode === "background") {
    return (
      <div
        className={`relative overflow-hidden ${className}`}
        style={{
          ...style,
          aspectRatio: finalAspectRatio,
        }}
      >
        <OptimizedImage
          src={finalSrc}
          alt={finalAlt}
          sizes={finalSizes}
          priority={finalPriority}
          className="absolute inset-0 w-full h-full"
          objectFit={backgroundSize}
          {...imageProps}
        />
        {children && <div className="relative z-10 h-full">{children}</div>}
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
