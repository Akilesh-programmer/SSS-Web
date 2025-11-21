#!/usr/bin/env node

/**
 * Post-Build Optimization Script
 * Analyzes and optimizes the production build
 */

const fs = require("fs");
const path = require("path");

const DIST_DIR = path.join(__dirname, "..", "dist");
const ASSETS_DIR = path.join(DIST_DIR, "assets");

// Color codes for console output
const colors = {
  reset: "\x1b[0m",
  red: "\x1b[31m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m",
  magenta: "\x1b[35m",
  cyan: "\x1b[36m",
};

// Performance budgets (in bytes)
const BUDGETS = {
  js: {
    total: 500 * 1024, // 500 KB total JS
    initial: 200 * 1024, // 200 KB initial bundle
    chunk: 100 * 1024, // 100 KB per chunk
  },
  css: {
    total: 50 * 1024, // 50 KB total CSS
    file: 30 * 1024, // 30 KB per file
  },
  images: {
    file: 200 * 1024, // 200 KB per image
  },
};

/**
 * Get file size in bytes
 */
function getFileSize(filePath) {
  try {
    const stats = fs.statSync(filePath);
    return stats.size;
  } catch (err) {
    return 0;
  }
}

/**
 * Format bytes to human readable
 */
function formatBytes(bytes) {
  if (bytes === 0) {
    return "0 B";
  }
  const k = 1024;
  const sizes = ["B", "KB", "MB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + " " + sizes[i];
}

/**
 * Get all files recursively
 */
function getAllFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      getAllFiles(filePath, fileList);
    } else {
      fileList.push(filePath);
    }
  });

  return fileList;
}

/**
 * Analyze bundle sizes
 */
function analyzeBundleSizes() {
  console.log(`\n${colors.cyan}=== Bundle Size Analysis ===${colors.reset}\n`);

  const allFiles = getAllFiles(ASSETS_DIR);

  const jsFiles = allFiles.filter((f) => f.endsWith(".js"));
  const cssFiles = allFiles.filter((f) => f.endsWith(".css"));
  const imageFiles = allFiles.filter((f) =>
    /\.(avif|webp|png|jpg|jpeg|svg)$/.test(f)
  );

  // JavaScript analysis
  console.log(`${colors.blue}JavaScript Files:${colors.reset}`);
  let totalJsSize = 0;
  const jsSizes = jsFiles.map((file) => {
    const size = getFileSize(file);
    totalJsSize += size;
    const fileName = path.basename(file);
    const sizeStr = formatBytes(size);
    const status =
      size > BUDGETS.js.chunk ? colors.red + "❌" : colors.green + "✅";
    console.log(`  ${status} ${fileName}: ${sizeStr}${colors.reset}`);
    return { file: fileName, size };
  });

  console.log(
    `  ${colors.magenta}Total JS: ${formatBytes(totalJsSize)}${colors.reset}`
  );
  if (totalJsSize > BUDGETS.js.total) {
    console.log(
      `  ${colors.red}⚠️  Warning: Total JS exceeds budget (${formatBytes(
        BUDGETS.js.total
      )})${colors.reset}`
    );
  }

  // CSS analysis
  console.log(`\n${colors.blue}CSS Files:${colors.reset}`);
  let totalCssSize = 0;
  cssFiles.forEach((file) => {
    const size = getFileSize(file);
    totalCssSize += size;
    const fileName = path.basename(file);
    const sizeStr = formatBytes(size);
    const status =
      size > BUDGETS.css.file ? colors.red + "❌" : colors.green + "✅";
    console.log(`  ${status} ${fileName}: ${sizeStr}${colors.reset}`);
  });

  console.log(
    `  ${colors.magenta}Total CSS: ${formatBytes(totalCssSize)}${colors.reset}`
  );
  if (totalCssSize > BUDGETS.css.total) {
    console.log(
      `  ${colors.red}⚠️  Warning: Total CSS exceeds budget (${formatBytes(
        BUDGETS.css.total
      )})${colors.reset}`
    );
  }

  // Image analysis
  console.log(`\n${colors.blue}Images:${colors.reset}`);
  let totalImageSize = 0;
  let largeImages = 0;
  imageFiles.forEach((file) => {
    const size = getFileSize(file);
    totalImageSize += size;
    if (size > BUDGETS.images.file) {
      largeImages++;
      const fileName = path.basename(file);
      console.log(
        `  ${colors.red}❌ ${fileName}: ${formatBytes(size)} (exceeds 200KB)${
          colors.reset
        }`
      );
    }
  });

  console.log(`  Total Images: ${imageFiles.length}`);
  console.log(`  Total Size: ${formatBytes(totalImageSize)}`);
  if (largeImages > 0) {
    console.log(
      `  ${colors.yellow}⚠️  ${largeImages} images exceed recommended size${colors.reset}`
    );
  }

  // Overall summary
  console.log(`\n${colors.cyan}=== Build Summary ===${colors.reset}`);
  console.log(
    `Total Build Size: ${formatBytes(
      totalJsSize + totalCssSize + totalImageSize
    )}`
  );
  console.log(`JavaScript: ${formatBytes(totalJsSize)}`);
  console.log(`CSS: ${formatBytes(totalCssSize)}`);
  console.log(`Images: ${formatBytes(totalImageSize)}`);

  // Check if build passes budgets
  const passed =
    totalJsSize <= BUDGETS.js.total &&
    totalCssSize <= BUDGETS.css.total &&
    largeImages === 0;

  if (passed) {
    console.log(
      `\n${colors.green}✅ Build passes all performance budgets!${colors.reset}\n`
    );
  } else {
    console.log(
      `\n${colors.yellow}⚠️  Some performance budgets exceeded. Consider optimization.${colors.reset}\n`
    );
  }

  return {
    passed,
    totalJsSize,
    totalCssSize,
    totalImageSize,
    largeImages,
  };
}

