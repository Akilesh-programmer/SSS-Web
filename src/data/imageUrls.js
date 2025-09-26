// Centralized helpers for raw GitHub-hosted asset URLs
// Adjust OWNER, REPO, and BRANCH if the repository naming/branching changes.
export const GITHUB_OWNER = "Akilesh-programmer";
export const GITHUB_REPO = "SSS-Web";
export const GITHUB_BRANCH = "dev"; // change if deploying from another branch

// Base raw prefix
export const RAW_BASE = `https://raw.githubusercontent.com/${GITHUB_OWNER}/${GITHUB_REPO}/${GITHUB_BRANCH}/src/assets`;

// Helper to build a raw asset URL given a path relative to src/assets
export const raw = (relativePath) => {
  if (!relativePath) return RAW_BASE;
  // Encode each segment to safely handle spaces and special characters
  return `${RAW_BASE}/${relativePath
    .split("/")
    .map(encodeURIComponent)
    .join("/")}`;
};

// Example usage (reference only, not imported automatically):
// const doctor2 = raw("doctor_photos/2.png");
// const infra1 = raw("Infrastructure_Photos/DSC03356.JPG");
// const bg1 = raw("BG_Photos/DSC03391.JPG");
