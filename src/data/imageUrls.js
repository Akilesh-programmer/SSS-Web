// Local asset resolver replacing previous remote GitHub raw URL helper.
// Usage remains: raw("BG_Photos/DSC03391.JPG") -> resolved build URL via Vite.

// Eagerly import all files under /src/assets (relative path from this file is ../assets)
const modules = import.meta.glob("../assets/**", {
  eager: true,
  import: "default",
});

// Build a normalized lookup: key is path relative to assets root (e.g. 'doctor_photos/2.png')
const assetMap = {};
for (const [fullPath, mod] of Object.entries(modules)) {
  // fullPath examples: '../assets/doctor_photos/2.png'
  const rel = fullPath.split("/assets/")[1];
  if (rel) assetMap[rel] = mod;
}

// Helper: returns local processed URL for given relative path inside src/assets
export const raw = (relativePath) => {
  if (!relativePath) return "";
  const direct = assetMap[relativePath];
  if (direct) return direct;
  // Attempt case-insensitive fallback
  const lowerKey = relativePath.toLowerCase();
  const ciMatch = Object.entries(assetMap).find(
    ([k]) => k.toLowerCase() === lowerKey
  );
  if (ciMatch) return ciMatch[1];
  console.warn("[raw] asset not found:", relativePath);
  return "";
};

// (Optional) Export map for advanced usages
export const __ASSET_MAP__ = assetMap;
