/**
 * Centralized Apple Device Detection
 * Used to prevent flickering issues on iOS/macOS Safari
 */

export const isAppleDevice = () => {
  if (typeof navigator === "undefined") {
    return false;
  }

  return (
    /iPad|iPhone|iPod/.test(navigator.userAgent) ||
    (navigator.userAgent.includes("Mac") && "ontouchend" in document)
  );
};

// CSS class to add to body for global styling
export const addAppleDeviceClass = () => {
  if (typeof document === "undefined") {
    return;
  }

  if (isAppleDevice()) {
    document.documentElement.classList.add("is-apple-device");
    document.body.classList.add("is-apple-device");
  }
};

// Initialize on load
if (typeof document !== "undefined") {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", addAppleDeviceClass);
  } else {
    addAppleDeviceClass();
  }
}
