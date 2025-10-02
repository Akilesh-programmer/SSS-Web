// Local asset resolver for public assets folder.
// Usage remains: raw("BG_Photos/DSC03391.JPG") -> /assets/BG_Photos/DSC03391.JPG

// Helper: returns public URL for given relative path inside public/assets
export const raw = (relativePath) => {
  if (!relativePath) return "";

  // Return the public path directly - Vite/Vercel will serve from public folder
  return `/assets/${relativePath}`;
};

// For backward compatibility - no longer needed but keeping for advanced usages
export const __ASSET_MAP__ = {};
