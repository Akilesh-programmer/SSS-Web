/**
 * Generate ULTRA-LARGE Favicons for Maximum Visibility
 * Generates 128x128, 96x96, 64x64 and smaller sizes for all displays
 */

import sharp from "sharp";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const INPUT_LOGO = path.join(__dirname, "../public/assets/logos/sss-logo.avif");
const OUTPUT_DIR = path.join(__dirname, "../public");

// ULTRA-LARGE favicon sizes for MAXIMUM VISIBILITY
// Modern browsers support up to 128x128 for high-DPI displays
const sizes = [
  // ULTRA-LARGE favicons - Maximum visibility on all screens
  { name: "favicon-128x128.png", size: 128, format: "png" },  // Ultra-large (Retina displays)
  { name: "favicon-96x96.png", size: 96, format: "png" },     // Extra-large (High-DPI)
  { name: "favicon.png", size: 64, format: "png" },           // Large (Standard)
  { name: "favicon-48x48.png", size: 48, format: "png" },     // Medium
  { name: "favicon-32x32.png", size: 32, format: "png" },     // Small fallback
  
  // ICO with large size for legacy browsers
  { name: "favicon.ico", size: 64, format: "ico" },           // Upgraded to 64x64!
  
  // Apple Touch Icons - iOS/macOS Safari
  { name: "apple-touch-icon.png", size: 180, format: "png" },
  
  // PWA Icons - Android Chrome, Samsung Internet
  { name: "icon-192.png", size: 192, format: "png" },
  { name: "icon-512.png", size: 512, format: "png" },
];

async function generateFavicons() {
  console.log("🎨 Generating ULTRA-LARGE favicons for maximum visibility...\n");

  if (!fs.existsSync(INPUT_LOGO)) {
    console.error("❌ Error: Logo file not found at:", INPUT_LOGO);
    process.exit(1);
  }

  try {
    const image = sharp(INPUT_LOGO);
    const metadata = await image.metadata();
    console.log(`✅ Loaded logo: ${metadata.width}x${metadata.height}\n`);

    for (const { name, size, format } of sizes) {
      const outputPath = path.join(OUTPUT_DIR, name);

      await sharp(INPUT_LOGO)
        .resize(size, size, {
          fit: "contain",
          background: { r: 255, g: 255, b: 255, alpha: 0 },
        })
        .png({ quality: 100, compressionLevel: 9 })
        .toFile(outputPath);

      console.log(`✅ Generated: ${name} (${size}x${size})`);
    }

    console.log("\n🎉 All ULTRA-LARGE favicons generated!");
    console.log("\n📁 Icon sizes created:");
    console.log("   ✓ 128x128 - ULTRA-LARGE (Retina/4K displays)");
    console.log("   ✓ 96x96   - EXTRA-LARGE (High-DPI displays)");
    console.log("   ✓ 64x64   - LARGE (Standard displays)");
    console.log("   ✓ 48x48   - Medium");
    console.log("   ✓ 32x32   - Small fallback");
    console.log("   ✓ 180x180 - Apple Touch Icon");
    console.log("   ✓ 192x192, 512x512 - PWA Icons");
    console.log("\n🚀 Your favicon will be HUGE and VISIBLE!");
  } catch (error) {
    console.error("❌ Error:", error.message);
    process.exit(1);
  }
}

generateFavicons();
