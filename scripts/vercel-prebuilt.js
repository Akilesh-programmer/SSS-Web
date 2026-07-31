import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.join(__dirname, "..");
const distDir = path.join(projectRoot, "dist");
const vercelOutputDir = path.join(projectRoot, ".vercel", "output");
const vercelStaticDir = path.join(vercelOutputDir, "static");

// Helper to copy directory recursively
function copyFolderSync(from, to) {
  if (!fs.existsSync(to)) {
    fs.mkdirSync(to, { recursive: true });
  }
  
  fs.readdirSync(from).forEach((element) => {
    const fromPath = path.join(from, element);
    const toPath = path.join(to, element);
    
    if (fs.lstatSync(fromPath).isDirectory()) {
      copyFolderSync(fromPath, toPath);
    } else {
      fs.copyFileSync(fromPath, toPath);
    }
  });
}

async function preparePrebuilt() {
  console.log("Preparing Vercel prebuilt directory...");
  
  // Clean old output
  if (fs.existsSync(vercelOutputDir)) {
    fs.rmSync(vercelOutputDir, { recursive: true, force: true });
  }
  
  // Create output static directory
  fs.mkdirSync(vercelStaticDir, { recursive: true });
  
  // Copy dist content
  if (!fs.existsSync(distDir)) {
    console.error("Error: dist/ directory not found! Run npm run build first.");
    process.exit(1);
  }
  
  console.log("Copying built assets to Vercel output...");
  copyFolderSync(distDir, vercelStaticDir);
  
  // Create config.json for Vercel
  const config = {
    version: 3
  };
  
  fs.writeFileSync(
    path.join(vercelOutputDir, "config.json"),
    JSON.stringify(config, null, 2)
  );
  
  console.log("Vercel prebuilt output ready!");
}

preparePrebuilt().catch((err) => {
  console.error("Failed to prepare Vercel prebuilt output:", err);
  process.exit(1);
});