/**
 * Check for source maps in production
 */
function checkSourceMaps() {
  console.log(`${colors.cyan}=== Source Maps Check ===${colors.reset}\n`);

  const allFiles = getAllFiles(ASSETS_DIR);
  const sourceMaps = allFiles.filter((f) => f.endsWith(".map"));

  if (sourceMaps.length > 0) {
    console.log(
      `${colors.yellow}⚠️  Warning: ${sourceMaps.length} source maps found in production build${colors.reset}`
    );
    console.log("Consider removing source maps for production:\n");
    sourceMaps.forEach((map) => {
      console.log(`  - ${path.basename(map)}`);
    });
    console.log("");
  } else {
    console.log(
      `${colors.green}✅ No source maps in production build${colors.reset}\n`
    );
  }
}

/**
 * Generate build report
 */
function generateBuildReport(analysis) {
  const reportPath = path.join(DIST_DIR, "build-report.json");

  const report = {
    timestamp: new Date().toISOString(),
    passed: analysis.passed,
    sizes: {
      javascript: {
        total: analysis.totalJsSize,
        formatted: formatBytes(analysis.totalJsSize),
        budget: BUDGETS.js.total,
        passed: analysis.totalJsSize <= BUDGETS.js.total,
      },
      css: {
        total: analysis.totalCssSize,
        formatted: formatBytes(analysis.totalCssSize),
        budget: BUDGETS.css.total,
        passed: analysis.totalCssSize <= BUDGETS.css.total,
      },
      images: {
        total: analysis.totalImageSize,
        formatted: formatBytes(analysis.totalImageSize),
        largeImages: analysis.largeImages,
      },
      total: {
        bytes:
          analysis.totalJsSize +
          analysis.totalCssSize +
          analysis.totalImageSize,
        formatted: formatBytes(
          analysis.totalJsSize + analysis.totalCssSize + analysis.totalImageSize
        ),
      },
    },
    budgets: BUDGETS,
  };

  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
  console.log(
    `${colors.green}✅ Build report generated: ${reportPath}${colors.reset}\n`
  );
}

/**
 * Main execution
 */
function main() {
  console.log(
    `\n${colors.magenta}╔════════════════════════════════════════╗${colors.reset}`
  );
  console.log(
    `${colors.magenta}║  SSS Hospital - Build Optimization    ║${colors.reset}`
  );
  console.log(
    `${colors.magenta}╚════════════════════════════════════════╝${colors.reset}\n`
  );

  // Check if dist directory exists
  if (!fs.existsSync(DIST_DIR)) {
    console.log(
      `${colors.red}❌ Dist directory not found. Run 'npm run build' first.${colors.reset}\n`
    );
    process.exit(1);
  }

  // Run analyses
  const analysis = analyzeBundleSizes();
  checkSourceMaps();
  generateBuildReport(analysis);

  console.log(`${colors.cyan}=== Recommendations ===${colors.reset}\n`);
  console.log("1. Keep JavaScript bundles under 200KB for initial load");
  console.log("2. Optimize images to AVIF format and under 200KB");
  console.log("3. Lazy load non-critical components");
  console.log("4. Use code splitting for route-based chunks");
  console.log("5. Remove unused dependencies\n");

  console.log(`${colors.green}Build optimization complete!${colors.reset}\n`);

  // Exit with error if budgets exceeded (CI/CD integration)
  if (!analysis.passed && process.env.CI) {
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = { analyzeBundleSizes, checkSourceMaps, generateBuildReport };
