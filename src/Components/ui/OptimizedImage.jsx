import React, { useState, useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

/**
 * Advanced Image Component with:
 * - Lazy loading with intersection observer
 * - Modern format support (WebP/AVIF fallback)
 * - Progressive loading with blur placeholder
 * - Responsive image sizing
 * - Error handling and retry mechanism
 * - Performance optimizations
 */
const OptimizedImage = ({
  src,
  alt,
  className = "",
  sizes = "100vw",
  priority = false,
  placeholder = "blur",
  quality = 85,
  objectFit = "cover",
  aspectRatio,
  onLoad,
  onError,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [retryCount, setRetryCount] = useState(0);
  const imgRef = useRef(null);

  // Lazy loading with intersection observer
  const { ref: inViewRef, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
    skip: priority, // Skip lazy loading for priority images
  });

  // Combined ref for both intersection observer and image element
  const setRefs = (element) => {
    imgRef.current = element;
    inViewRef(element);
  };

  // Generate responsive image URLs with modern formats
  const generateImageSources = (baseSrc) => {
    if (!baseSrc) return {};

    const pathParts = baseSrc.split(".");
    const extension = pathParts.pop();
    const basePath = pathParts.join(".");

    return {
      avif: `${basePath}.avif`,
      webp: `${basePath}.webp`,
      fallback: baseSrc,
    };
  };

  const imageSources = generateImageSources(src);

  // Handle image load
  const handleLoad = (e) => {
    setIsLoaded(true);
    setHasError(false);
    onLoad?.(e);
  };

  // Handle image error with retry mechanism
  const handleError = (e) => {
    if (retryCount < 2) {
      setTimeout(() => {
        setRetryCount((prev) => prev + 1);
        if (imgRef.current) {
          imgRef.current.src = imageSources.fallback;
        }
      }, 1000 * (retryCount + 1));
    } else {
      setHasError(true);
      onError?.(e);
    }
  };

  // Preload priority images
  useEffect(() => {
    if (priority && src) {
      const img = new Image();
      img.src = src;
    }
  }, [priority, src]);

  const shouldLoad = priority || inView;

  // Placeholder blur effect
  const blurDataURL =
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBmaWxsPSIjZjNmNGY2Ii8+Cjwvc3ZnPgo=";

  if (hasError) {
    return (
      <div
        className={`bg-gray-100 flex items-center justify-center ${className}`}
        style={{ aspectRatio }}
      >
        <div className="text-gray-400 text-center p-4">
          <svg
            className="w-8 h-8 mx-auto mb-2"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
              clipRule="evenodd"
            />
          </svg>
          <p className="text-xs">Image failed to load</p>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={setRefs}
      className={`relative overflow-hidden ${className}`}
      style={{ aspectRatio }}
    >
      {/* Blur placeholder */}
      {placeholder === "blur" && !isLoaded && (
        <div className="absolute inset-0 bg-gray-100">
          <img
            src={blurDataURL}
            alt=""
            className="w-full h-full object-cover blur-sm scale-110"
            style={{ filter: "blur(10px)" }}
          />
        </div>
      )}

      {/* Loading skeleton */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-pulse" />
      )}

      {/* Main image with modern format support */}
      {shouldLoad && (
        <motion.picture
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ duration: 0.15, ease: "easeOut" }}
          className="block w-full h-full"
        >
          {/* Modern formats with fallback */}
          <source srcSet={imageSources.avif} type="image/avif" />
          <source srcSet={imageSources.webp} type="image/webp" />
          <img
            ref={imgRef}
            src={imageSources.fallback}
            alt={alt}
            loading={priority ? "eager" : "lazy"}
            decoding="async"
            onLoad={handleLoad}
            onError={handleError}
            className={`w-full h-full transition-opacity duration-300 ${
              objectFit === "cover"
                ? "object-cover"
                : objectFit === "contain"
                ? "object-contain"
                : objectFit === "fill"
                ? "object-fill"
                : "object-center"
            }`}
            sizes={sizes}
            {...props}
          />
        </motion.picture>
      )}

      {/* Loading indicator for slow connections */}
      {shouldLoad && !isLoaded && !hasError && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-gray-300 border-t-blue-600 rounded-full animate-spin" />
        </div>
      )}
    </div>
  );
};

export default OptimizedImage;
